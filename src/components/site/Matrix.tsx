import { useState } from "react";
import { SectionTitle } from "./SectionTitle";

type Tab = {
  id: string;
  label: string;
  ratio: string;
  ai: string[];
  human: string[];
  kpis: string[];
};

const TABS: Tab[] = [
  {
    id: "ideation",
    label: "Idéation",
    ratio: "60% IA · 40% Humain",
    ai: ["Génération de sujets via tendances", "Analyse de gaps sémantiques", "Clustering de mots-clés", "Calendrier éditorial automatisé"],
    human: ["Alignement vision stratégique/marque", "Priorisation éditoriale", "Pertinence culturelle/contextuelle", "Arbitrage éthique"],
    kpis: ["Taux d'adoption des sujets", "Time-to-publish", "Volume de contenu/mois"],
  },
  {
    id: "redaction",
    label: "Rédaction",
    ratio: "40% IA · 60% Humain",
    ai: ["Premiers jets / outlines", "Variantes titres / meta", "Reformulation multi-format", "Traduction de base"],
    human: ["Voix de marque / ton distinctif", "Storytelling émotionnel", "Thought leadership", "Fact-checking / relecture finale"],
    kpis: ["Temps de rédaction/article", "Score lisibilité", "Taux engagement", "Taux détection IA"],
  },
  {
    id: "seo",
    label: "SEO & Distribution",
    ratio: "70% IA · 30% Humain",
    ai: ["Audit technique SEO", "Recherche mots-clés / intention", "Optimisation on-page", "Scheduling multi-canal"],
    human: ["Link building / relations presse", "Arbitrage SEO vs UX lecteur", "Choix canaux stratégiques"],
    kpis: ["Positions SERP", "Trafic organique", "CTR", "Domain Authority"],
  },
  {
    id: "analytics",
    label: "Analytics",
    ratio: "80% IA · 20% Humain",
    ai: ["Collecte / nettoyage données", "Segmentation prédictive", "Détection anomalies", "Dashboards automatisés"],
    human: ["Interprétation stratégique", "Décisions de pivot / budget", "Communication aux stakeholders"],
    kpis: ["Précision prédictions", "Temps d'analyse gagné", "ROI actions data-driven"],
  },
  {
    id: "social",
    label: "Social Media",
    ratio: "50% IA · 50% Humain",
    ai: ["Social listening / veille", "Génération visuels / posts", "Programmation / A/B testing", "Analyse sentiments"],
    human: ["Community management", "Gestion de crise", "Collaborations influenceurs", "Ton / humour communauté"],
    kpis: ["Engagement rate", "Reach organique", "Sentiment score", "Temps de réponse"],
  },
  {
    id: "email",
    label: "Email Marketing",
    ratio: "65% IA · 35% Humain",
    ai: ["Segmentation dynamique / envoi prédictif", "Personnalisation objets / contenus", "Scénarios automation", "A/B testing continu"],
    human: ["Stratégie séquençage / storytelling", "Emails à fort enjeu", "Conformité RGPD"],
    kpis: ["Open rate", "Click-through rate", "Conversion rate", "Unsubscribe rate"],
  },
];

export function Matrix() {
  const [active, setActive] = useState(TABS[0].id);
  const tab = TABS.find((t) => t.id === active)!;

  return (
    <section id="matrice" className="py-24 sm:py-32 reveal">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle
          kicker="01 — Matrice décisionnelle"
          title="Quand utiliser l'IA, quand garder la main ?"
          lead="Six domaines, six équilibres. Chaque ratio est un point de départ, pas une règle absolue."
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-4 py-2 rounded-full text-sm font-mono transition-all ${
                active === t.id
                  ? "bg-ink text-paper"
                  : "bg-card border border-line text-muted-foreground hover:text-ink hover:border-ink"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="bg-card rounded-2xl border border-line overflow-hidden shadow-[0_1px_2px_rgba(26,26,46,0.04),0_8px_24px_-12px_rgba(26,26,46,0.08)]">
          <div className="p-8 sm:p-10 border-b border-line flex flex-wrap items-baseline justify-between gap-4">
            <h3 className="font-serif text-3xl sm:text-4xl">{tab.label}</h3>
            <span className="font-mono text-sm px-3 py-1.5 rounded-full bg-paper border border-line">
              {tab.ratio}
            </span>
          </div>

          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-line">
            <div className="p-8 sm:p-10">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-teal" />
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-teal">
                  Déléguer à l'IA
                </span>
              </div>
              <ul className="space-y-3">
                {tab.ai.map((it) => (
                  <li key={it} className="flex gap-3 text-[15px] leading-relaxed">
                    <span className="text-teal mt-2 shrink-0">→</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 sm:p-10">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-terracotta" />
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-terracotta">
                  Garder la main
                </span>
              </div>
              <ul className="space-y-3">
                {tab.human.map((it) => (
                  <li key={it} className="flex gap-3 text-[15px] leading-relaxed">
                    <span className="text-terracotta mt-2 shrink-0">→</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-paper p-6 sm:p-8 border-t border-line">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
              KPIs associés
            </div>
            <div className="flex flex-wrap gap-2">
              {tab.kpis.map((k) => (
                <span
                  key={k}
                  className="font-mono text-xs px-2.5 py-1 rounded-md bg-card border border-line"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
