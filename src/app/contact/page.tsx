import type { Metadata } from "next";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

import { site, socials } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — open to senior engineering and technical architecture roles.`,
};

const iconFor: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something credible"
        description="Open to senior software engineering and technical architecture roles — particularly at the intersection of payments, platforms, and JavaScript. Reach out and I'll get back to you."
      />

      <section className="container py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm />

          <div className="space-y-4">
            <p className="eyebrow">Elsewhere</p>
            <div className="overflow-hidden rounded-lg border border-border">
              {socials.map((s, i) => {
                const Icon = iconFor[s.label] ?? Mail;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className={`group flex items-center justify-between gap-4 bg-card p-5 transition-colors hover:bg-accent/40 ${
                      i !== 0 ? "border-t border-border" : ""
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-md border border-border bg-background text-muted-foreground group-hover:text-foreground">
                        <Icon className="size-4" />
                      </span>
                      <span>
                        <span className="block text-sm font-medium">
                          {s.label}
                        </span>
                        <span className="block font-mono text-xs text-muted-foreground">
                          {s.handle}
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </a>
                );
              })}
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Social links and the contact form are placeholders — update the
              hrefs in{" "}
              <code className="rounded bg-secondary px-1 py-0.5 font-mono text-[11px]">
                src/lib/data.ts
              </code>{" "}
              and wire the form to a backend when ready.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
