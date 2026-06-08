"use client";

import { Download, Printer } from "lucide-react";

import { Button } from "@/components/ui/button";

interface PrintButtonProps {
  label?: string;
  variant?: "default" | "outline";
  icon?: "print" | "download";
}

/**
 * Triggers the browser's native print dialog. Combined with the `@media print`
 * rules in globals.css this produces a clean, single-column, selectable-text
 * (ATS-friendly) PDF when the user chooses "Save as PDF".
 */
export function PrintButton({
  label = "Download PDF",
  variant = "default",
  icon = "download",
}: PrintButtonProps) {
  const Icon = icon === "download" ? Download : Printer;
  return (
    <Button variant={variant} onClick={() => window.print()}>
      <Icon className="size-4" />
      {label}
    </Button>
  );
}
