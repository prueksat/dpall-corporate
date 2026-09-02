import { ImageResponse } from "next/og";

// Browser tab favicon: the same red "DP" roundel used as the logo mark
// throughout the site, instead of the default Next.js icon.
export const size = { width: 32, height: 32 };
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
          background: "#c0062f",
          borderRadius: "50%",
          color: "#ffffff",
          fontSize: 16,
          fontWeight: 800,
          fontFamily: "sans-serif",
          letterSpacing: -0.5,
        }}
      >
        DP
      </div>
    ),
    { ...size }
  );
}
