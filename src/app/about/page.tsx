import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { site } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Highlights } from "@/components/highlights";
import { SkillProficiency } from "@/components/skill-proficiency";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: site.summary,
};

const focusAreas = [
  {
    title: "Enterprise payments",
    body: "Designing payment orchestration, reconciliation, and audit workflows where correctness and reliability are non-negotiable.",
  },
  {
    title: "Salesforce architecture",
    body: "Six-plus years architecting Lightning/LWC/Apex platforms and integrations — not just building features, but shaping how the platform scales.",
  },
  {
    title: "Full-stack JavaScript",
    body: "React, Node.js, Vue.js, and TypeScript across front-ends, services, and real-time systems — end to end.",
  },
  {
    title: "Developer tooling",
    body: "Creator of a VS Code extension with 12,000+ installs — I build the tools other engineers rely on daily.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Engineering across the intersection that matters"
        description="Senior Software Engineer and technical architect operating where enterprise payments, CRM architecture, full-stack JavaScript, and customer communication platforms overlap."
      />

      <section className="container py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-6 text-pretty text-base leading-relaxed text-foreground/85">
            <p>
              I&apos;m a Senior Software Engineer with{" "}
              <strong className="font-semibold text-foreground">
                12+ years
              </strong>{" "}
              of experience delivering enterprise software across CRM platforms,
              payment systems, omnichannel communications, customer engagement
              systems, cloud applications, and enterprise integrations.
            </p>
            <p>
              My strength is depth in the{" "}
              <strong className="font-semibold text-foreground">
                JavaScript ecosystem
              </strong>{" "}
              combined with{" "}
              <strong className="font-semibold text-foreground">
                Salesforce architecture
              </strong>
              , API design, full-stack application development, and technical
              leadership. I design scalable systems, lead technical initiatives,
              and carry complex platforms from concept through production.
            </p>
            <p>
              There are thousands of Salesforce developers. Far fewer engineers
              can credibly claim experience across enterprise payments, CRM
              architecture, full-stack JavaScript, developer tooling, and
              customer communication platforms. That intersection is where I do
              my best work.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="eyebrow mb-4">Currently</p>
              <p className="text-sm leading-relaxed text-foreground/80">
                Senior Salesforce Engineer — architecting enterprise
                applications and a payment platform, and shipping developer
                tooling used by thousands.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                {site.location}
              </p>
            </div>
            <Button asChild variant="outline" className="w-full">
              <Link href="/contact">
                Get in touch
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/20">
        <div className="container py-16 sm:py-20">
          <SectionHeading
            eyebrow="Focus areas"
            title="Where I create the most leverage"
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {focusAreas.map((f) => (
              <div key={f.title} className="bg-card p-6 sm:p-8">
                <h3 className="text-base font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 sm:py-20">
        <SectionHeading
          eyebrow="Proficiency"
          title="Skill proficiency"
          description="A self-assessed view of where I spend my time and where my depth is strongest."
        />
        <div className="mt-10 max-w-3xl">
          <SkillProficiency />
        </div>
      </section>

      <section className="border-t border-border bg-secondary/20">
        <div className="container py-16 sm:py-20">
          <SectionHeading
            eyebrow="Highlights"
            title="The short version"
          />
          <div className="mt-10">
            <Highlights />
          </div>
        </div>
      </section>
    </>
  );
}
