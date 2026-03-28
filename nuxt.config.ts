// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@pinia/nuxt', 'shadcn-nuxt', '@nuxt/image', '@nuxtjs/google-fonts'],

  pages: true,

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },

  // Google Fonts configuration
  googleFonts: {
    families: {
      'Oswald': [700, 900],
      'DM Sans': [400, 500, 700],
    },
    display: 'swap',
    preload: true,
    prefetch: true,
    preconnect: true,
  },

  // SEO Configuration
  site: {
    url: 'https://bobbicafe.com', // Update with actual domain
    name: 'Bobbi Cafe',
    description: 'Experience the finest matcha drinks, coffee, and pastries at Bobbi Cafe. A classy, elegant cafe serving premium beverages and delicious treats.',
    defaultLocale: 'en',
  },

  // App Head defaults
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Bobbi Cafe - Elegant Matcha & Coffee',
      meta: [
        { name: 'description', content: 'Experience the finest matcha drinks, coffee, and pastries at Bobbi Cafe.' },
        { name: 'theme-color', content: '#5aa84a' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Bobbi Cafe' },
        { property: 'og:locale', content: 'en_US' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  // Image optimization
  image: {
    quality: 85,
    formats: ['webp', 'avif', 'jpeg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },

  // OG Image configuration
  ogImage: {
    enabled: false, // Disable for now to avoid prompts
  },
})