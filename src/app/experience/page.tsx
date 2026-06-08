import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { CareerTimeline } from "@/components/career-timeline";
import { SkillProficiency } from "@/components/skill-proficiency";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "12+ years across enterprise Salesforce engineering, contact-center platforms, payments, and cloud products.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Twelve years of shipping enterprise platforms"
        description="From cloud energy products in Philadelphia to contact-center platforms and enterprise Salesforce engineering — a track record of leading technical work from concept to production."
      />

      <section className="container py-16 sm:py-20">
        <div className="max-w-3xl">
          <CareerTimeline variant="full" />
        </div>
      </section>

      <section className="border-t border-border bg-secondary/20">
        <div className="container py-16 sm:py-20">
          <SectionHeading
            eyebrow="Depth"
            title="Skill proficiency"
            description="Where my experience concentrates across the stack."
          />
          <div className="mt-10 max-w-3xl">
            <SkillProficiency />
          </div>
        </div>
      </section>
    </>
  );
}
