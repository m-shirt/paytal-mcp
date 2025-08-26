import dynamic from "next/dynamic";

const Inspector = dynamic(
  async () => {
    const mod = await import("@modelcontextprotocol/inspector/web");
    return mod.InspectorApp;
  },
  { ssr: false }
);

export default function Home() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Inspector defaultEndpoint="/api/mcp" />
    </div>
  );
}
