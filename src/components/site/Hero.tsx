export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden text-paper"
      style={{ background: "linear-gradient(160deg, #1a1a2e 0%, #2a2548 60%, #3a3352 100%)" }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="aurora-1 absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #c45d3e 0%, transparent 60%)" }}
        />
        <div
          className="aurora-2 absolute -bottom-40 -right-32 w-[700px] h-[700px] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, #2a6f6f 0%, transparent 60%)" }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 py-24 w-full">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border border-paper/25 text-paper/85">
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta-light" />
          Guide opérationnel — PhD Research
        </span>

        <h1 className="font-serif mt-8 text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
          IA <span className="text-terracotta-light">×</span> Content Marketing
          <br />
          <em className="text-terracotta-light not-italic-children" style={{ fontStyle: "italic" }}>
            La Boîte à Outils
          </em>
          <br />
          du Marketeur
        </h1>

        <p className="mt-8 max-w-2xl text-lg sm:text-xl text-paper/75 leading-relaxed">
          Framework décisionnel pour arbitrer entre intelligence artificielle et expertise humaine
          dans votre stratégie de contenu.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#diagnostic"
            className="inline-flex items-center px-6 py-3 rounded-full bg-terracotta text-white font-mono text-sm uppercase tracking-[0.12em] hover:bg-terracotta-light hover:text-ink transition-colors"
          >
            Faire l'auto-diagnostic
          </a>
          <a
            href="#matrice"
            className="inline-flex items-center px-6 py-3 rounded-full border border-paper/40 text-paper font-mono text-sm uppercase tracking-[0.12em] hover:bg-paper/10 transition-colors"
          >
            Explorer la matrice
          </a>
        </div>

        <div className="mt-16 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/85">
          Malak · Doctorat IA &amp; Content Marketing · USMS Beni Mellal · 2026
        </div>
      </div>

      <a
        href="#matrice"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce-soft text-paper/60 hover:text-paper transition-colors"
        aria-label="Scroll"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
