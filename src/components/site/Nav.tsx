import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "contexte", label: "Contexte" },
  { id: "matrice", label: "Matrice" },
  { id: "arbre", label: "Arbre décisionnel" },
  { id: "kpis", label: "KPIs" },
  { id: "diagnostic", label: "Auto-diagnostic" },
  { id: "checklist", label: "Checklist" },
  { id: "sources", label: "Sources" },
];

export function Nav() {
  const [active, setActive] = useState("contexte");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120;
      let current = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="no-print sticky top-0 z-50 backdrop-blur-md bg-paper/80 border-b border-line">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-14 flex items-center justify-between gap-6">
        <a href="#contexte" className="font-serif text-xl tracking-tight whitespace-nowrap">
          IA <span className="text-terracotta">×</span> Content
        </a>
        <ul className="hidden md:flex items-center gap-1 overflow-x-auto">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`px-3 py-1.5 rounded-full text-[13px] font-mono transition-colors whitespace-nowrap ${
                  active === s.id
                    ? "bg-ink text-paper"
                    : "text-muted-foreground hover:text-ink"
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => window.print()}
          className="hidden lg:inline-flex text-[12px] font-mono px-3 py-1.5 rounded-full border border-line text-muted-foreground hover:text-ink hover:border-ink transition-colors whitespace-nowrap"
        >
          Télécharger le guide (PDF)
        </button>
        <a
          href="#diagnostic"
          className="md:hidden text-xs font-mono px-3 py-1.5 rounded-full bg-ink text-paper"
        >
          Diagnostic
        </a>
      </nav>
    </header>
  );
}
