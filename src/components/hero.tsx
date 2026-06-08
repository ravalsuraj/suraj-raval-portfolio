import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, MapPin } from "lucide-react";

import { site } from "@/lib/data";
import { withBasePath } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div className="container relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          {/* Copy */}
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex animate-fade-up items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
              </span>
              <MapPin className="size-3" />
              {site.location}
            </div>

            <h1
              className="animate-fade-up text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "60ms" }}
            >
              {site.name}
            </h1>

            <p
              className="mt-5 animate-fade-up text-xl font-medium tracking-tight text-foreground/90 sm:text-2xl"
              style={{ animationDelay: "120ms" }}
            >
              {site.headline}
            </p>

            <div
              className="mt-4 flex animate-fade-up flex-wrap gap-x-2 gap-y-1 font-mono text-sm text-muted-foreground"
              style={{ animationDelay: "160ms" }}
            >
              {site.disciplines.map((d, i) => (
                <span key={d} className="inline-flex items-center gap-2">
                  {i > 0 && <span className="text-border">/</span>}
                  {d}
                </span>
              ))}
            </div>

            <p
              className="mt-7 max-w-xl animate-fade-up text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
              style={{ animationDelay: "220ms" }}
            >
              {site.subheadline}
            </p>

            <div
              className="mt-9 flex animate-fade-up flex-wrap items-center gap-3"
              style={{ animationDelay: "280ms" }}
            >
              <Button asChild size="lg">
                <Link href="/resume">
                  <FileText className="size-4" />
                  View Resume
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Portrait */}
          <div
            className="animate-fade-up justify-self-center lg:justify-self-end"
            style={{ animationDelay: "200ms" }}
          >
            <div className="group relative">
              {/* offset frame accent */}
              <div
                className="absolute -inset-3 rounded-2xl border border-border/70 [mask-image:linear-gradient(to_bottom,black,transparent)]"
                aria-hidden
              />
              <div className="relative aspect-[4/5] w-[260px] overflow-hidden rounded-xl border border-border bg-muted shadow-sm sm:w-[300px] lg:w-[340px]">
                <Image
                  src={withBasePath(site.avatar)}
                  alt={site.avatarAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 300px, 340px"
                  className="object-cover"
                />
                {/* subtle bottom gradient for caption legibility on real photos */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden
                />
              </div>
              {/* mono tag chip */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-border bg-background px-3 py-1 font-mono text-[11px] tracking-tight text-muted-foreground shadow-sm">
                12+ yrs · payments · salesforce
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
