import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_EMAIL ?? "hilyas707@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { service, region, commune, property, urgency, description, prenom, nom, phone, email, rappel } = data;

    if (!prenom || !phone) {
      return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
    }

    const urgencyLabel: Record<string, string> = {
      urgent:     "Aujourd'hui (urgence)",
      semaine:    "Cette semaine",
      mois:       "Ce mois-ci",
      tranquille: "Pas pressé",
    };

    await resend.emails.send({
      from:    "TF Technics <onboarding@resend.dev>",
      to:      TO_EMAIL,
      subject: `[Devis] ${service ?? "?"} — ${prenom} ${nom ?? ""} — ${commune || region || "?"}`,
      html: `
        <h2>Nouvelle demande de devis</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%">
          <tr><td><strong>Service</strong></td><td>${service ?? "—"}</td></tr>
          <tr style="background:#f9f9f9"><td><strong>Région</strong></td><td>${region ?? "—"}</td></tr>
          <tr><td><strong>Commune</strong></td><td>${commune || "—"}</td></tr>
          <tr style="background:#f9f9f9"><td><strong>Type de bien</strong></td><td>${property ?? "—"}</td></tr>
          <tr><td><strong>Délai souhaité</strong></td><td>${urgency ? urgencyLabel[urgency] : "—"}</td></tr>
          <tr style="background:#f9f9f9"><td><strong>Contact</strong></td><td>${prenom} ${nom ?? ""}</td></tr>
          <tr><td><strong>Téléphone</strong></td><td><a href="tel:${phone}">${phone}</a></td></tr>
          <tr style="background:#f9f9f9"><td><strong>E-mail</strong></td><td>${email || "—"}</td></tr>
          <tr><td><strong>Rappel préféré</strong></td><td>${rappel ?? "—"}</td></tr>
        </table>
        ${description ? `<p><strong>Description :</strong><br>${description.replace(/\n/g, "<br>")}</p>` : ""}
        <hr>
        <p style="color:#999;font-size:12px">Envoyé depuis le formulaire de devis TF Technics</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("devis route error:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
