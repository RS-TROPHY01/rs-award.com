const nextConfig = {
  eslint: {
    dirs: ["."],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: "",
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  env: {
    DATABASE_URL: "file:./mydatabase.db",
    NEXTAUTH_SECRET: "mu+exEGiYXBp4PT8oX0DRCp3d89VReo4hAp7HmqTJAI="
  },
};
module.exports = nextConfig;
