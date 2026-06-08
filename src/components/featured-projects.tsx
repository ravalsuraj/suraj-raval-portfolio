import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { featuredProjects } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

export function FeaturedProjects() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        {featuredProjects.map((project) => (
          <Link
            key={project.slug}
            href="/projects"
            className="block focus-visible:outline-none"
          >
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
      >
        View all projects
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}
