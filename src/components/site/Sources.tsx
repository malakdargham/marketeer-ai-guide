import { useState } from "react";
import { Check, Copy, ExternalLink, Quote } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

type RefType = "Académique" | "Sectoriel";

type Ref = {
  type: RefType;
  apa: React.ReactNode;
  plain: string;
  doi?: string;
};

export const REFS: Ref[] = [
  {
    type: "Académique",
    apa: (
      <>
        Huang, M.-H., &amp; Rust, R. T. (2021). A strategic framework for artificial
        intelligence in marketing. <em>Journal of the Academy of Marketing Science, 49</em>(1),
        30–50.
      </>
    ),
    plain:
      "Huang, M.-H., & Rust, R. T. (2021). A strategic framework for artificial intelligence in marketing. Journal of the Academy of Marketing Science, 49(1), 30–50. https://doi.org/10.1007/s11747-020-00749-9",
    doi: "10.1007/s11747-020-00749-9",
  },
  {
    type: "Académique",
    apa: (
      <>
        Davenport, T., Guha, A., Grewal, D., &amp; Bressgott, T. (2020). How artificial
        intelligence will change the future of marketing.{" "}
        <em>Journal of the Academy of Marketing Science, 48</em>(1), 24–42.
      </>
    ),
    plain:
      "Davenport, T., Guha, A., Grewal, D., & Bressgott, T. (2020). How artificial intelligence will change the future of marketing. Journal of the Academy of Marketing Science, 48(1), 24–42. https://doi.org/10.1007/s11747-019-00696-0",
    doi: "10.1007/s11747-019-00696-0",
  },
  {
    type: "Académique",
    apa: (
      <>
        Holliman, G., &amp; Rowley, J. (2014). Business to business digital content
        marketing: Marketers' perceptions of best practice.{" "}
        <em>Journal of Research in Interactive Marketing, 8</em>(4), 269–293.
      </>
    ),
    plain:
      "Holliman, G., & Rowley, J. (2014). Business to business digital content marketing: Marketers' perceptions of best practice. Journal of Research in Interactive Marketing, 8(4), 269–293. https://doi.org/10.1108/JRIM-02-2014-0013",
    doi: "10.1108/JRIM-02-2014-0013",
  },
  {
    type: "Académique",
    apa: (
      <>
        Pulizzi, J., &amp; Rose, R. (2017).{" "}
        <em>Killing marketing: How innovative businesses are turning marketing cost into
        profit</em>. McGraw-Hill Education.
      </>
    ),
    plain:
      "Pulizzi, J., & Rose, R. (2017). Killing marketing: How innovative businesses are turning marketing cost into profit. McGraw-Hill Education.",
  },
  {
    type: "Sectoriel",
    apa: (
      <>
        Content Marketing Institute. (2024).{" "}
        <em>B2B content marketing benchmarks, budgets, and trends: Outlook for 2024</em>.
        Content Marketing Institute.
      </>
    ),
    plain:
      "Content Marketing Institute. (2024). B2B content marketing benchmarks, budgets, and trends: Outlook for 2024. Content Marketing Institute.",
  },
  {
    type: "Sectoriel",
    apa: (
      <>
        McKinsey &amp; Company. (2023).{" "}
        <em>The economic potential of generative AI: The next productivity frontier</em>.
        McKinsey Global Institute.
      </>
    ),
    plain:
      "McKinsey & Company. (2023). The economic potential of generative AI: The next productivity frontier. McKinsey Global Institute.",
  },
  {
    type: "Académique",
    apa: (
      <>
        Dargham, M. (en cours).{" "}
        <em>Intelligence artificielle et content marketing : un framework décisionnel</em>{" "}
        [Thèse de doctorat en préparation]. Université Sultan Moulay Slimane, Beni Mellal.
      </>
    ),
    plain:
      "Dargham, M. (en cours). Intelligence artificielle et content marketing : un framework décisionnel [Thèse de doctorat en préparation]. Université Sultan Moulay Slimane, Beni Mellal.",
  },
];

export const SITE_CITATION =
  "Dargham, M. (2026). IA × Content Marketing — La boîte à outils du marketeur : framework décisionnel pour arbitrer entre intelligence artificielle et expertise humaine. https://marketeer-ai-guide.lovable.app";

const FILTERS: ("Toutes" | RefType)[] = ["Toutes", "Académique", "Sectoriel"];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] px-3 py-1.5 rounded-full border border-line text-muted-foreground hover:text-ink hover:border-ink transition-colors"
    >
      {copied ? <Check size={13} strokeWidth={1.5} className="text-teal" /> : <Copy size={13} strokeWidth={1.5} />}
      {copied ? "Copiée" : "Copier la citation"}
    </button>
  );
}

export function Sources() {
  const [filter, setFilter] = useState<"Toutes" | RefType>("Toutes");
  const list = filter === "Toutes" ? REFS : REFS.filter((r) => r.type === filter);

  return (
    <section id="sources" className="py-24 sm:py-32 bg-secondary/40 reveal">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <SectionTitle
          kicker="06 — Bibliographie"
          title="Ancrage académique"
          lead="Le framework s'appuie sur la littérature académique de référence et les benchmarks sectoriels. Références au format APA 7."
        />

        <div className="flex flex-wrap gap-2 mb-8">
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

        <ol className="space-y-3">
          {list.map((r) => {
            const i = REFS.indexOf(r);
            return (
              <li
                key={r.plain}
                className="bg-card border border-line rounded-xl p-5 sm:p-6 flex gap-5 sm:gap-7 hover:border-ink/30 transition-colors"
              >
                <span className="font-mono text-xs text-muted-foreground shrink-0 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] leading-relaxed">{r.apa}</p>
                  {r.doi && (
                    <a
                      href={`https://doi.org/${r.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1 font-mono text-[12px] text-teal hover:underline break-all"
                    >
                      https://doi.org/{r.doi}
                      <ExternalLink size={12} strokeWidth={1.5} className="shrink-0" />
                    </a>
                  )}
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <CopyButton text={r.plain} />
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      {r.type}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-10 bg-card border border-line rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2.5 mb-3">
            <Quote size={16} strokeWidth={1.5} className="text-terracotta" />
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-terracotta">
              Citer ce framework
            </div>
          </div>
          <p className="text-[14px] leading-relaxed mb-4">
            Dargham, M. (2026).{" "}
            <em>
              IA × Content Marketing — La boîte à outils du marketeur : framework
              décisionnel pour arbitrer entre intelligence artificielle et expertise
              humaine
            </em>
            . https://marketeer-ai-guide.lovable.app
          </p>
          <CopyButton text={SITE_CITATION} />
        </div>

        <aside className="mt-8 rounded-2xl p-6 sm:p-8 border-l-4 border-teal bg-teal/5">
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
