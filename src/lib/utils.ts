import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Prefix a `/public` asset path with the configured basePath.
 *
 * `next/image` with `images.unoptimized` (required for static export) does NOT
 * auto-prepend basePath to the `src`, so raw public assets must be wrapped.
 * `Link`/router-driven URLs are handled by Next and should NOT use this.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string) {
  if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) return path;
  return `${basePath}${path.startsWith("/") ? "" : "/"}${path}`;
}
