import { useEffect, useState } from "react";
import styles from "./Home.module.css";

export default function Home() {
  const [tools, setTools] = useState([]);
  const [selected, setSelected] = useState(null);
  const [paramsText, setParamsText] = useState("{}");
  const [paramsForm, setParamsForm] = useState({});
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [mode, setMode] = useState("form"); // default form

  const [serverUrl, setServerUrl] = useState(
    typeof window !== "undefined" ? `${window.location.origin}/api/mcp` : ""
  );
  const [connected, setConnected] = useState(true);
  const [logs, setLogs] = useState([]);
  const [serverInput, setServerInput] = useState(serverUrl); // local input value

  async function rpcRequest(method, params = {}) {
    const res = await fetch(serverUrl, {
      method: "POST",
      headers: {
        Accept: "application/json, text/event-stream",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: Date.now().toString(),
        method,
        params,
      }),
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const text = await res.text();

    // Extract JSON payload from SSE style response
    const match = text.match(/data:\s*(\{.*\})/);
    if (!match) throw new Error("No JSON payload in SSE response");

    const json = JSON.parse(match[1]);

    if (json.error) throw new Error(json.error.message || "Unknown RPC error");

    return json.result;
  }

  async function loadTools() {
    try {
      const result = await rpcRequest("tools/list", {});
      setTools(result.tools || []);
      setLogs((l) => [...l, "Tools loaded successfully"]);
    } catch (e) {
      setErr("Failed to load tools");
      setLogs((l) => [...l, `Error loading tools: ${String(e)}`]);
    }
  }

  useEffect(() => {
    if (serverUrl) loadTools();
  }, [serverUrl]);

  function selectTool(tool) {
    setSelected(tool);
    const example = tool?.inputSchema?.properties
      ? Object.fromEntries(
          Object.entries(tool.inputSchema.properties).map(([k, v]) => {
            let defaultVal = "";
            if (v.type === "number") defaultVal = 0;
            else if (v.type === "boolean") defaultVal = false;
            else defaultVal = "";
            return [k, defaultVal];
          })
        )
      : {};
    setParamsText(JSON.stringify(example, null, 2));
    setParamsForm(example);
    setResponse(null);
    setErr("");
  }

  async function runTool() {
    setLoading(true);
    setErr("");
    setResponse(null);
    try {
      const args = mode === "json" ? JSON.parse(paramsText) : paramsForm;
      const result = await rpcRequest("tools/call", {
        name: selected.name,
        arguments: args,
        _meta: { progressToken: 20 },
      });
      setResponse(result);
      setLogs((l) => [...l, `Tool "${selected.name}" executed successfully`]);
    } catch (e) {
      setErr(String(e.message || e));
      setLogs((l) => [...l, `Error running tool: ${String(e)}`]);
    } finally {
      setLoading(false);
    }
  }

  async function connect() {
    setErr("");
    setLogs((l) => [...l, `Connecting to ${serverInput}...`]);

    setTools([]);
    setSelected(null);

    try {
      const oldUrl = serverUrl;
      setServerUrl(serverInput);
      await loadTools();
      setConnected(true);
      setLogs((l) => [...l, `Connected successfully to ${serverInput}`]);
    } catch (e) {
      setConnected(false);
      setErr(`Failed to connect: ${String(e)}`);
      setLogs((l) => [...l, `Connection error: ${String(e)}`]);
    }
  }

  function disconnect() {
    setConnected(false);
    setTools([]);
    setSelected(null);
    setLogs((l) => [...l, "Disconnected"]);
  }
  function reconnect() {
    disconnect();
    connect();
  }

  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <h2>MCP Tools</h2>
        {tools.length === 0 ? (
          <div className={styles.empty}>No tools found.</div>
        ) : (
          <ul>
            {tools.map((t) => (
              <li key={t.name}>
                <button
                  onClick={() => selectTool(t)}
                  className={`${styles.toolBtn} ${
                    selected?.name === t.name ? styles.active : ""
                  }`}
                >
                  <div className={styles.toolName}>{t.name}</div>
                  <div className={styles.toolDesc}>{t.description}</div>
                </button>
              </li>
            ))}
          </ul>
        )}
      </aside>

      {/* Main */}
      <main className={styles.main}>
        {selected ? (
          <>
            <div>
              <h1>{selected.name}</h1>
              <p className={styles.description}>{selected.description}</p>
            </div>

            <div>
              <div className={styles.paramsHeader}>
                <h3>Parameters</h3>
                <div className={styles.modeToggle}>
                  <button
                    onClick={() => setMode("json")}
                    className={`${styles.modeBtn} ${
                      mode === "json" ? styles.active : ""
                    }`}
                  >
                    JSON
                  </button>
                  <button
                    onClick={() => setMode("form")}
                    className={`${styles.modeBtn} ${
                      mode === "form" ? styles.active : ""
                    }`}
                  >
                    Form
                  </button>
                </div>
              </div>

              {mode === "json" ? (
                <textarea
                  value={paramsText}
                  onChange={(e) => setParamsText(e.target.value)}
                  className={styles.jsonEditor}
                />
              ) : (
                <form className={styles.form}>
                  {Object.keys(paramsForm || {}).length === 0 ? (
                    <div className={styles.empty}>No parameters</div>
                  ) : (
                    Object.entries(paramsForm).map(([key, value]) => {
                      const schema =
                        selected?.inputSchema?.properties?.[key] || {};
                      const required =
                        Array.isArray(selected?.inputSchema?.required) &&
                        selected.inputSchema.required.includes(key);
                      return (
                        <div key={key} className={styles.formField}>
                          <label>
                            {key}
                            {required && (
                              <span className={styles.required}>*</span>
                            )}
                          </label>
                          <input
                            type="text"
                            value={value}
                            placeholder={schema.description || ""}
                            onChange={(e) =>
                              setParamsForm({
                                ...paramsForm,
                                [key]: e.target.value,
                              })
                            }
                          />
                        </div>
                      );
                    })
                  )}
                </form>
              )}

              <button
                onClick={runTool}
                disabled={loading}
                className={styles.runBtn}
              >
                {loading ? "Running…" : "Run Tool"}
              </button>

              {err && <div className={styles.error}>Error: {err}</div>}
            </div>

            <section className={styles.response}>
              <h3>Response</h3>
              <pre>
                {response
                  ? JSON.stringify(response, null, 2)
                  : "No response yet."}
              </pre>
            </section>
          </>
        ) : (
          <div className={`${styles.empty} ${styles.center}`}>
            Select a tool from the sidebar.
          </div>
        )}
      </main>

      {/* Connection Panel */}
      <aside className={styles.connection}>
        <h2>MCP Connection</h2>
        <label>URL</label>
        <input
          type="text"
          value={serverInput}
          onChange={(e) => setServerInput(e.target.value)}
        />

        {!connected ? (
          <button onClick={connect} className={styles.connectBtn}>
            Connect
          </button>
        ) : (
          <div className={styles.btnRow}>
            <button onClick={reconnect} className={styles.connectBtn}>
              Reconnect
            </button>
            <button onClick={disconnect} className={styles.disconnectBtn}>
              Disconnect
            </button>
          </div>
        )}

        <div className={styles.status}>
          <span
            className={`${styles.statusDot} ${
              connected ? styles.green : styles.red
            }`}
          />
          <span>{connected ? "Connected" : "Not Connected"}</span>
        </div>

        <h3>Logs</h3>
        <div className={styles.logs}>
          {logs.length === 0 ? "No logs yet." : logs.join("\n")}
        </div>
      </aside>
    </div>
  );
}
