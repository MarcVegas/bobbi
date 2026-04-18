// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@pinia/nuxt', 'shadcn-nuxt', '@nuxt/image', '@nuxtjs/google-fonts', '@peterbud/nuxt-query'],

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
      'Playfair Display': { ital: [400] },
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
        { name: 'theme-color', content: '#1A3A2A' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Bobbi' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:image', content: 'https://bobbicafe.com/images/og_image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@BobbicafeOrmoc' },
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

  // Sanity CMS — Nuxt maps NUXT_PUBLIC_* env vars to runtimeConfig.public automatically
  runtimeConfig: {
    public: {
      sanityProjectId: 'qetxhdwg',
      sanityDataset: 'production',
      sanityApiVersion: '2024-01-01',
    },
  },

  // nuxt-query (TanStack Query) config
  nuxtQuery: {
    autoImports: ['useQuery'],
    queryClientOptions: {
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60 * 5,
          refetchOnWindowFocus: false,
        },
      },
    },
  },
})