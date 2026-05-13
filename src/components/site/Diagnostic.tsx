import { useState } from "react";
import { SectionTitle } from "./SectionTitle";

const QUESTIONS = [
  {
    label: "Utilisez-vous des outils d'IA pour la création de contenu ?",
    hint: "Adoption opérationnelle des outils génératifs.",
    options: ["Jamais", "Ponctuellement", "Régulièrement", "Systématiquement"],
  },
  {
    label: "Exploitez-vous l'IA analytique pour vos décisions éditoriales ?",
    hint: "Data, prédiction, détection de tendances.",
    options: ["Jamais", "Rarement", "Souvent", "C'est intégré"],
  },
  {
    label: "Avez-vous un processus de validation humaine du contenu IA ?",
    hint: "Garde-fou éditorial avant publication.",
    options: ["Aucun processus", "Informel", "Documenté", "Intégré au workflow"],
  },
  {
    label: "Mesurez-vous l'impact de l'IA sur vos KPIs content ?",
    hint: "Pilotage par la donnée.",
    options: ["Non", "Quelques metrics", "Dashboard dédié", "Optimisation continue"],
  },
  {
    label: "Votre équipe est-elle formée aux outils et limites de l'IA ?",
    hint: "Compétences et culture interne.",
    options: ["Pas du tout", "Auto-formation", "Formation initiale", "Programme continu"],
  },
  {
    label: "Avez-vous une politique éthique / charte IA pour le contenu ?",
    hint: "Cadre de gouvernance et conformité.",
    options: ["Non", "En réflexion", "Rédigée", "Appliquée & auditée"],
  },
];

function getLevel(score: number) {
  if (score <= 25) return { name: "Débutant", color: "text-terracotta", reco: "Vous explorez. Concentrez-vous sur 1-2 cas d'usage à fort levier (idéation, SEO) et mettez en place un processus de validation humaine documenté." };
  if (score <= 50) return { name: "Explorateur", color: "text-gold", reco: "Vous expérimentez avec succès. Industrialisez : choisissez vos outils de référence, formalisez vos prompts, lancez un dashboard KPI et rédigez votre charte éthique." };
  if (score <= 75) return { name: "Avancé", color: "text-teal", reco: "L'IA est intégrée à vos workflows. Étendez la couverture à tous les domaines de la matrice, formez l'ensemble de l'équipe et instaurez une veille trimestrielle." };
  return { name: "Leader", color: "text-teal", reco: "Vous opérez à un niveau de maturité rare. Capitalisez : partagez votre framework en interne, contribuez à l'écosystème, et anticipez la prochaine vague (agents, multimodal, on-device)." };
}

export function Diagnostic() {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(6).fill(null));
  const [result, setResult] = useState<{ score: number } | null>(null);

  const compute = () => {
    const total = answers.reduce<number>((s, a) => s + (a ?? 0), 0);
    const score = Math.round((total / 18) * 100);
    setResult({ score });
    setTimeout(() => {
      document.getElementById("diag-result")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 80);
  };

  const allAnswered = answers.every((a) => a !== null);

  return (
    <section id="diagnostic" className="py-24 sm:py-32 bg-secondary/40 reveal">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <SectionTitle
          kicker="04 — Auto-diagnostic"
          title="Votre niveau de maturité IA"
          lead="Six questions, un score sur 100, une orientation actionnable."
        />

        <div className="bg-card rounded-2xl border border-line p-6 sm:p-10 shadow-[0_1px_2px_rgba(26,26,46,0.04),0_8px_24px_-12px_rgba(26,26,46,0.08)]">
          <ol className="space-y-8">
            {QUESTIONS.map((q, i) => (
              <li key={i}>
                <div className="flex gap-3 items-baseline">
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  <h3 className="font-serif text-lg sm:text-xl leading-snug">{q.label}</h3>
                </div>
                <p className="text-sm text-muted-foreground mt-1 ml-7">{q.hint}</p>
                <div className="flex flex-wrap gap-2 mt-4 ml-7">
                  {q.options.map((opt, idx) => {
                    const selected = answers[i] === idx;
                    return (
                      <button
                        key={opt}
                        onClick={() => {
                          const next = [...answers];
                          next[i] = idx;
                          setAnswers(next);
                        }}
                        className={`px-3.5 py-1.5 rounded-full text-sm font-mono border transition-all ${
                          selected
                            ? "bg-ink text-paper border-ink"
                            : "bg-paper text-muted-foreground border-line hover:border-ink hover:text-ink"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={compute}
              disabled={!allAnswered}
              className="px-6 py-3 rounded-full bg-ink text-paper font-mono text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-ink/90 transition-colors"
            >
              Calculer mon score
            </button>
            {!allAnswered && (
              <span className="font-mono text-xs text-muted-foreground">
                Répondez aux 6 questions pour activer le calcul.
              </span>
            )}
          </div>

          {result && (
            <div
              id="diag-result"
              className="mt-10 p-8 rounded-2xl border border-line bg-paper"
              style={{ animation: "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both" }}
            >
              <div className="flex flex-wrap items-baseline gap-4 justify-between">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    Votre score
                  </div>
                  <div className="font-serif text-6xl">
                    {result.score}
                    <span className="text-2xl text-muted-foreground">/100</span>
                  </div>
                </div>
                <div className={`font-serif text-3xl ${getLevel(result.score).color}`}>
                  {getLevel(result.score).name}
                </div>
              </div>
              <p className="mt-6 text-[15px] leading-relaxed text-foreground/85">
                {getLevel(result.score).reco}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
