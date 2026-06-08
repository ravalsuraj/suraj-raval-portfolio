import { Mail, MapPin, Globe } from "lucide-react";

import {
  education,
  experience,
  projects,
  site,
  skillCategories,
} from "@/lib/data";

/**
 * Single-column, ATS-friendly resume document.
 *
 * Renders as real selectable text (no images/columns) so applicant-tracking
 * systems can parse it, and prints cleanly to A4 via the `@media print`
 * rules in globals.css. Use the page's "Download PDF" button → "Save as PDF".
 */
export function ResumeDocument() {
  return (
    <article className="resume-sheet mx-auto max-w-3xl rounded-lg border border-border bg-card p-8 text-foreground shadow-sm sm:p-12 print:p-0">
      {/* Header */}
      <header className="border-b border-border pb-5">
        <h1 className="text-3xl font-bold tracking-tight">{site.name}</h1>
        <p className="mt-1 text-base font-medium text-foreground/80">
          {site.title}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          JavaScript · Salesforce Architecture · Enterprise Platforms · Payments
        </p>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" /> {site.location}
          </span>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-1.5 hover:text-foreground"
          >
            <Mail className="size-3.5" /> {site.email}
          </a>
          <a
            href={site.url}
            className="inline-flex items-center gap-1.5 hover:text-foreground"
          >
            <Globe className="size-3.5" /> {site.url.replace("https://", "")}
          </a>
        </div>
      </header>

      <ResumeSection title="Professional Summary">
        <p className="text-sm leading-relaxed text-foreground/85">
          {site.summary}
        </p>
      </ResumeSection>

      <ResumeSection title="Core Skills">
        <dl className="space-y-2.5">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="grid gap-1 sm:grid-cols-[170px_1fr]">
              <dt className="text-sm font-semibold">{cat.title}</dt>
              <dd className="text-sm text-foreground/80">
                {cat.skills.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      </ResumeSection>

      <ResumeSection title="Experience">
        <div className="space-y-5">
          {experience.map((item) => (
            <div key={item.role + item.company} className="avoid-break">
              <div className="flex flex-col justify-between gap-0.5 sm:flex-row sm:items-baseline">
                <h3 className="text-sm font-bold">
                  {item.role}
                  <span className="font-normal text-foreground/70">
                    {" "}
                    — {item.company}
                    {item.location ? `, ${item.location}` : ""}
                  </span>
                </h3>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                  {item.period}
                </span>
              </div>
              <ul className="mt-2 space-y-1.5">
                {item.responsibilities.map((r) => (
                  <li
                    key={r}
                    className="flex gap-2 text-sm leading-relaxed text-foreground/85"
                  >
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-foreground/50" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="Selected Projects">
        <div className="space-y-3">
          {projects.map((p) => (
            <div key={p.slug} className="avoid-break text-sm">
              <p className="font-semibold">
                {p.title}
                {p.metric && (
                  <span className="font-normal text-muted-foreground">
                    {" "}
                    — {p.metric}
                  </span>
                )}
              </p>
              <p className="text-foreground/80">{p.description}</p>
              <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                {p.stack.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </ResumeSection>

      <ResumeSection title="Education">
        <div className="space-y-2">
          {education.map((e) => (
            <div
              key={e.degree + e.field}
              className="flex flex-col justify-between gap-0.5 sm:flex-row sm:items-baseline"
            >
              <p className="text-sm">
                <span className="font-semibold">
                  {e.degree}, {e.field}
                </span>
                <span className="text-foreground/70"> — {e.institution}</span>
              </p>
              <span className="shrink-0 text-xs text-muted-foreground">
                {e.location}
              </span>
            </div>
          ))}
        </div>
      </ResumeSection>
    </article>
  );
}

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-6">
      <h2 className="mb-3 border-b border-border pb-1.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}
