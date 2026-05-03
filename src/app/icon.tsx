import { ImageResponse } from "next/og";

export const runtime     = "edge";
export const size        = { width: 96, height: 96 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2b2b2b",
          borderRadius: 20,
        }}
      >
        <span
          style={{
            fontSize: 48,
            fontWeight: 900,
            color: "#dbb82d",
            fontFamily: "sans-serif",
            lineHeight: 1,
          }}
        >
          tf
        </span>
      </div>
    ),
    { ...size }
  );
}
