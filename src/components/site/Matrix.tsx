import { useState } from "react";
import { SectionTitle } from "./SectionTitle";

type Tab = {
  id: string;
  label: string;
  ai: number; // % délégué à l'IA
  why: string;
  whyRef: string;
  aiItems: string[];
  human: string[];
  kpis: string[];
};

const TABS: Tab[] = [
  {
    id: "ideation",
    label: "Idéation",
    ai: 60,
    why: "L'IA excelle pour explorer un large espace de sujets — tendances, gaps sémantiques, clusters de mots-clés — et produire un calendrier éditorial. Mais la sélection finale engage la vision de marque et un arbitrage éthique qui restent du ressort humain.",
    whyRef: "réf. : Huang & Rust (2021) — à compléter",
    aiItems: ["Génération de sujets via tendances", "Analyse de gaps sémantiques", "Clustering de mots-clés", "Calendrier éditorial automatisé"],
    human: ["Alignement vision stratégique/marque", "Priorisation éditoriale", "Pertinence culturelle/contextuelle", "Arbitrage éthique"],
    kpis: ["Taux d'adoption des sujets", "Time-to-publish", "Volume de contenu/mois"],
  },
  {
    id: "redaction",
    label: "Rédaction",
    ai: 40,
    why: "Les modèles produisent des premiers jets et des variantes rapides, mais leur sortie reste homogène : la voix de marque, le storytelling et la relecture finale concentrent l'essentiel de la valeur perçue par le lecteur.",
    whyRef: "réf. : à compléter",
    aiItems: ["Premiers jets / outlines", "Variantes titres / meta", "Reformulation multi-format", "Traduction de base"],
    human: ["Voix de marque / ton distinctif", "Storytelling émotionnel", "Thought leadership", "Fact-checking / relecture finale"],
    kpis: ["Temps de rédaction/article", "Score lisibilité", "Taux engagement", "Taux détection IA"],
  },
  {
    id: "seo",
    label: "SEO & Distribution",
    ai: 70,
    why: "Audit technique, recherche d'intention, optimisation on-page : des tâches répétitives, à haut volume et fondées sur des données structurées — le terrain le plus automatisable du content marketing. La stratégie de liens et l'arbitrage SEO vs UX restent humains.",
    whyRef: "réf. : à compléter",
    aiItems: ["Audit technique SEO", "Recherche mots-clés / intention", "Optimisation on-page", "Scheduling multi-canal"],
    human: ["Link building / relations presse", "Arbitrage SEO vs UX lecteur", "Choix canaux stratégiques"],
    kpis: ["Positions SERP", "Trafic organique", "CTR", "Domain Authority"],
  },
  {
    id: "analytics",
    label: "Analytics",
    ai: 80,
    why: "Collecte, nettoyage, détection d'anomalies et dashboards : quasi entièrement automatisables, car il s'agit de patterns dans des données structurées. L'interprétation stratégique et les décisions de pivot ou de budget demeurent une responsabilité humaine.",
    whyRef: "réf. : Davenport et al. (2020) — à compléter",
    aiItems: ["Collecte / nettoyage données", "Segmentation prédictive", "Détection anomalies", "Dashboards automatisés"],
    human: ["Interprétation stratégique", "Décisions de pivot / budget", "Communication aux stakeholders"],
    kpis: ["Précision prédictions", "Temps d'analyse gagné", "ROI actions data-driven"],
  },
  {
    id: "social",
    label: "Social Media",
    ai: 50,
    why: "L'équilibre le plus délicat des six domaines : l'IA couvre la veille, la production de volume et le testing, mais la relation communautaire, la gestion de crise et le ton exigent une présence humaine immédiate et incarnée.",
    whyRef: "réf. : à compléter",
    aiItems: ["Social listening / veille", "Génération visuels / posts", "Programmation / A/B testing", "Analyse sentiments"],
    human: ["Community management", "Gestion de crise", "Collaborations influenceurs", "Ton / humour communauté"],
    kpis: ["Engagement rate", "Reach organique", "Sentiment score", "Temps de réponse"],
  },
  {
    id: "email",
    label: "Email Marketing",
    ai: 65,
    why: "La segmentation dynamique et la personnalisation prédictive sont le cœur de valeur de l'IA en email. Elles sont encadrées par une stratégie de séquençage humaine et par la conformité RGPD, non délégable.",
    whyRef: "réf. : à compléter",
    aiItems: ["Segmentation dynamique / envoi prédictif", "Personnalisation objets / contenus", "Scénarios automation", "A/B testing continu"],
    human: ["Stratégie séquençage / storytelling", "Emails à fort enjeu", "Conformité RGPD"],
    kpis: ["Open rate", "Click-through rate", "Conversion rate", "Unsubscribe rate"],
  },
];

function RatioBar({ ai, size = "lg" }: { ai: number; size?: "lg" | "sm" }) {
  const human = 100 - ai;
  const heights = size === "lg" ? "h-3.5" : "h-2";
  return (
    <div className="w-full">
      <div className={`flex ${heights} rounded-full overflow-hidden bg-paper border border-line`}>
        <div
          className="bar-ai-fill bg-teal"
          style={{ width: `${ai}%` }}
        />
        <div
          className="bar-human-fill bg-terracotta"
          style={{ width: `${human}%` }}
        />
      </div>
    </div>
  );
}

export function Matrix() {
  const [active, setActive] = useState(TABS[0].id);
  const [whyOpen, setWhyOpen] = useState(false);
  const tab = TABS.find((t) => t.id === active)!;

  const selectTab = (id: string) => {
    setActive(id);
    setWhyOpen(false);
  };

  return (
    <section id="matrice" className="py-24 sm:py-32 reveal">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle
          kicker="01 — Matrice décisionnelle"
          title="Quand utiliser l'IA, quand garder la main ?"
          lead="Six domaines, six équilibres. Chaque ratio est un point de départ, pas une règle absolue."
        />

        {/* Vue synthèse — comparaison d'un coup d'œil */}
        <div className="bg-card rounded-2xl border border-line p-6 sm:p-8 mb-10 shadow-[0_1px_2px_rgba(26,26,46,0.04),0_8px_24px_-12px_rgba(26,26,46,0.08)]">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5">
            Vue synthèse — ratio IA / Humain par domaine
          </div>
          <div className="space-y-4">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => selectTab(t.id)}
                className={`w-full grid grid-cols-[7.5rem_1fr_auto] sm:grid-cols-[10rem_1fr_auto] items-center gap-3 sm:gap-5 text-left group rounded-lg px-2 py-1 -mx-2 transition-colors ${
                  active === t.id ? "bg-paper" : "hover:bg-paper"
                }`}
              >
                <span
                  className={`font-mono text-xs sm:text-[13px] transition-colors ${
                    active === t.id ? "text-ink" : "text-muted-foreground group-hover:text-ink"
                  }`}
                >
                  {t.label}
                </span>
                <RatioBar ai={t.ai} size="sm" />
                <span className="font-mono text-xs sm:text-[13px] whitespace-nowrap">
                  <span className="text-teal">{t.ai}%</span>
                  <span className="text-muted-foreground"> · </span>
                  <span className="text-terracotta">{100 - t.ai}%</span>
                </span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-5 mt-5 pt-4 border-t border-line">
            <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-teal" /> IA
            </span>
            <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-terracotta" /> Humain
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => selectTab(t.id)}
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
          <div className="p-8 sm:p-10 border-b border-line">
            <h3 className="font-serif text-3xl sm:text-4xl mb-7">{tab.label}</h3>

            {/* Barre de ratio animée */}
            <div key={tab.id} className="mb-6">
              <div className="flex items-center justify-between gap-3 mb-2 font-mono text-xs sm:text-sm">
                <span className="text-teal font-medium">{tab.ai}% IA</span>
                <span className="text-terracotta font-medium">{100 - tab.ai}% Humain</span>
              </div>
              <RatioBar ai={tab.ai} />
            </div>

            {/* Pourquoi ce ratio ? — dépliable */}
            <div>
              <button
                onClick={() => setWhyOpen((v) => !v)}
                aria-expanded={whyOpen}
                className="flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground hover:text-ink transition-colors"
              >
                <span
                  className={`inline-block transition-transform duration-300 ${whyOpen ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  ⌄
                </span>
                Pourquoi ce ratio ?
              </button>
              {whyOpen && (
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  {tab.why} <span className="whitespace-nowrap">({tab.whyRef})</span>
                </p>
              )}
            </div>
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
                {tab.aiItems.map((it) => (
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
