import { useState } from "react";
import FadeIn from "../components/animations/FadeIn";
import SeoHead from "../components/layout/SeoHead";
import SiteLayout from "../components/layout/SiteLayout";
import PageHero from "../components/sections/PageHero";
import { siteMeta } from "../components/siteData";

const initialForm = {
  name: "",
  company: "",
  phone: "",
  email: "",
  product: "Plaques carbone",
  thickness: "",
  quantity: "",
  application: "",
  deadline: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSent(false);
    setError("");
    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      setSent(true);
      setForm(initialForm);
    } catch (sendError) {
      setError("Erreur lors de l'envoi. Merci de reessayer ou de nous appeler directement.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <SeoHead
        title="Demande de devis carbone"
        description="Envoyer une demande de prix pour plaques carbone 600 x 600 mm, tissus carbone et conseils techniques a Bonneville."
      />
      <SiteLayout>
        <PageHero
          eyebrow="Contact et devis"
          title="Demander un prix pour plaques ou tissus carbone."
          intro="Envoyez les informations essentielles: produit, epaisseur, quantite, application et delai. Nous vous repondons directement par mail ou telephone."
          image={siteMeta.heroImage}
        />

        <section className="bg-white text-black px-4 md:px-10 py-20 md:py-28">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10">
            <FadeIn>
              <aside className="rounded-md bg-neutral-100 p-8 md:p-10 h-full">
                <p className="text-xs uppercase tracking-[0.28em] text-neutral-500 mb-5">
                  Contact direct
                </p>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
                  Bonneville 74130
                </h2>
                <div className="space-y-5 text-lg text-neutral-700">
                  <p>
                    <a href={siteMeta.phoneHref} className="font-bold text-black">
                      {siteMeta.phoneDisplay}
                    </a>
                  </p>
                  <p>
                    <a href={siteMeta.emailHref} className="font-bold text-black">
                      {siteMeta.email}
                    </a>
                  </p>
                  <p>{siteMeta.address}</p>
                  <p>
                    Le formulaire transmet automatiquement votre demande. Pour une reponse plus precise, ajoutez les contraintes principales du projet.
                  </p>
                </div>
              </aside>
            </FadeIn>

            <FadeIn delay={0.08}>
              <form onSubmit={handleSubmit} className="rounded-md border border-neutral-200 p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="form-label">Nom / Prenom *</span>
                    <input name="name" value={form.name} onChange={updateField} required className="form-input" />
                  </label>
                  <label className="block">
                    <span className="form-label">Entreprise</span>
                    <input name="company" value={form.company} onChange={updateField} className="form-input" />
                  </label>
                  <label className="block">
                    <span className="form-label">Telephone *</span>
                    <input name="phone" value={form.phone} onChange={updateField} required type="tel" className="form-input" />
                  </label>
                  <label className="block">
                    <span className="form-label">Email *</span>
                    <input name="email" value={form.email} onChange={updateField} required type="email" className="form-input" />
                  </label>
                  <label className="block">
                    <span className="form-label">Produit *</span>
                    <select name="product" value={form.product} onChange={updateField} required className="form-input">
                      <option>Plaques carbone</option>
                      <option>Tissus carbone</option>
                      <option>Plaques + tissus</option>
                      <option>Conseil technique</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="form-label">Epaisseur / tissu</span>
                    <input name="thickness" value={form.thickness} onChange={updateField} placeholder="Ex: 4 mm, 6 mm, tissu serge..." className="form-input" />
                  </label>
                  <label className="block">
                    <span className="form-label">Quantite</span>
                    <input name="quantity" value={form.quantity} onChange={updateField} placeholder="Ex: 2 plaques, 5 m2..." className="form-input" />
                  </label>
                  <label className="block">
                    <span className="form-label">Delai souhaite</span>
                    <input name="deadline" value={form.deadline} onChange={updateField} placeholder="Ex: urgent, sous 2 semaines..." className="form-input" />
                  </label>
                  <label className="block md:col-span-2">
                    <span className="form-label">Application</span>
                    <input name="application" value={form.application} onChange={updateField} placeholder="Automobile, nautisme, industrie, prototype..." className="form-input" />
                  </label>
                  <label className="block md:col-span-2">
                    <span className="form-label">Informations utiles</span>
                    <textarea name="message" value={form.message} onChange={updateField} rows={6} className="form-input resize-none" />
                  </label>
                </div>

                <div className="mt-7 flex flex-col md:flex-row md:items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="inline-flex justify-center bg-black text-white px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSending ? "Envoi en cours..." : "Envoyer la demande"}
                  </button>
                  {sent && (
                    <p className="text-sm text-green-700">
                      Demande envoyee. Nous revenons vers vous rapidement.
                    </p>
                  )}
                  {error && (
                    <p className="text-sm text-red-700">
                      {error}
                    </p>
                  )}
                </div>
              </form>
            </FadeIn>
          </div>
        </section>

        <style jsx>{`
          .form-label {
            display: block;
            margin-bottom: 0.45rem;
            color: #525252;
            font-size: 0.72rem;
            font-weight: 800;
            letter-spacing: 0.16em;
            text-transform: uppercase;
          }

          .form-input {
            width: 100%;
            min-height: 3rem;
            border: 1px solid #d4d4d4;
            border-radius: 0.375rem;
            background: #fff;
            padding: 0.75rem 0.9rem;
            color: #0a0a0a;
            outline: none;
          }

          .form-input:focus {
            border-color: #0a0a0a;
            box-shadow: 0 0 0 3px rgba(10, 10, 10, 0.08);
          }
        `}</style>
      </SiteLayout>
    </>
  );
}
