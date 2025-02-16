/** @type {import('next').NextConfig} */
const nextConfig = {
  // Outras configurações do Next.js
  // ...

  // Configuração para exportação estática
  output: "export",

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
