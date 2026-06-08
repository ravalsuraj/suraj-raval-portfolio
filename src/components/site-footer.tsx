import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import { navItems, site, socials } from "@/lib/data";

const iconFor: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

export function SiteFooter() {
  return (
    <footer className="no-print border-t border-border">
      <div className="container py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="flex size-7 items-center justify-center rounded-md bg-primary font-mono text-xs font-semibold text-primary-foreground">
                SR
              </span>
              <span className="text-sm font-semibold tracking-tight">
                {site.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {site.title} — {site.brand}.
            </p>
            <p className="text-sm text-muted-foreground">{site.location}</p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            <nav className="flex flex-col gap-2.5">
              <p className="eyebrow mb-1">Navigate</p>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-2.5">
              <p className="eyebrow mb-1">Connect</p>
              {socials.map((s) => {
                const Icon = iconFor[s.label] ?? Mail;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Icon className="size-4" />
                    {s.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-mono">Built with Next.js · TypeScript · Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
