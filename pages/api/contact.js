const CONTACT_TO_EMAIL = "taxidumole@gmail.com";
const FALLBACK_FROM_EMAIL = "Mont Blanc Carbone <onboarding@resend.dev>";

const clean = (value) => String(value || "").trim();

const buildEmailText = (data) => [
  "Nouvelle demande de devis Mont Blanc Carbone",
  "",
  `Nom / Prenom : ${clean(data.name)}`,
  `Entreprise : ${clean(data.company)}`,
  `Telephone : ${clean(data.phone)}`,
  `Email : ${clean(data.email)}`,
  `Produit : ${clean(data.product)}`,
  `Epaisseur / tissu souhaite : ${clean(data.thickness)}`,
  `Quantite : ${clean(data.quantity)}`,
  `Application : ${clean(data.application)}`,
  `Delai souhaite : ${clean(data.deadline)}`,
  "",
  "Message :",
  clean(data.message) || "Aucun message.",
].join("\n");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: "Missing RESEND_API_KEY",
    });
  }

  const data = req.body || {};
  const name = clean(data.name);
  const phone = clean(data.phone);
  const email = clean(data.email);
  const product = clean(data.product) || "Demande carbone";

  if (!name || !phone || !email) {
    return res.status(400).json({
      error: "Missing required fields",
    });
  }

  const subject = `Demande de devis Mont Blanc Carbone - ${product}`;
  const text = buildEmailText(data);

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || FALLBACK_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL || CONTACT_TO_EMAIL,
      reply_to: email,
      subject,
      text,
    }),
  });

  if (!resendResponse.ok) {
    const message = await resendResponse.text();
    return res.status(502).json({
      error: "Email provider error",
      detail: message,
    });
  }

  return res.status(200).json({ ok: true });
}
