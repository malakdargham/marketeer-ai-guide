import { useState } from "react";
import { SectionTitle } from "./SectionTitle";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";

async function downloadPdf(score: number, values: number[], weakest: number[]) {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const ink: [number, number, number] = [26, 26, 46];
  const muted: [number, number, number] = [89, 89, 103];
  const teal: [number, number, number] = [42, 111, 111];
  const terra: [number, number, number] = [196, 93, 62];
  const lvl = getLevel(score);
  doc.setFillColor(247, 245, 240); doc.rect(0, 0, 210, 297, "F");
  doc.setFont("courier", "normal"); doc.setFontSize(9); doc.setTextColor(...muted);
  doc.text("IA x CONTENT MARKETING - AUTO-DIAGNOSTIC", 20, 20);
  doc.text(new Date().toLocaleDateString("fr-FR"), 190, 20, { align: "right" });
  doc.setFont("times", "normal"); doc.setFontSize(26); doc.setTextColor(...ink);
  doc.text("Votre niveau de maturité IA", 20, 36);
  doc.setFontSize(48); doc.text(`${score}`, 20, 60);
  const w = doc.getTextWidth(`${score}`); doc.setFontSize(16); doc.setTextColor(...muted); doc.text("/100", 20 + w + 2, 60);
  doc.setFontSize(24); doc.setTextColor(...teal); doc.text(lvl.name, 190, 58, { align: "right" });
  // level bar
  const bx = 20, bw = 170, by = 70;
  LEVELS.forEach((l, i) => {
    doc.setFillColor(...(i === LEVELS.indexOf(lvl) ? ink : ([216, 212, 204] as [number, number, number])));
    doc.rect(bx + (bw / 4) * i + 0.5, by, bw / 4 - 1, 2.5, "F");
    doc.setFont("courier", "normal"); doc.setFontSize(8); doc.setTextColor(...muted);
    doc.text(l.name.toUpperCase(), bx + (bw / 4) * i + bw / 8, by + 8, { align: "center" });
  });
  doc.setFillColor(...terra); doc.circle(bx + (bw * score) / 100, by + 1.25, 2, "F");
  doc.setFont("helvetica", "normal"); doc.setFontSize(10); doc.setTextColor(...ink);
  doc.text(doc.splitTextToSize(lvl.reco, 170), 20, 90);
  // radar
  const cx = 105, cy = 150, R = 38, n = 6;
  const pt = (i: number, r: number) => [cx + r * Math.sin((2 * Math.PI * i) / n), cy - r * Math.cos((2 * Math.PI * i) / n)];
  doc.setDrawColor(216, 212, 204); doc.setLineWidth(0.2);
  for (let k = 1; k <= 3; k++) {
    for (let i = 0; i < n; i++) { const a = pt(i, (R * k) / 3), b = pt(i + 1, (R * k) / 3); doc.line(a[0], a[1], b[0], b[1]); }
  }
  for (let i = 0; i < n; i++) { const a = pt(i, R); doc.line(cx, cy, a[0], a[1]); }
  doc.setDrawColor(...teal); doc.setLineWidth(0.8);
  for (let i = 0; i < n; i++) {
    const a = pt(i, (R * values[i]) / 3), b = pt(i + 1, (R * values[(i + 1) % n]) / 3);
    doc.line(a[0], a[1], b[0], b[1]);
  }
  doc.setFillColor(...teal);
  values.forEach((v, i) => { const a = pt(i, (R * v) / 3); doc.circle(a[0], a[1], 1, "F"); });
  doc.setFont("courier", "normal"); doc.setFontSize(8); doc.setTextColor(...ink);
  DIMENSIONS.forEach((d, i) => {
    const a = pt(i, R + 8);
    doc.text(`${d.name} (${values[i]}/3)`, a[0], a[1] + 1, { align: a[0] < cx - 2 ? "right" : a[0] > cx + 2 ? "left" : "center" });
  });
  // recommendations
  let y = 212;
  doc.setFont("times", "normal"); doc.setFontSize(16); doc.setTextColor(...ink);
  doc.text("Vos 2 axes prioritaires", 20, y); y += 8;
  weakest.forEach((i, k) => {
    doc.setFont("courier", "bold"); doc.setFontSize(9); doc.setTextColor(...terra);
    doc.text(`0${k + 1} - ${DIMENSIONS[i].name.toUpperCase()} (${values[i]}/3)`, 20, y); y += 5;
    doc.setFont("helvetica", "normal"); doc.setFontSize(10); doc.setTextColor(...ink);
    const lines = doc.splitTextToSize(DIMENSIONS[i].reco, 170); doc.text(lines, 20, y); y += lines.length * 5 + 6;
  });
  doc.setFont("courier", "normal"); doc.setFontSize(8); doc.setTextColor(...muted);
  doc.text("Malak Dargham - Doctorat IA & Content Marketing - USMS Beni Mellal", 105, 285, { align: "center" });
  doc.save(`diagnostic-ia-${score}.pdf`);
}

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

const LEVELS = [
  { name: "Débutant", max: 25, color: "text-terracotta", reco: "Vous explorez. Concentrez-vous sur 1-2 cas d'usage à fort levier (idéation, SEO) et mettez en place un processus de validation humaine documenté." },
  { name: "Explorateur", max: 50, color: "text-gold", reco: "Vous expérimentez avec succès. Industrialisez : choisissez vos outils de référence, formalisez vos prompts, lancez un dashboard KPI et rédigez votre charte éthique." },
  { name: "Avancé", max: 75, color: "text-teal", reco: "L'IA est intégrée à vos workflows. Étendez la couverture à tous les domaines de la matrice, formez l'ensemble de l'équipe et instaurez une veille trimestrielle." },
  { name: "Expert", max: 100, color: "text-teal", reco: "Vous opérez à un niveau de maturité rare. Capitalisez : partagez votre framework en interne, contribuez à l'écosystème, et anticipez la prochaine vague (agents, multimodal)." },
];
function getLevel(score: number) {
  return LEVELS.find((l) => score <= l.max) ?? LEVELS[3];
}

const DIMENSIONS = [
  { name: "Adoption", reco: "Identifiez 2-3 tâches répétitives à fort volume (idéation, variantes de titres, SEO) et déléguez-les à l'IA en priorité.", href: "#matrice", link: "Voir la matrice" },
  { name: "IA analytique", reco: "Branchez vos données de performance à un outil d'analyse prédictive et suivez des indicateurs de précision et de temps gagné.", href: "#kpis", link: "Voir les KPIs" },
  { name: "Validation humaine", reco: "Documentez une étape de relecture obligatoire (voix de marque, fact-checking) avant toute publication de contenu IA.", href: "#checklist", link: "Voir la checklist" },
  { name: "Mesure", reco: "Définissez une baseline puis suivez Content Velocity, Taux de Révision et ROI dans un dashboard dédié.", href: "#kpis", link: "Voir les KPIs" },
  { name: "Formation", reco: "Lancez une formation initiale sur les outils et leurs limites, puis un rituel de partage des prompts performants.", href: "#checklist", link: "Voir la checklist" },
  { name: "Gouvernance", reco: "Rédigez une charte éthique IA (transparence, RGPD, droits d'auteur) et planifiez un audit régulier de son application.", href: "#checklist", link: "Voir la checklist" },
];

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

          {result && (() => {
            const values = answers.map((a) => a ?? 0);
            const lvl = getLevel(result.score);
            const lvlIdx = LEVELS.indexOf(lvl);
            // Départage en cas d'égalité : Validation humaine > Gouvernance > Mesure > Formation > IA analytique > Adoption
            const TIEBREAK = [2, 5, 3, 4, 1, 0];
            const weakest = values
              .map((v, i) => [v, i] as const)
              .sort((a, b) => a[0] - b[0] || TIEBREAK.indexOf(a[1]) - TIEBREAK.indexOf(b[1]))
              .slice(0, 2)
              .map((x) => x[1]);
            const homogeneous = new Set(values).size === 1;
            const data = DIMENSIONS.map((d, i) => ({ dim: d.name, value: values[i] }));
            return (
            <div
              id="diag-result"
              className="mt-10 p-6 sm:p-8 rounded-2xl border border-line bg-paper"
              style={{ animation: "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both" }}
            >
              <div className="flex flex-wrap items-baseline gap-4 justify-between">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">Votre score</div>
                  <div className="font-serif text-6xl">
                    {result.score}<span className="text-2xl text-muted-foreground">/100</span>
                  </div>
                </div>
                <div className={`font-serif text-3xl ${lvl.color}`}>{lvl.name}</div>
              </div>

              <div className="mt-8">
                <div className="relative h-2 flex gap-1">
                  {LEVELS.map((l, i) => (
                    <div key={l.name} className={`flex-1 rounded-full transition-colors ${i === lvlIdx ? "bg-ink" : "bg-line"}`} />
                  ))}
                  <div
                    className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-terracotta ring-4 ring-paper transition-all duration-700"
                    style={{ left: `${result.score}%` }}
                    aria-label={`Votre position : ${result.score}/100`}
                  />
                </div>
                <div className="grid grid-cols-4 mt-3">
                  {LEVELS.map((l, i) => (
                    <div key={l.name} className={`text-center font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.12em] ${i === lvlIdx ? "text-ink font-semibold" : "text-muted-foreground"}`}>
                      {l.name}
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-6 text-[15px] leading-relaxed text-foreground/85">{lvl.reco}</p>

              <div className="mt-8 h-72 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={data} outerRadius="70%">
                    <PolarGrid stroke="var(--line, #d8d4cc)" />
                    <PolarAngleAxis dataKey="dim" tick={{ fill: "var(--ink)", fontSize: 11, fontFamily: "JetBrains Mono, monospace" }} />
                    <PolarRadiusAxis domain={[0, 3]} tickCount={4} tick={false} axisLine={false} />
                    <Radar dataKey="value" stroke="var(--teal)" fill="var(--teal)" fillOpacity={0.25} strokeWidth={2} isAnimationActive />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-4">Vos 2 axes prioritaires</div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {weakest.map((i) => (
                    <div key={i} className="p-5 rounded-xl border border-line bg-card">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-serif text-xl">{DIMENSIONS[i].name}</h4>
                        <span className="font-mono text-xs text-terracotta">{values[i]}/3</span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/85">{DIMENSIONS[i].reco}</p>
                      <a href={DIMENSIONS[i].href} className="inline-block mt-3 font-mono text-xs text-teal hover:underline">
                        {DIMENSIONS[i].link} →
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => downloadPdf(result.score, values, weakest)}
                  className="px-5 py-2.5 rounded-full bg-ink text-paper font-mono text-sm hover:bg-ink/90 transition-colors"
                >
                  Télécharger mon diagnostic (PDF)
                </button>
                <button
                  onClick={() => {
                    setAnswers(Array(6).fill(null));
                    setResult(null);
                    document.getElementById("diagnostic")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-5 py-2.5 rounded-full border border-line font-mono text-sm hover:border-ink transition-colors"
                >
                  Refaire le test
                </button>
              </div>
            </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
