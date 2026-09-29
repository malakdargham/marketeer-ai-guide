import { SectionTitle } from "./SectionTitle";

const FIGURES = [
  {
    value: "XX %",
    caption: "des marketeurs utilisent déjà l'IA générative dans leur production de contenu.",
  },
  {
    value: "XX %",
    caption: "n'ont formalisé aucun cadre pour arbitrer entre tâches déléguées et tâches humaines.",
  },
  {
    value: "XX %",
    caption: "constatent un écart entre productivité annoncée et valeur réellement créée.",
  },
];

export function Contexte() {
  return (
    <section id="contexte" className="py-24 sm:py-32 reveal bg-secondary/40 border-b border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle
          kicker="00 — Contexte"
          title="Une adoption massive, sans boussole décisionnelle"
          lead="Pourquoi ce guide existe : donner aux équipes marketing un cadre explicite pour décider, tâche par tâche, de ce qui va à l'IA et de ce qui reste humain."
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-card rounded-2xl border border-line p-8 sm:p-10 shadow-[0_1px_2px_rgba(26,26,46,0.04),0_8px_24px_-12px_rgba(26,26,46,0.08)]">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-terracotta mb-4">
              Le problème
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Les marketeurs adoptent l'IA générative à grande vitesse, mais rarement avec un
              cadre. Sans règles explicites pour décider quoi déléguer à la machine et quoi
              garder sous contrôle humain, l'adoption se fait tâche par tâche, au feeling —
              avec des résultats inégaux, des risques de qualité de marque et une difficulté
              à mesurer la valeur réellement créée.
            </p>
          </div>

          <div className="bg-card rounded-2xl border border-line p-8 sm:p-10 shadow-[0_1px_2px_rgba(26,26,46,0.04),0_8px_24px_-12px_rgba(26,26,46,0.08)]">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-terracotta mb-4">
              L'approche
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Ce framework est issu d'une recherche doctorale croisant trois sources :
              la littérature académique sur l'IA et le content marketing, des benchmarks
              sectoriels sur les pratiques réelles des équipes, et des données empiriques
              collectées auprès de professionnels. Il en résulte une matrice, un arbre
              décisionnel et des indicateurs directement opérationnels.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 lg:gap-12 mt-16 pt-12 border-t border-line">
          {FIGURES.map((f) => (
            <div key={f.caption}>
              <div className="font-serif text-6xl sm:text-7xl leading-none text-terracotta">
                {f.value}
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
                {f.caption}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 pt-8 border-t border-line">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink whitespace-nowrap">
            Pour qui
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Responsables contenu, content managers et directeurs marketing qui doivent
            structurer l'usage de l'IA dans leur production éditoriale — et en justifier
            les arbitrages devant leur direction.
          </p>
        </div>
      </div>
    </section>
  );
}
