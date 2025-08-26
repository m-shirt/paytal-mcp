// pages/index.js
import { useEffect, useState } from "react";

export default function Home() {
  const [tools, setTools] = useState([]);
  const [selected, setSelected] = useState(null);
  const [paramsText, setParamsText] = useState("{}");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/inspector/list-tools");
        const data = await res.json();
        setTools(data.tools || []);
      } catch (e) {
        setErr("Failed to load tools");
      }
    })();
  }, []);

  function selectTool(tool) {
    setSelected(tool);
    const example = tool?.parameters?.properties
      ? Object.fromEntries(
          Object.entries(tool.parameters.properties).map(([k, v]) => [k, v.default ?? (v.type === "number" ? 0 : v.type === "boolean" ? false : "")])
        )
      : {};
    setParamsText(JSON.stringify(example, null, 2));
    setResponse(null);
    setErr("");
  }

  async function runTool() {
    setLoading(true);
    setErr("");
    setResponse(null);
    try {
      const args = paramsText ? JSON.parse(paramsText) : {};
      const res = await fetch("/api/inspector/call-tool", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: selected.name, args }),
      });
      const data = await res.json();
      if (!res.ok || data.ok === false) {
        throw new Error(data.error || `HTTP ${res.status}`);
      }
      setResponse(data.result);
    } catch (e) {
      setErr(String(e.message || e));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", height: "100vh" }}>
      {/* Sidebar */}
      <aside style={{ borderRight: "1px solid #eee", padding: 16, overflowY: "auto" }}>
        <h2 style={{ fontWeight: 700, marginBottom: 12 }}>MCP Tools</h2>
        {tools.length === 0 ? (
          <div style={{ color: "#666" }}>No tools found.</div>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {tools.map((t) => (
              <li key={t.name}>
                <button
                  onClick={() => selectTool(t)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "8px 10px",
                    borderRadius: 8,
                    border: "1px solid #e5e7eb",
                    background: selected?.name === t.name ? "#e0f2fe" : "#fff",
                    marginBottom: 8,
                    cursor: "pointer",
                  }}
                >
                  <div style={{ fontWeight: 600 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#555" }}>{t.description}</div>
                </button>
              </li>
            ))}
          </ul>
        )}
      </aside>

      {/* Main */}
      <main style={{ padding: 16, display: "grid", gridTemplateRows: "auto auto 1fr", gap: 12 }}>
        {selected ? (
          <>
            <div>
              <h1 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>{selected.name}</h1>
              <p style={{ marginTop: 4, color: "#555" }}>{selected.description}</p>
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ margin: 0 }}>Parameters (JSON)</h3>
                <button
                  onClick={runTool}
                  disabled={loading}
                  style={{
                    padding: "8px 12px",
                    borderRadius: 8,
                    border: "1px solid #0ea5e9",
                    background: loading ? "#bae6fd" : "#0ea5e9",
                    color: "#fff",
                    cursor: loading ? "default" : "pointer",
                  }}
                >
                  {loading ? "Running…" : "Run"}
                </button>
              </div>
              <textarea
                value={paramsText}
                onChange={(e) => setParamsText(e.target.value)}
                style={{
                  width: "100%",
                  height: 180,
                  marginTop: 8,
                  padding: 10,
                  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                  borderRadius: 8,
                  border: "1px solid #e5e7eb",
                }}
              />
              {err && <div style={{ color: "#b91c1c", marginTop: 8 }}>Error: {err}</div>}
            </div>

            <section style={{ overflow: "auto", border: "1px solid #e5e7eb", borderRadius: 8, padding: 12 }}>
              <h3 style={{ marginTop: 0 }}>Response</h3>
              <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
                {response ? JSON.stringify(response, null, 2) : "No response yet."}
              </pre>
            </section>
          </>
        ) : (
          <div style={{ color: "#666", alignSelf: "center" }}>Select a tool from the sidebar.</div>
        )}
      </main>
    </div>
  );
}
