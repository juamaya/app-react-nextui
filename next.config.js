/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  basePath: "/app-react-nextui", // 👈 subcarpeta del repo
  assetPrefix: "/app-react-nextui/", // 👈 para que cargue correctamente los JS/CSS

  trailingSlash: true,
};

module.exports = nextConfig;
