import { experience } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

interface CareerTimelineProps {
  /** compact = home page summary; full = experience page detail */
  variant?: "compact" | "full";
}

export function CareerTimeline({ variant = "full" }: CareerTimelineProps) {
  return (
    <ol className="relative">
      {experience.map((item, index) => (
        <li key={item.role + item.company} className="group relative pb-12 last:pb-0">
          {/* connector line */}
          {index !== experience.length - 1 && (
            <span
              className="absolute left-[7px] top-3 h-full w-px bg-border"
              aria-hidden
            />
          )}

          <div className="relative flex gap-6">
            {/* node */}
            <span className="relative z-10 mt-1.5 flex size-3.5 shrink-0 items-center justify-center">
              <span
                className={
                  item.current
                    ? "size-3.5 rounded-full border-2 border-foreground bg-background"
                    : "size-2.5 rounded-full border border-border bg-muted-foreground/40"
                }
              />
            </span>

            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-lg font-semibold tracking-tight">
                  {item.role}
                </h3>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                  {item.period}
                </span>
              </div>

              <p className="mt-0.5 text-sm text-muted-foreground">
                {item.company}
                {item.location ? ` · ${item.location}` : ""}
                {item.current && (
                  <span className="ml-2 inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                    Current
                  </span>
                )}
              </p>

              <p className="mt-3 text-pretty text-sm leading-relaxed text-foreground/80">
                {item.summary}
              </p>

              {variant === "full" && (
                <ul className="mt-4 space-y-2.5">
                  {item.responsibilities.map((r) => (
                    <li
                      key={r}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/50" />
                      {r}
                    </li>
                  ))}
                </ul>
              )}

              {item.stack && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.stack.map((s) => (
                    <Badge key={s} variant="mono">
                      {s}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
