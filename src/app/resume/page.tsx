import type { Metadata } from "next";
import { Mail } from "lucide-react";

import { site } from "@/lib/data";
import { ResumeDocument } from "@/components/resume-document";
import { PrintButton } from "@/components/print-button";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${site.name} — ${site.title}. ATS-friendly, printable, and downloadable as PDF.`,
};

export default function ResumePage() {
  return (
    <div className="bg-secondary/30 print:bg-white">
      {/* Toolbar — hidden when printing */}
      <div className="no-print border-b border-border bg-background">
        <div className="container flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow mb-1">Resume</p>
            <h1 className="text-xl font-semibold tracking-tight">
              {site.name}
            </h1>
            <p className="text-sm text-muted-foreground">
              ATS-friendly · single-column · selectable text
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline">
              <a href={`mailto:${site.email}`}>
                <Mail className="size-4" />
                Email me
              </a>
            </Button>
            <PrintButton label="Download PDF" />
          </div>
        </div>
      </div>

      <div className="container py-10 print:p-0">
        <ResumeDocument />

        <p className="no-print mx-auto mt-6 max-w-3xl text-center text-xs text-muted-foreground">
          Tip: click <strong className="font-medium">Download PDF</strong>, then
          choose <strong className="font-medium">&ldquo;Save as PDF&rdquo;</strong>{" "}
          in the print dialog. The export preserves selectable text for
          applicant-tracking systems.
        </p>
      </div>
    </div>
  );
}
