/** @type {import('next').NextConfig} */
module.exports = {
    output: "standalone",
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      // ignoreBuildErrors: true,
    },
    images: {
      domains: ["gementar.com", "gementar.dev"],
    },
    // secret: process.env.NEXTAUTH_SECRET,
  };