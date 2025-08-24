#!/usr/bin/env node

import dotenv from 'dotenv';
import express from 'express';
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import {
  CallToolRequestSchema,
  ErrorCode,
  GetPromptRequestSchema,
  ListPromptsRequestSchema,
  ListToolsRequestSchema,
  McpError,
} from '@modelcontextprotocol/sdk/types.js';
import { discoverTools } from './lib/tools.js';
import { discoverPrompts } from './lib/prompts.js';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '.env') });

const SERVER_NAME = 'paytal';

async function transformTools(tools) {
  return tools
    .map((tool) => {
      const definitionFunction = tool.definition?.function;
      if (!definitionFunction) return;
      return {
        name: definitionFunction.name,
        description: definitionFunction.description,
        inputSchema: definitionFunction.parameters,
      };
    })
    .filter(Boolean);
}


export async function transformPrompts(prompts) {
  return prompts.map(({ id, metadata }) => ({
    id,
    name: metadata.title,
    description: metadata.description,
    arguments: metadata.argsSchema
  }));
}


export async function setupServerHandlers(server, tools, prompts) {
    // Register tools
    server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: await transformTools(tools),
    
  }));

  const transformedPrompts = await transformPrompts(prompts)
  // Register prompts
  server.setRequestHandler(ListPromptsRequestSchema, async () => ({
    prompts: transformedPrompts,
  }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {

   console.log("\n=== Incoming Tool Call ===");
   console.log("Tool Name:", request.params.name);
   console.log("Arguments:", JSON.stringify(request.params.arguments, null, 2));

    const toolName = request.params.name;
    const tool = tools.find((t) => t.definition.function.name === toolName);
    if (!tool) {
      throw new McpError(ErrorCode.MethodNotFound, `Unknown tool: ${toolName}`);
    }
    const args = request.params.arguments;
    const requiredParameters =
      tool.definition?.function?.parameters?.required || [];
    for (const requiredParameter of requiredParameters) {
      if (!(requiredParameter in args)) {
        throw new McpError(
          ErrorCode.InvalidParams,
          `Missing required parameter: ${requiredParameter}`
        );
      }
    }
    try {
      const result = await tool.function(args);
     console.log("=== Tool Result ===");
     console.log(JSON.stringify(result, null, 2));
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    } catch (error) {
     // console.log('[Error] Failed to fetch data:', error);
      throw new McpError(
        ErrorCode.InternalError,
        `API error: ${error.message}`
      );
    }
  });

    // Handle prompt calls
  server.setRequestHandler(GetPromptRequestSchema, async (request) => {
    const prompt = prompts.find(p => p.metadata.title === request.params.name);
    if (!prompt) throw new McpError(ErrorCode.MethodNotFound, "Prompt not found");

    const args = request.params.arguments || {};
    const result = await prompt.handler(args);

    // Must return { messages: [...] } to pass validation
    if (!Array.isArray(result.messages)) {
      throw new McpError(ErrorCode.InternalError, "Prompt handler must return messages array");
    }

    return result;
  });
}

async function setupStreamableHttp(tools, prompts) {
  const app = express();
  app.use(express.json());

  app.post('/mcp', async (req, res) => {
    try {
      const server = new Server(
        {
          name: SERVER_NAME,
          version: '0.1.0',
        },
        {
          capabilities: {
            tools: {},
            prompts: {},
          },
        }
      );
     // server.onerror = (error) => console.log('[Error]', error);
      await setupServerHandlers(server, tools, prompts);

      const transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: undefined,
      });

      res.on('close', async () => {
        await transport.close();
        await server.close();
      });

      await server.connect(transport);
      await transport.handleRequest(req, res, req.body);
    } catch (error) {
     // console.log('Error handling MCP request:', error);
      if (!res.headersSent) {
        res.status(500).json({
          jsonrpc: '2.0',
          error: {
            code: -32603,
            message: 'Internal server error',
          },
          id: null,
        });
      }
    }
  });

  const port = process.env.PORT || 3001;
  app.listen(port, () => {
  //  console.log(`[Streamable HTTP Server] running at http://127.0.0.1:${port}/mcp`);
  });
}

async function setupSSE(tools, prompts) {
  const app = express();
  const transports = {};
  const servers = {};

  app.get('/sse', async (_req, res) => {
    const server = new Server(
      {
        name: SERVER_NAME,
        version: '0.1.0',
      },
      {
        capabilities: {
          tools: {},
          prompts: {},
        },
      }
    );
  //  server.onerror = (error) => console.log('[Error]', error);
    await setupServerHandlers(server, tools, prompts);

    const transport = new SSEServerTransport('/messages', res);
    transports[transport.sessionId] = transport;
    servers[transport.sessionId] = server;

    res.on('close', async () => {
      delete transports[transport.sessionId];
      await server.close();
      delete servers[transport.sessionId];
    });

    await server.connect(transport);
  });

  app.post('/messages', async (req, res) => {
    const sessionId = req.query.sessionId;
    const transport = transports[sessionId];
    const server = servers[sessionId];

    if (transport && server) {
      await transport.handlePostMessage(req, res);
    } else {
      res.status(400).send('No transport/server found for sessionId');
    }
  });

  const port = process.env.PORT || 3001;
  app.listen(port, () => {
   // console.log(`[SSE Server] is running:`);
   // console.log(`  SSE stream:    http://127.0.0.1:${port}/sse`);
   // console.log(`  Message input: http://127.0.0.1:${port}/messages`);
  });
}

async function setupStdio(tools, prompts) {
  // stdio mode: single server instance
  const server = new Server(
    {
      name: SERVER_NAME,
      version: '0.1.0',
    },
    {
      capabilities: {
        tools: {},
        prompts: {},
      },
    }
  );
  //server.onerror = (error) => console.log('[Error]', error);
  await setupServerHandlers(server, tools, prompts);

  process.on('SIGINT', async () => {
    await server.close();
    process.exit(0);
  });

  const transport = new StdioServerTransport();
  await server.connect(transport);
     //// console.log(`Stdio Server is running`);

}

async function run() {
  const args = process.argv.slice(2);
  const isStreamableHttp = args.includes('--streamable-http');
  const isSSE = args.includes('--sse');
  const tools = await discoverTools();
  const prompts = await discoverPrompts();

  if (isStreamableHttp && isSSE) {
   // console.log('Error: Cannot specify both --streamable-http and --sse');
    process.exit(1);
  }

  if (isStreamableHttp) {
    await setupStreamableHttp(tools,prompts);
  } else if (isSSE) {
    await setupSSE(tools,prompts);
  } else {
    await setupStdio(tools,prompts);
  }
}

run().catch(console.log);
