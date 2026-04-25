import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt     = "TF Technics — Électricien Dépanneur Bruxelles";
export const size    = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Fond dégradé orange */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            backgroundColor: "#fff7ed",
            border: "1px solid #fed7aa",
            borderRadius: 999,
            padding: "8px 16px",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#f97316",
            }}
          />
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#f97316",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
            }}
          >
            Disponible 24h/24 — 7j/7
          </span>
        </div>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 24 }}>
          <span style={{ fontSize: 52, fontWeight: 900, color: "#f97316", lineHeight: 1 }}>
            TF
          </span>
          <span style={{ fontSize: 52, fontWeight: 900, color: "#2b2b2b", lineHeight: 1 }}>
            {" "}technics
          </span>
        </div>

        {/* Titre */}
        <div
          style={{
            fontSize: 54,
            fontWeight: 900,
            color: "#2b2b2b",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            maxWidth: 700,
            marginBottom: 24,
          }}
        >
          Électricien dépanneur
          <br />
          <span style={{ color: "#f97316" }}>à Bruxelles</span>
        </div>

        {/* Sous-titre */}
        <p
          style={{
            fontSize: 22,
            color: "#6b6b6b",
            lineHeight: 1.5,
            maxWidth: 580,
            marginBottom: 48,
          }}
        >
          Intervention en moins de 60 min · Agréé AREI · Bornes de recharge · Devis gratuit
        </p>

        {/* Pilules de confiance */}
        <div style={{ display: "flex", gap: 12 }}>
          {["Bruxelles", "Flandre", "Brabant Wallon"].map((zone) => (
            <div
              key={zone}
              style={{
                backgroundColor: "#f5f5f5",
                border: "1px solid #e5e5e5",
                borderRadius: 999,
                padding: "10px 20px",
                fontSize: 16,
                fontWeight: 600,
                color: "#2b2b2b",
              }}
            >
              {zone}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
