import { TABS } from "./Matrix";
import { STEPS, RESULTS } from "./DecisionTree";
import { KPIS } from "./Kpis";
import { PHASES } from "./Checklist";
import { REFS, SITE_CITATION } from "./Sources";

/** Version imprimable — masquée à l'écran, seule visible à l'impression. */
export function PrintGuide() {
  return (
    <div className="print-guide" aria-hidden="true">
      <header className="pg-cover">
        <p className="pg-kicker">Guide opérationnel — PhD Research</p>
        <h1>IA × Content Marketing — La Boîte à Outils du Marketeur</h1>
        <p>Framework décisionnel pour arbitrer entre intelligence artificielle et expertise humaine dans votre stratégie de contenu.</p>
        <p className="pg-meta">Malak Dargham · Doctorat IA &amp; Content Marketing · USMS Beni Mellal · 2026</p>
      </header>

      <section>
        <h2>1. Matrice décisionnelle</h2>
        {TABS.map((t) => (
          <div key={t.id} className="pg-block">
            <h3>{t.label} — {t.ai}% IA · {100 - t.ai}% Humain</h3>
            <div className="pg-bar"><span style={{ width: `${t.ai}%` }} /></div>
            <div className="pg-cols">
              <div><h4>Déléguer à l'IA</h4><ul>{t.aiItems.map((i) => <li key={i}>{i}</li>)}</ul></div>
              <div><h4>Garder la main</h4><ul>{t.human.map((i) => <li key={i}>{i}</li>)}</ul></div>
            </div>
            <p className="pg-small"><strong>Pourquoi ce ratio ?</strong> {t.why} ({t.whyRef})</p>
            <p className="pg-small"><strong>KPIs :</strong> {t.kpis.join(" · ")}</p>
          </div>
        ))}
      </section>

      <section className="pg-break">
        <h2>2. Arbre décisionnel — le processus en 5 questions</h2>
        <ol>
          {STEPS.map((s) => (
            <li key={s.q} className="pg-block">
              <strong>{s.q}</strong>
              <p className="pg-small">{s.d}</p>
              <p className="pg-small">{s.branches.map((b) => b.label).join("  |  ")}</p>
            </li>
          ))}
        </ol>
        <h3>Modes recommandés</h3>
        {RESULTS.map((r) => (
          <div key={r.mode} className="pg-block">
            <strong>{r.mode}</strong> — <span className="pg-small">{r.why}</span>
            <p className="pg-small">Exemples : {r.tasks.join(" · ")}</p>
          </div>
        ))}
      </section>

      <section className="pg-break">
        <h2>3. Les indicateurs essentiels</h2>
        {KPIS.map((k) => (
          <div key={k.title} className="pg-block">
            <h3>{k.title} <span className="pg-tag">{k.cat}</span></h3>
            <p className="pg-small">{k.desc}</p>
            <p className="pg-formula">{k.formula}</p>
            {k.warning && <p className="pg-small pg-warn">⚠ {k.warning}</p>}
            <p className="pg-small"><strong>Comment le mesurer :</strong> {k.measure}</p>
            <p className="pg-small"><strong>Outil suggéré :</strong> {k.tool}</p>
            <p className="pg-small"><strong>Seuil indicatif :</strong> {k.threshold}</p>
            <p className="pg-small"><strong>Limite :</strong> {k.limit}</p>
          </div>
        ))}
      </section>

      <section className="pg-break">
        <h2>4. Checklist de déploiement</h2>
        {PHASES.map((p) => (
          <div key={p.title} className="pg-block">
            <h3>{p.title} ({p.sub})</h3>
            <ul className="pg-check">{p.items.map((i) => <li key={i}>☐ {i}</li>)}</ul>
          </div>
        ))}
      </section>

      <section className="pg-break">
        <h2>5. Ancrage académique</h2>
        <ol>
          {REFS.map((r, i) => <li key={i} className="pg-block pg-small">{r.apa}{r.doi && <> https://doi.org/{r.doi}</>}</li>)}
        </ol>
        <h3>Citer ce framework</h3>
        <p className="pg-small">{SITE_CITATION}</p>
      </section>
    </div>
  );
}
