// pages/inspector.js
import dynamic from "next/dynamic";

const Inspector = dynamic(
  async () => {
    const mod = await import("@modelcontextprotocol/inspector/web");
    return mod.InspectorApp;
  },
  { ssr: false }
);

export default function InspectorPage() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Inspector
        defaultEndpoint="https://paytal-mcp.vercel.app/api/mcp"
      />
    </div>
  );
}
