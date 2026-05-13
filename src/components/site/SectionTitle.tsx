export function SectionTitle({ kicker, title, lead }: { kicker?: string; title: string; lead?: string }) {
  return (
    <div className="max-w-3xl mb-12">
      {kicker && (
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-terracotta mb-3">
          {kicker}
        </div>
      )}
      <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05]">{title}</h2>
      {lead && <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{lead}</p>}
    </div>
  );
}
