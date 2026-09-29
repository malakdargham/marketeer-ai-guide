import { useState } from "react";
import {
  Zap,
  Timer,
  Coins,
  RefreshCw,
  PenLine,
  Target,
  ScanSearch,
  Ruler,
  TrendingUp,
  Magnet,
  Medal,
  Recycle,
  ChevronDown,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";
import { SectionTitle } from "./SectionTitle";

type Cat = "Efficience" | "Qualité" | "Business";

type Kpi = {
  icon: LucideIcon;
  title: string;
  desc: string;
  formula: string;
  cat: Cat;
  measure: string;
  tool: string;
  threshold: string;
  limit: string;
  warning?: string;
};

export const KPIS: Kpi[] = [
  {
    icon: Zap,
    title: "Content Velocity",
    desc: "Cadence de production éditoriale.",
    formula: "contenus_publiés / mois",
    cat: "Efficience",
    measure: "Compter les contenus publiés par mois, tous formats confondus, sur une période glissante de 3 mois.",
    tool: "Calendrier éditorial (Notion, CoSchedule) + reporting automatisé.",
    threshold: "À définir selon votre baseline — viser une hausse de 20 à 30 % après adoption IA.",
    limit: "Un volume élevé ne dit rien de la qualité ni de la performance des contenus.",
  },
  {
    icon: Timer,
    title: "Time-to-Publish",
    desc: "Temps entre l'idée et la mise en ligne.",
    formula: "date_publish − date_ideation",
    cat: "Efficience",
    measure: "Horodater chaque étape (idéation, rédaction, validation, publication) et calculer la durée médiane.",
    tool: "Outil de gestion de projet (Asana, Linear) avec champs de dates automatisés.",
    threshold: "Réduction de 30 à 50 % du délai médian attendue sur les contenus assistés par IA.",
    limit: "Compresser les délais peut dégrader la relecture si le temps de validation humaine est sacrifié.",
  },
  {
    icon: Coins,
    title: "Coût par Contenu",
    desc: "Coût moyen IA + humain.",
    formula: "(coût_IA + coût_humain) / nb_contenus",
    cat: "Efficience",
    measure: "Additionner abonnements IA, temps humain valorisé et coûts de production, divisés par le volume publié.",
    tool: "Feuille de calcul ou outil de time-tracking (Toggl) croisé avec la facturation outils.",
    threshold: "Baisse de 20 à 40 % du coût unitaire à volume constant après industrialisation.",
    limit: "Ne capture pas les coûts cachés : formation, veille, correction d'erreurs IA.",
  },
  {
    icon: RefreshCw,
    title: "Taux d'Automation",
    desc: "Part de tâches automatisées.",
    formula: "tâches_automatisées / tâches_totales × 100",
    cat: "Efficience",
    measure: "Cartographier les tâches du workflow et mesurer la part exécutée sans intervention humaine.",
    tool: "Audit de workflow + plateformes d'automatisation (Zapier, Make).",
    threshold: "40 à 60 % sur les tâches à haut volume et faible valeur humaine.",
    limit: "Un taux maximal n'est pas un objectif : certaines tâches doivent rester humaines par design.",
  },
  {
    icon: PenLine,
    title: "Score de qualité éditoriale",
    desc: "Qualité éditoriale évaluée par grille.",
    formula: "moyenne grille 5 critères (ton, exactitude, originalité, pertinence, voix de marque) / 10",
    cat: "Qualité",
    measure: "Faire évaluer chaque contenu par un relecteur sur une grille de 5 critères notés de 0 à 2, puis ramener sur 10.",
    tool: "Grille d'évaluation interne (formulaire typeform ou Notion) appliquée à un échantillon mensuel.",
    threshold: "Viser un score moyen ≥ 7/10, stable entre contenus IA-assistés et 100 % humains.",
    limit: "Évaluation subjective : calibrer la grille et faire relire par plusieurs personnes pour limiter les biais.",
  },
  {
    icon: Target,
    title: "Taux d'Engagement",
    desc: "Interactions sur exposition.",
    formula: "interactions / impressions × 100",
    cat: "Qualité",
    measure: "Rapport entre interactions (likes, commentaires, partages, temps de lecture) et impressions, par canal.",
    tool: "Analytics natives des plateformes + agrégateur (Google Analytics, Sprout Social).",
    threshold: "Comparer à vos benchmarks sectoriels ; surveiller la stabilité après montée en volume IA.",
    limit: "Les interactions sont sensibles aux algorithmes de distribution, pas seulement à la qualité du contenu.",
  },
  {
    icon: ScanSearch,
    title: "Taux de Détection IA",
    desc: "Détectabilité du contenu IA.",
    formula: "contenus_détectés / contenus_IA × 100",
    cat: "Qualité",
    measure: "Soumettre un échantillon de contenus à un ou plusieurs détecteurs et calculer la part signalée comme IA.",
    tool: "Détecteurs open source ou commerciaux (GPTZero, Originality.ai) — à croiser.",
    threshold: "Aucun seuil fiable : suivre la tendance plutôt qu'une cible absolue.",
    limit: "Les détecteurs varient fortement entre eux et évoluent avec les modèles de génération.",
    warning: "Indicateur à interpréter avec prudence : les détecteurs d'IA présentent des taux de faux positifs élevés.",
  },
  {
    icon: Ruler,
    title: "Taux de Révision",
    desc: "Effort humain de retouche.",
    formula: "mots_modifiés / mots_générés × 100",
    cat: "Qualité",
    measure: "Comparer le brouillon IA au texte publié (diff) et mesurer la proportion de mots modifiés.",
    tool: "Comparaison de versions (Google Docs, Git-like diff) sur un échantillon représentatif.",
    threshold: "Un taux de 20 à 40 % témoigne d'une vraie valeur ajoutée humaine ; < 10 % signale une validation superficielle.",
    limit: "Ne mesure que la quantité de retouche, pas sa pertinence éditoriale.",
  },
  {
    icon: TrendingUp,
    title: "ROI Content Marketing",
    desc: "Retour sur investissement.",
    formula: "(revenus − investissement) / investissement × 100",
    cat: "Business",
    measure: "Attribuer les revenus générés par le contenu (leads, ventes) et rapporter à l'investissement total.",
    tool: "CRM + attribution marketing (HubSpot, Google Analytics avec modèle d'attribution).",
    threshold: "Positif à 12 mois ; les programmes matures visent 200 à 300 %.",
    limit: "L'attribution au contenu est imparfaite, surtout sur les cycles de vente longs.",
  },
  {
    icon: Magnet,
    title: "Taux de Conversion Contenu",
    desc: "Conversions sur visiteurs contenu.",
    formula: "conversions / visiteurs_contenu × 100",
    cat: "Business",
    measure: "Mesurer la part des visiteurs de pages de contenu qui accomplissent une action cible (inscription, demande, achat).",
    tool: "Google Analytics (événements de conversion) ou analytics produit.",
    threshold: "1 à 5 % selon le secteur et le type de conversion visée.",
    limit: "Dépend fortement de l'offre et du CTA, pas uniquement de la qualité du contenu.",
  },
  {
    icon: Medal,
    title: "Part de Voix Organique",
    desc: "Visibilité SERP relative.",
    formula: "keywords_top10 / keywords_cibles × 100",
    cat: "Business",
    measure: "Suivre la part de vos mots-clés cibles positionnés en top 10 des résultats de recherche.",
    tool: "Outils SEO (Semrush, Ahrefs) avec suivi de positions hebdomadaire.",
    threshold: "Progression de 5 à 10 points par trimestre sur un portefeuille de mots-clés stable.",
    limit: "Sensible aux mises à jour d'algorithmes et à la concurrence ; ne reflète pas le trafic réel.",
  },
  {
    icon: Recycle,
    title: "Content Reuse Rate",
    desc: "Capacité à recycler les contenus.",
    formula: "dérivés_produits / contenus_sources",
    cat: "Business",
    measure: "Compter les formats dérivés (posts, newsletters, extraits vidéo) produits à partir de chaque contenu source.",
    tool: "Calendrier éditorial avec traçabilité contenu source → dérivés.",
    threshold: "Viser 3 à 5 dérivés par contenu pilier.",
    limit: "Un recyclage excessif peut diluer la fraîcheur perçue et l'originalité de la marque.",
  },
];

const catColor: Record<Cat, string> = {
  Efficience: "bg-teal/15 text-teal",
  Qualité: "bg-terracotta/15 text-terracotta",
  Business: "bg-gold/15 text-gold",
};

const FILTERS: ("Tous" | Cat)[] = ["Tous", "Efficience", "Qualité", "Business"];

export function Kpis() {
  const [filter, setFilter] = useState<"Tous" | Cat>("Tous");
  const [open, setOpen] = useState<string | null>(null);
  const list = filter === "Tous" ? KPIS : KPIS.filter((k) => k.cat === filter);

  return (
    <section id="kpis" className="py-24 sm:py-32 reveal">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle
          kicker="03 — Tableau de bord"
          title="Les indicateurs essentiels"
          lead="Douze KPIs pour piloter l'équilibre entre vélocité, qualité et impact business. Cliquez sur une carte pour le mode d'emploi."
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
          {list.map((k) => {
            const isOpen = open === k.title;
            const Icon = k.icon;
            return (
              <article
                key={k.title}
                className={`bg-card border rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
                  isOpen ? "border-ink/40" : "border-line hover:border-ink/30 hover:-translate-y-0.5"
                }`}
                onClick={() => setOpen(isOpen ? null : k.title)}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${catColor[k.cat]}`}>
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {k.cat}
                    </span>
                    <ChevronDown
                      size={14}
                      strokeWidth={1.5}
                      className={`text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </div>
                <h3 className="font-serif text-xl leading-tight">{k.title}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{k.desc}</p>
                <div className="mt-4 font-mono text-[11px] bg-paper border border-line rounded-md px-2.5 py-2 break-words">
                  {k.formula}
                </div>

                {k.warning && (
                  <div className="mt-3 flex items-start gap-2 rounded-lg border border-terracotta/40 bg-terracotta/10 px-3 py-2.5">
                    <TriangleAlert size={15} strokeWidth={1.5} className="text-terracotta shrink-0 mt-0.5" />
                    <p className="text-xs leading-relaxed text-terracotta">{k.warning}</p>
                  </div>
                )}

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <dl className="space-y-3 border-t border-line pt-4" onClick={(e) => e.stopPropagation()}>
                      {(
                        [
                          ["Comment le mesurer", k.measure],
                          ["Outil suggéré", k.tool],
                          ["Seuil indicatif", k.threshold],
                          ["Limite de l'indicateur", k.limit],
                        ] as const
                      ).map(([label, value]) => (
                        <div key={label}>
                          <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground mb-1">
                            {label}
                          </dt>
                          <dd className="text-sm leading-relaxed">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
