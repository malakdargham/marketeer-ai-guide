import { useState } from "react";
import { SectionTitle } from "./SectionTitle";

const STEPS = [
  {
    q: "La tâche est-elle répétitive et à haut volume ?",
    d: "Identifiez les flux à fort débit où chaque minute économisée compte.",
    branches: [
      { label: "Oui → IA en lead", color: "teal" },
      { label: "Non → Question suivante", color: "terra" },
    ],
  },
  {
    q: "Le contenu porte-t-il la voix de marque ou une dimension émotionnelle forte ?",
    d: "Storytelling, leadership, communication sensible : l'humain protège l'authenticité.",
    branches: [
      { label: "Oui → Humain en lead", color: "terra" },
      { label: "Non → Question suivante", color: "violet" },
    ],
  },
  {
    q: "Y a-t-il des données structurées à traiter ou des patterns à détecter ?",
    d: "Analyse, segmentation, prédiction : l'IA excelle sur les volumes structurés.",
    branches: [
      { label: "Oui → IA analytique en lead", color: "teal" },
      { label: "Non → Question suivante", color: "terra" },
    ],
  },
  {
    q: "Le risque réputationnel ou éthique est-il significatif ?",
    d: "Sujets sensibles, conformité, image de marque : le contrôle humain reste central.",
    branches: [
      { label: "Oui → Humain en lead + IA support", color: "terra" },
      { label: "Non → Question suivante", color: "violet" },
    ],
  },
  {
    q: "Mode par défaut : Collaboration hybride",
    d: "IA génère → Humain raffine → IA optimise. Le pattern le plus courant.",
    branches: [{ label: "Workflow hybride", color: "violet" }],
  },
];

const RESULTS = [
  {
    mode: "IA en lead",
    color: "teal",
    why: "Tâche répétitive à haut volume : l'IA traite le flux, l'humain supervise et valide les exceptions.",
    tasks: ["Génération de variantes de titres et metas", "Reformatage multi-canal d'un article", "Programmation et A/B testing des publications"],
  },
  {
    mode: "Humain en lead",
    color: "terra",
    why: "La voix de marque et l'émotion sont centrales : l'humain écrit, l'IA assiste en recherche et relecture.",
    tasks: ["Articles de thought leadership", "Storytelling de marque et études de cas", "Communication de crise ou sensible"],
  },
  {
    mode: "IA analytique en lead",
    color: "teal",
    why: "Données structurées et patterns à détecter : l'IA analyse, l'humain interprète et décide.",
    tasks: ["Segmentation prédictive de l'audience", "Détection d'anomalies dans les dashboards", "Scoring et priorisation des leads"],
  },
  {
    mode: "Humain en lead + IA support",
    color: "terra",
    why: "Risque réputationnel ou éthique significatif : contrôle humain strict, l'IA prépare et documente.",
    tasks: ["Contenus réglementés (santé, finance)", "Prises de position publiques", "Validation conformité et RGPD"],
  },
  {
    mode: "Workflow hybride",
    color: "violet",
    why: "Le pattern le plus courant : l'IA génère, l'humain raffine, l'IA optimise en continu.",
    tasks: ["Articles de blog : outline IA → rédaction humaine → optimisation SEO IA", "Newsletters : personnalisation IA → ton humain", "Social media : visuels IA → community management humain"],
  },
];

const colorMap: Record<string, string> = {
  teal: "bg-teal/10 text-teal border-teal/30",
  terra: "bg-terracotta/10 text-terracotta border-terracotta/30",
  violet: "bg-[#3a3352]/10 text-[#3a3352] border-[#3a3352]/25",
};

const solidMap: Record<string, string> = {
  teal: "bg-teal",
  terra: "bg-terracotta",
  violet: "bg-[#3a3352]",
};

const numColor = ["bg-teal", "bg-terracotta", "bg-teal", "bg-terracotta", "bg-[#3a3352]"];

function FullTree() {
  return (
    <div className="relative">
      <div className="absolute left-[19px] sm:left-[23px] top-6 bottom-6 w-px bg-line" />
      <ol className="space-y-10">
        {STEPS.map((s, i) => (
          <li key={i} className="relative flex gap-5 sm:gap-7">
            <div
              className={`relative z-10 shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${numColor[i]} text-paper font-mono text-sm flex items-center justify-center`}
            >
              {i + 1}
            </div>
            <div className="flex-1 pt-1">
              <h3 className="font-serif text-xl sm:text-2xl leading-tight">{s.q}</h3>
              <p className="text-muted-foreground mt-2 text-[15px] leading-relaxed">{s.d}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {s.branches.map((b) => (
                  <span
                    key={b.label}
                    className={`font-mono text-xs px-3 py-1.5 rounded-full border ${colorMap[b.color]}`}
                  >
                    {b.label}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function DecisionTree() {
  const [view, setView] = useState<"wizard" | "tree">("wizard");
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<number | null>(null);
  const [fading, setFading] = useState(false);

  const transition = (fn: () => void) => {
    setFading(true);
    window.setTimeout(() => {
      fn();
      setFading(false);
    }, 180);
  };

  const answer = (yes: boolean) => {
    transition(() => {
      if (yes || step === STEPS.length - 1) {
        setResult(step);
      } else {
        setStep(step + 1);
      }
    });
  };

  const back = () => {
    transition(() => {
      if (result !== null) {
        setResult(null);
      } else if (step > 0) {
        setStep(step - 1);
      }
    });
  };

  const restart = () => {
    transition(() => {
      setStep(0);
      setResult(null);
    });
  };

  const current = result !== null ? RESULTS[result] : null;

  return (
    <section id="arbre" className="py-24 sm:py-32 bg-secondary/40 reveal">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <SectionTitle
          kicker="02 — Arbre décisionnel"
          title="Le processus en 5 questions"
          lead="Un cheminement séquentiel pour arbitrer cas par cas, sans dogmatisme."
        />

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full border border-line bg-card p-1 font-mono text-xs">
            <button
              onClick={() => setView("wizard")}
              className={`px-4 py-2 rounded-full transition-colors ${
                view === "wizard" ? "bg-ink text-paper" : "text-muted-foreground hover:text-ink"
              }`}
            >
              Assistant interactif
            </button>
            <button
              onClick={() => setView("tree")}
              className={`px-4 py-2 rounded-full transition-colors ${
                view === "tree" ? "bg-ink text-paper" : "text-muted-foreground hover:text-ink"
              }`}
            >
              Voir l'arbre complet
            </button>
          </div>
        </div>

        <div className="bg-card rounded-2xl border border-line p-6 sm:p-12 shadow-[0_1px_2px_rgba(26,26,46,0.04),0_8px_24px_-12px_rgba(26,26,46,0.08)]">
          {view === "tree" ? (
            <FullTree />
          ) : (
            <div
              className={`max-w-2xl mx-auto transition-all duration-200 ${
                fading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
              }`}
            >
              {current ? (
                <div className="text-center">
                  <span
                    className={`inline-block font-mono text-xs uppercase tracking-[0.15em] px-4 py-1.5 rounded-full border ${colorMap[current.color]}`}
                  >
                    Mode recommandé
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl mt-5 leading-tight">{current.mode}</h3>
                  <p className="text-muted-foreground mt-4 text-[15px] leading-relaxed max-w-xl mx-auto">
                    {current.why}
                  </p>
                  <div className="mt-8 text-left bg-secondary/60 rounded-xl p-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
                      Exemples de tâches
                    </p>
                    <ul className="space-y-3">
                      {current.tasks.map((t) => (
                        <li key={t} className="flex items-start gap-3 text-[15px]">
                          <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${solidMap[current.color]}`} />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={restart}
                    className="mt-8 inline-flex items-center px-6 py-3 rounded-full bg-ink text-paper font-mono text-sm uppercase tracking-[0.12em] hover:bg-ink/85 transition-colors"
                  >
                    Recommencer
                  </button>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Question {step + 1}/5
                    </span>
                    <div className="flex gap-1.5">
                      {STEPS.map((_, i) => (
                        <span
                          key={i}
                          className={`h-1.5 rounded-full transition-all ${
                            i === step ? `w-6 ${numColor[i]}` : i < step ? "w-3 bg-ink/30" : "w-3 bg-line"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl leading-tight">{STEPS[step].q}</h3>
                  <p className="text-muted-foreground mt-3 text-[15px] leading-relaxed">{STEPS[step].d}</p>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <button
                      onClick={() => answer(true)}
                      className="py-4 rounded-xl bg-teal text-paper font-mono text-sm uppercase tracking-[0.12em] hover:bg-teal/85 transition-colors"
                    >
                      Oui
                    </button>
                    <button
                      onClick={() => answer(false)}
                      className="py-4 rounded-xl bg-terracotta text-paper font-mono text-sm uppercase tracking-[0.12em] hover:bg-terracotta/85 transition-colors"
                    >
                      Non
                    </button>
                  </div>

                  {step > 0 && (
                    <button
                      onClick={back}
                      className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-ink transition-colors"
                    >
                      ← Retour
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
