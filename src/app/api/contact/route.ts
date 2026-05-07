import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_EMAIL ?? "info@tftechnics.be";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, phone, message } = await req.json();

    if (!name || !phone || !message) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    await resend.emails.send({
      from:    "TF Technics <onboarding@resend.dev>",
      to:      TO_EMAIL,
      subject: `[TF Technics] Nouveau message de ${name}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Téléphone :</strong> <a href="tel:${phone}">${phone}</a></p>
        <p><strong>Message :</strong></p>
        <blockquote>${message.replace(/\n/g, "<br>")}</blockquote>
        <hr>
        <p style="color:#999;font-size:12px">Envoyé depuis le formulaire de contact TF Technics</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact route error:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
