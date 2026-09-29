import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "./SectionTitle";

const STORAGE_KEY = "marketeer-checklist-progress";

const PHASES = [
  {
    title: "Phase 1 — Diagnostic",
    sub: "Sem. 1-2",
    items: [
      "Auditer les workflows actuels",
      "Identifier tâches haut volume / faible valeur humaine",
      "Réaliser l'auto-diagnostic maturité IA",
      "Définir KPIs baseline",
    ],
  },
  {
    title: "Phase 2 — Pilote",
    sub: "Sem. 3-6",
    items: [
      "Sélectionner 2-3 cas d'usage prioritaires",
      "Choisir / configurer outils IA",
      "Mettre en place validation humaine",
      "Produire premier batch hybride",
      "Rédiger charte éthique IA",
    ],
  },
  {
    title: "Phase 3 — Mesure",
    sub: "Sem. 7-10",
    items: [
      "Comparer KPIs avant / après",
      "Collecter feedback équipe éditoriale",
      "Ajuster ratios IA / Humain",
      "Documenter prompts / templates performants",
    ],
  },
  {
    title: "Phase 4 — Scale",
    sub: "Sem. 11+",
    items: [
      "Étendre aux autres domaines de la matrice",
      "Former l'ensemble de l'équipe",
      "Automatiser reporting dashboard",
      "Veille IA trimestrielle",
    ],
  },
];

export function Checklist() {
  const allItems = useMemo(() => PHASES.flatMap((p, pi) => p.items.map((_, ii) => `${pi}-${ii}`)), []);
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [storageReady, setStorageReady] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: unknown = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const validItems = parsed.filter(
            (item): item is string => typeof item === "string" && allItems.includes(item),
          );
          setChecked(new Set(validItems));
        }
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    } finally {
      setStorageReady(true);
    }
  }, [allItems]);

  useEffect(() => {
    if (!storageReady) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...checked]));
  }, [checked, storageReady]);

  const toggle = (k: string) => {
    const next = new Set(checked);
    next.has(k) ? next.delete(k) : next.add(k);
    setChecked(next);
  };

  const pct = Math.round((checked.size / allItems.length) * 100);

  return (
    <section id="checklist" className="py-24 sm:py-32 reveal">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <SectionTitle
          kicker="05 — Roadmap"
          title="Checklist de déploiement"
          lead="Quatre phases sur trois mois pour passer de l'expérimentation à l'industrialisation."
        />

        <div className="bg-card rounded-2xl border border-line p-6 sm:p-10 shadow-[0_1px_2px_rgba(26,26,46,0.04),0_8px_24px_-12px_rgba(26,26,46,0.08)]">
          <div className="space-y-10">
            {PHASES.map((p, pi) => (
              <div key={p.title}>
                <div className="flex items-baseline justify-between gap-4 mb-4 pb-3 border-b border-line">
                  <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-ink">{p.title}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{p.sub}</span>
                </div>
                <ul className="space-y-2.5">
                  {p.items.map((it, ii) => {
                    const k = `${pi}-${ii}`;
                    const on = checked.has(k);
                    return (
                      <li key={k}>
                        <button
                          onClick={() => toggle(k)}
                          className="w-full flex items-start gap-3 text-left group py-1"
                        >
                          <span
                            className={`shrink-0 w-5 h-5 mt-0.5 rounded-md border-2 flex items-center justify-center transition-all ${
                              on
                                ? "bg-teal border-teal text-paper"
                                : "border-line group-hover:border-ink"
                            }`}
                          >
                            {on && (
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </span>
                          <span
                            className={`text-[15px] leading-relaxed transition-colors ${
                              on ? "line-through text-muted-foreground" : "text-foreground"
                            }`}
                          >
                            {it}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-line">
            <div className="flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
              <span>Progression</span>
              <div className="flex items-center gap-3">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setChecked(new Set())}
                  disabled={checked.size === 0}
                  className="h-auto px-1 py-0 font-mono text-xs normal-case text-muted-foreground shadow-none hover:bg-transparent hover:text-ink"
                >
                  Réinitialiser
                </Button>
                <span className="text-ink">{pct}%</span>
              </div>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <div
                className="h-full bg-teal transition-all duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
