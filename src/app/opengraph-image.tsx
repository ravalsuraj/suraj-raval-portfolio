import { ImageResponse } from "next/og";

import { site } from "@/lib/data";

// Required for `output: export` (GitHub Pages) — generate the OG image at build.
export const dynamic = "force-static";

export const alt = `${site.name} — ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c0c0d",
          color: "#fafafa",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#fafafa",
              color: "#0c0c0d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            SR
          </div>
          <div style={{ fontSize: 22, color: "#a1a1aa", letterSpacing: 2 }}>
            {site.location.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 38, fontWeight: 600, color: "#e4e4e7" }}>
            {site.title}
          </div>
          <div style={{ fontSize: 26, color: "#a1a1aa" }}>
            JavaScript · Salesforce Architecture · Enterprise Platforms ·
            Payments
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
