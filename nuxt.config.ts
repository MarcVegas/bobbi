// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt','shadcn-nuxt','@nuxtjs/supabase','@nuxtjs/tailwindcss','@prisma/nuxt','@nuxt/image','@nuxt/seo','@peterbud/nuxt-query'],
  pages: true
})