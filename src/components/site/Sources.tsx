import { SectionTitle } from "./SectionTitle";

const REFS = [
  { author: "Huang & Rust (2021)", title: "A strategic framework for AI in marketing. JAMS." },
  { author: "Davenport et al. (2020)", title: "How AI will change marketing. JAMS." },
  { author: "Holliman & Rowley (2014)", title: "B2B digital content marketing. JRIM." },
  { author: "Pulizzi & Rose (2017)", title: "Killing Marketing. McGraw-Hill." },
  { author: "Content Marketing Institute (2024)", title: "B2B Benchmarks." },
  { author: "McKinsey (2023)", title: "Economic potential of generative AI." },
  { author: "Thèse de doctorat de l'auteure", title: "USMS Beni Mellal, en cours." },
];

export function Sources() {
  return (
    <section id="sources" className="py-24 sm:py-32 bg-secondary/40 reveal">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <SectionTitle
          kicker="06 — Bibliographie"
          title="Ancrage académique"
          lead="Le framework s'appuie sur la littérature académique de référence et les benchmarks sectoriels."
        />

        <ol className="space-y-3">
          {REFS.map((r, i) => (
            <li
              key={r.author}
              className="bg-card border border-line rounded-xl p-5 sm:p-6 flex gap-5 sm:gap-7 items-baseline hover:border-ink/30 transition-colors"
            >
              <span className="font-mono text-xs text-muted-foreground shrink-0 pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <div className="font-medium text-[15px]">{r.author}</div>
                <div className="text-muted-foreground text-[14px] mt-0.5 leading-relaxed">
                  {r.title}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <aside
          className="mt-10 rounded-2xl p-6 sm:p-8 border-l-4 border-teal bg-teal/5"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-teal mb-2">
            Note méthodologique
          </div>
          <p className="text-[15px] leading-relaxed">
            Les ratios IA/Humain sont indicatifs, issus du croisement entre littérature
            académique, benchmarks sectoriels et résultats empiriques.
          </p>
        </aside>
      </div>
    </section>
  );
}
