/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Allows the placeholder /profile.svg to render via next/image.
    // Safe here because images are self-hosted from /public. Swapping in a
    // raster photo (profile.jpg/.png/.webp) works with or without this.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
