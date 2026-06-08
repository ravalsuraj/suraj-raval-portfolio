import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PenLine } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on enterprise architecture, payments, Salesforce, and full-stack JavaScript. Coming soon.",
};

const drafts = [
  "Designing idempotent payment workflows that survive retries",
  "Salesforce LWC performance: where the milliseconds actually go",
  "Building a VS Code extension developers actually keep installed",
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="Notes on building enterprise systems"
        description="Essays on architecture, payments, Salesforce, and full-stack JavaScript. This section is a placeholder — ready to wire to MDX or a CMS."
      />

      <section className="container py-16 sm:py-20">
        <div className="mx-auto max-w-2xl rounded-lg border border-dashed border-border bg-card p-10 text-center">
          <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-secondary text-muted-foreground">
            <PenLine className="size-5" />
          </span>
          <h2 className="mt-5 text-xl font-semibold tracking-tight">
            Coming soon
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            Drop in MDX files or connect a CMS and these placeholders become a
            full blog with the same typography and layout.
          </p>

          <ul className="mx-auto mt-8 max-w-md space-y-2 text-left">
            {drafts.map((d) => (
              <li
                key={d}
                className="flex items-center justify-between gap-3 rounded-md border border-border bg-background px-4 py-3 text-sm"
              >
                <span className="text-foreground/80">{d}</span>
                <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
                  draft
                </span>
              </li>
            ))}
          </ul>

          <Button asChild variant="outline" className="mt-8">
            <Link href="/projects">
              Explore projects instead
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
