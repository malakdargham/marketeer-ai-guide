import { useState } from "react";
import { SectionTitle } from "./SectionTitle";

type Cat = "Efficience" | "Qualité" | "Business";

const KPIS: { icon: string; title: string; desc: string; formula: string; cat: Cat }[] = [
  { icon: "⚡", title: "Content Velocity", desc: "Cadence de production éditoriale.", formula: "contenus_publiés / mois", cat: "Efficience" },
  { icon: "⏱", title: "Time-to-Publish", desc: "Temps entre l'idée et la mise en ligne.", formula: "date_publish − date_ideation", cat: "Efficience" },
  { icon: "💰", title: "Coût par Contenu", desc: "Coût moyen IA + humain.", formula: "(coût_IA + coût_humain) / nb_contenus", cat: "Efficience" },
  { icon: "🔄", title: "Taux d'Automation", desc: "Part de tâches automatisées.", formula: "tâches_automatisées / tâches_totales × 100", cat: "Efficience" },
  { icon: "✍️", title: "Score d'Authenticité", desc: "Qualité éditoriale perçue.", formula: "score_éditorial / 10", cat: "Qualité" },
  { icon: "🎯", title: "Taux d'Engagement", desc: "Interactions sur exposition.", formula: "interactions / impressions × 100", cat: "Qualité" },
  { icon: "🔍", title: "Taux de Détection IA", desc: "Détectabilité du contenu IA.", formula: "contenus_détectés / contenus_IA × 100", cat: "Qualité" },
  { icon: "📏", title: "Taux de Révision", desc: "Effort humain de retouche.", formula: "mots_modifiés / mots_générés × 100", cat: "Qualité" },
  { icon: "📈", title: "ROI Content Marketing", desc: "Retour sur investissement.", formula: "(revenus − investissement) / investissement × 100", cat: "Business" },
  { icon: "🧲", title: "Taux de Conversion Contenu", desc: "Conversions sur visiteurs contenu.", formula: "conversions / visiteurs_contenu × 100", cat: "Business" },
  { icon: "🏅", title: "Part de Voix Organique", desc: "Visibilité SERP relative.", formula: "keywords_top10 / keywords_cibles × 100", cat: "Business" },
  { icon: "♻️", title: "Content Reuse Rate", desc: "Capacité à recycler les contenus.", formula: "dérivés_produits / contenus_sources", cat: "Business" },
];

const catColor: Record<Cat, string> = {
  Efficience: "bg-teal/15 text-teal",
  Qualité: "bg-terracotta/15 text-terracotta",
  Business: "bg-gold/15 text-gold",
};

const FILTERS: ("Tous" | Cat)[] = ["Tous", "Efficience", "Qualité", "Business"];

export function Kpis() {
  const [filter, setFilter] = useState<"Tous" | Cat>("Tous");
  const list = filter === "Tous" ? KPIS : KPIS.filter((k) => k.cat === filter);

  return (
    <section id="kpis" className="py-24 sm:py-32 reveal">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle
          kicker="03 — Tableau de bord"
          title="Les indicateurs essentiels"
          lead="Douze KPIs pour piloter l'équilibre entre vélocité, qualité et impact business."
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-mono transition-all ${
                filter === f
                  ? "bg-ink text-paper"
                  : "bg-card border border-line text-muted-foreground hover:text-ink hover:border-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((k) => (
            <article
              key={k.title}
              className="bg-card border border-line rounded-2xl p-6 hover:border-ink/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl ${catColor[k.cat]}`}>
                  {k.icon}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground pt-1">
                  {k.cat}
                </span>
              </div>
              <h3 className="font-serif text-xl leading-tight">{k.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{k.desc}</p>
              <div className="mt-4 font-mono text-[11px] bg-paper border border-line rounded-md px-2.5 py-2 break-words">
                {k.formula}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
