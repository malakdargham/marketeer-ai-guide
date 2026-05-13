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

const colorMap: Record<string, string> = {
  teal: "bg-teal/10 text-teal border-teal/30",
  terra: "bg-terracotta/10 text-terracotta border-terracotta/30",
  violet: "bg-[#3a3352]/10 text-[#3a3352] border-[#3a3352]/25",
};

const numColor = ["bg-teal", "bg-terracotta", "bg-teal", "bg-terracotta", "bg-[#3a3352]"];

export function DecisionTree() {
  return (
    <section id="arbre" className="py-24 sm:py-32 bg-secondary/40 reveal">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <SectionTitle
          kicker="02 — Arbre décisionnel"
          title="Le processus en 5 questions"
          lead="Un cheminement séquentiel pour arbitrer cas par cas, sans dogmatisme."
        />

        <div className="bg-card rounded-2xl border border-line p-6 sm:p-12 shadow-[0_1px_2px_rgba(26,26,46,0.04),0_8px_24px_-12px_rgba(26,26,46,0.08)]">
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
        </div>
      </div>
    </section>
  );
}
