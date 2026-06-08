/**
 * Static-export config for GitHub Pages.
 *
 * GitHub Pages serves static files only, so the site is exported to `out/`.
 * Because the repo is a *project* page, it's served from a subpath
 * (https://<user>.github.io/<repo>/) — `basePath`/`assetPrefix` handle that.
 * The deploy workflow sets NEXT_PUBLIC_BASE_PATH; locally it's empty so
 * `npm run dev` / `npm run build` still work at the root.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  basePath,
  assetPrefix: basePath,
  // Pages serves /about/ -> /about/index.html, so emit directory-style routes.
  trailingSlash: true,
  images: {
    // Image Optimization needs a server; static export must use raw images.
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
