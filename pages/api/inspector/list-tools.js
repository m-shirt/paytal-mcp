// pages/api/inspector/list-tools.js
import { discoverTools } from "../../../lib/tools.js";

function transformTools(tools) {
  return tools
    .map((tool) => {
      const def = tool.definition?.function;
      if (!def) return null;
      return {
        name: def.name,
        description: def.description,
        parameters: def.parameters, // JSON Schema
      };
    })
    .filter(Boolean);
}

export default async function handler(_req, res) {
  try {
    const tools = await discoverTools();
    const transformed = transformTools(tools);
    res.status(200).json({ tools: transformed });
  } catch (err) {
    res.status(500).json({ error: "Failed to list tools", details: String(err?.message || err) });
  }
}
