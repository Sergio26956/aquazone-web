module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
    formats: ['image/webp'],
    minimumCacheTTL: 86400
  },
  experimental: {
    scrollRestoration: true // ✅ Configuración válida
  }
};
