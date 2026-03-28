<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <Hero />

    <!-- Trust Bar -->
    <TrustBar />

    <!-- About Section -->
    <AboutSection id="about" />

    <!-- Marquee Banner -->
    <MarqueeBanner />

    <!-- Why We Are Different -->
    <WhyDifferent />

    <!-- Stats Bar -->
    <StatsBar id="store" />

    <!-- Products Grid -->
    <ProductsGrid />
  </div>
</template>

<script setup lang="ts">
import Hero from '~/components/sections/Hero.vue';
import TrustBar from '~/components/sections/TrustBar.vue';
import AboutSection from '~/components/sections/AboutSection.vue';
import MarqueeBanner from '~/components/sections/MarqueeBanner.vue';
import WhyDifferent from '~/components/sections/WhyDifferent.vue';
import StatsBar from '~/components/sections/StatsBar.vue';
import ProductsGrid from '~/components/sections/ProductsGrid.vue';

// Get site URL from runtime config or use a fallback
const siteUrl = 'https://bobbi-five.vercel.app/'; // Update with your actual domain
const ogImageUrl = `${siteUrl}/images/og_image.jpg`;

// SEO & OpenGraph
useHead({
  title: 'Bobbi - Matcha Slow Bar | Coffee Nook',
  meta: [
    // Standard meta tags
    {
      name: 'description',
      content: 'Discover the best matcha in your city at Bobbi - Matcha Slow Bar. Premium ingredients, nice ambiance, and affordable prices.',
    },
    {
      name: 'keywords',
      content: 'matcha, coffee, cafe, Bobbi, matcha latte, pastries, Ormoc City',
    },

    // OpenGraph meta tags
    {
      property: 'og:title',
      content: 'Bobbi - Matcha Slow Bar | Coffee Nook',
    },
    {
      property: 'og:description',
      content: 'Discover the best matcha in your city at Bobbi - Matcha Slow Bar. Premium ingredients, nice ambiance, and affordable prices.',
    },
    {
      property: 'og:image',
      content: ogImageUrl,
    },
    {
      property: 'og:image:width',
      content: '1200',
    },
    {
      property: 'og:image:height',
      content: '630',
    },
    {
      property: 'og:image:alt',
      content: 'Bobbi - Matcha Slow Bar',
    },
    {
      property: 'og:url',
      content: siteUrl,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:site_name',
      content: 'Bobbi',
    },

    // Twitter Card meta tags
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Bobbi - Matcha Slow Bar | Coffee Nook',
    },
    {
      name: 'twitter:description',
      content: 'Discover the best matcha in your city at Bobbi - Matcha Slow Bar. Premium ingredients, nice ambiance, and affordable prices.',
    },
    {
      name: 'twitter:image',
      content: ogImageUrl,
    },
    {
      name: 'twitter:image:alt',
      content: 'Bobbi - Matcha Slow Bar',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: siteUrl,
    },
  ],
});
</script>