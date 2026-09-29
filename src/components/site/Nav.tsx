import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const SECTIONS = [
  { id: "contexte", label: "Contexte" },
  { id: "matrice", label: "Matrice" },
  { id: "arbre", label: "Arbre décisionnel" },
  { id: "kpis", label: "KPIs" },
  { id: "diagnostic", label: "Auto-diagnostic" },
  { id: "checklist", label: "Checklist" },
  { id: "sources", label: "Sources" },
];

const MOBILE_SECTIONS = [...SECTIONS, { id: "apropos", label: "À propos" }];

export function Nav() {
  const [active, setActive] = useState("contexte");
  const [open, setOpen] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
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
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#diagnostic"
              className="text-xs font-mono px-3 py-1.5 rounded-full bg-ink text-paper"
            >
              Diagnostic
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-line text-ink hover:bg-secondary transition-colors"
            >
              <Menu size={18} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="no-print md:hidden fixed inset-0 z-[70] bg-paper flex flex-col menu-panel" role="dialog" aria-modal="true" aria-label="Menu de navigation">
          <div className="h-14 px-4 flex items-center justify-between border-b border-line shrink-0">
            <span className="font-serif text-xl tracking-tight">
              IA <span className="text-terracotta">×</span> Content
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fermer le menu"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-line text-ink hover:bg-secondary transition-colors"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-8">
            <ul className="space-y-5">
              {MOBILE_SECTIONS.map((s, i) => (
                <li key={s.id} className="menu-item" style={{ animationDelay: `${i * 45}ms` }}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className="font-serif text-3xl sm:text-4xl leading-tight tracking-tight text-ink hover:text-terracotta transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="px-6 pb-10 pt-4 shrink-0">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                window.print();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-ink text-paper font-mono text-sm uppercase tracking-[0.12em] hover:bg-terracotta hover:text-white transition-colors"
            >
              Télécharger le guide (PDF)
            </button>
          </div>
        </div>
      )}
    </>
  );
}
