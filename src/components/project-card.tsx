import { ArrowUpRight } from "lucide-react";

import type { ProjectItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArchitectureDiagram } from "@/components/architecture-diagram";

interface ProjectCardProps {
  project: ProjectItem;
  /** detailed = full project page card with diagram + highlights */
  detailed?: boolean;
}

export function ProjectCard({ project, detailed = false }: ProjectCardProps) {
  if (!detailed) {
    return (
      <Card className="group flex h-full flex-col p-6 transition-colors hover:border-foreground/20 hover:bg-accent/30">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold tracking-tight">
            {project.title}
          </h3>
          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
        </div>
        <p className="mt-1 font-mono text-xs text-muted-foreground">
          {project.tagline}
        </p>
        <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Badge key={s} variant="mono">
              {s}
            </Badge>
          ))}
        </div>
      </Card>
    );
  }

  return (
    <Card className="avoid-break overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col p-7 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-semibold tracking-tight">
              {project.title}
            </h3>
            {project.metric && (
              <Badge variant="default" className="font-mono text-[11px]">
                {project.metric}
              </Badge>
            )}
          </div>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            {project.tagline}
          </p>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-foreground/80">
            {project.description}
          </p>

          <ul className="mt-5 space-y-2.5">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/50" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <Badge key={s} variant="outline">
                {s}
              </Badge>
            ))}
          </div>
        </div>

        <div className="border-t border-border bg-secondary/30 p-7 sm:p-8 lg:border-l lg:border-t-0">
          <ArchitectureDiagram lines={project.architecture} />
        </div>
      </div>
    </Card>
  );
}
