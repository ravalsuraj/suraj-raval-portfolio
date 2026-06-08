import type { Metadata } from "next";

import { projects } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected production systems across enterprise payments, developer tooling, CTI, and conversational AI platforms.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Systems built for production, not demos"
        description="A selection of platforms I've architected and delivered — each with the technical decisions and architecture that made it work at scale."
      />

      <section className="container py-16 sm:py-20">
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.slug} id={project.slug} className="scroll-mt-24">
              <ProjectCard project={project} detailed />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
