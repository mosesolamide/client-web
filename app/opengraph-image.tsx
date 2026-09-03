import { ImageResponse } from "next/og";

export const alt = "TCMS Limited — Trade & Consumer Marketing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "76px",
        color: "white",
        background: "linear-gradient(125deg, #211047, #40136f)",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div style={{ width: "62px", height: "62px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "8px", color: "#211047", background: "#71B415", fontSize: "34px", fontWeight: 800 }}>T</div>
        <div style={{ fontSize: "34px", fontWeight: 800 }}>TCMS LIMITED</div>
      </div>
      <div style={{ maxWidth: "940px", display: "flex", flexDirection: "column" }}>
        <div style={{ color: "#71B415", fontSize: "24px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Trade &amp; Consumer Marketing</div>
        <div style={{ marginTop: "22px", fontSize: "68px", fontWeight: 650, lineHeight: 1.05, letterSpacing: "-3px" }}>Turning market opportunity into measurable growth.</div>
      </div>
    </div>,
    size,
  );
}
