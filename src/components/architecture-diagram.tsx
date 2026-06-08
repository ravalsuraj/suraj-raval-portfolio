import { cn } from "@/lib/utils";

interface ArchitectureDiagramProps {
  lines: string[];
  label?: string;
  className?: string;
}

/**
 * Lightweight, dependency-free architecture diagram rendered as a monospace
 * block. ATS- and print-safe, scales cleanly, and matches the engineering
 * aesthetic without shipping an SVG/diagramming library.
 */
export function ArchitectureDiagram({
  lines,
  label = "Architecture",
  className,
}: ArchitectureDiagramProps) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-muted/40",
        className
      )}
    >
      <figcaption className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-2">
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
        </span>
        <span className="font-mono text-xs text-muted-foreground">{label}</span>
      </figcaption>
      <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-relaxed text-foreground/80 sm:text-[13px]">
        <code>{lines.join("\n")}</code>
      </pre>
    </figure>
  );
}
