import { highlights } from "@/lib/data";

export function Highlights() {
  return (
    <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {highlights.map((h) => (
        <div
          key={h.label}
          className="bg-card p-6 transition-colors hover:bg-accent/40"
        >
          <p className="text-2xl font-semibold tracking-tight">{h.label}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {h.detail}
          </p>
        </div>
      ))}
    </div>
  );
}
