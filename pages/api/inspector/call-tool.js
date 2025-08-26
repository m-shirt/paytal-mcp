// pages/api/inspector/call-tool.js
import { discoverTools } from "../../../lib/tools.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { name, args = {} } = req.body || {};
  if (!name) return res.status(400).json({ error: "Missing tool name" });

  try {
    const tools = await discoverTools();
    const tool = tools.find((t) => t?.definition?.function?.name === name);
    if (!tool) return res.status(404).json({ error: `Unknown tool: ${name}` });

    // Validate required params (lightweight)
    const required = tool.definition?.function?.parameters?.required || [];
    for (const r of required) {
      if (!(r in args)) {
        return res.status(400).json({ error: `Missing required parameter: ${r}` });
      }
    }

    const result = await tool.function(args);
    res.status(200).json({ ok: true, result });
  } catch (err) {
    res.status(500).json({ ok: false, error: String(err?.message || err) });
  }
}
