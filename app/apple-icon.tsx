import { ImageResponse } from "next/og";

// iOS home-screen icon (iOS applies its own corner rounding).
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #c0062f 0%, #3d0313 100%)",
          color: "#ffffff",
          fontSize: 72,
          fontWeight: 800,
          fontFamily: "sans-serif",
          letterSpacing: -2,
        }}
      >
        DP
      </div>
    ),
    { ...size }
  );
}
