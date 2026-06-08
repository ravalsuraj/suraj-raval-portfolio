import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { SkillsSection } from "@/components/skills-section";
import { FeaturedProjects } from "@/components/featured-projects";
import { CareerTimeline } from "@/components/career-timeline";
import { Highlights } from "@/components/highlights";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Highlights strip */}
      <section className="container py-16 sm:py-20">
        <SectionHeading
          eyebrow="At a glance"
          title="A rare intersection of skills"
          description="There are thousands of Salesforce developers. Far fewer engineers can credibly span enterprise payments, CRM architecture, full-stack JavaScript, developer tooling, and customer communications."
        />
        <div className="mt-10">
          <Highlights />
        </div>
      </section>

      {/* Featured skills */}
      <section className="border-t border-border bg-secondary/20">
        <div className="container py-16 sm:py-20">
          <SectionHeading
            eyebrow="Capabilities"
            title="Featured skills"
            description="The toolkit behind the platforms — from language fundamentals to system-level architecture."
          />
          <div className="mt-10">
            <SkillsSection />
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="container py-16 sm:py-20">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured projects"
          description="Production systems across payments, developer tooling, and real-time customer platforms."
        />
        <div className="mt-10">
          <FeaturedProjects />
        </div>
      </section>

      {/* Career timeline */}
      <section className="border-t border-border bg-secondary/20">
        <div className="container py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeading
              eyebrow="Trajectory"
              title="Career timeline"
              description="Twelve-plus years across cloud products, contact-center platforms, and enterprise Salesforce engineering."
            />
            <CareerTimeline variant="compact" />
          </div>
          <div className="mt-10 lg:ml-auto lg:w-[58%]">
            <Button asChild variant="outline">
              <Link href="/experience">
                See full experience
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
