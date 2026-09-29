export function About() {
  return (
    <section id="apropos" className="py-24 border-t border-line">
      <div className="max-w-3xl mx-auto px-6">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-terracotta mb-3">
          À propos de l'auteure
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05]">Malak Dargham</h2>

        <div className="mt-8 flex flex-col sm:flex-row items-start gap-8">
          <div
            className="shrink-0 w-28 h-28 rounded-full bg-muted/15 border border-line flex items-center justify-center overflow-hidden"
            aria-hidden="true"
          >
            <span className="font-serif text-3xl text-muted-foreground">MD</span>
          </div>

          <div className="flex-1">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground leading-relaxed">
              Doctorante en IA &amp; Content Marketing — USMS Beni Mellal · Lead UX Designer
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-line text-sm font-mono text-ink hover:border-terracotta hover:text-terracotta transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.17V23H8V8z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:contact@example.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-line text-sm font-mono text-ink hover:border-terracotta hover:text-terracotta transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 6 10-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
