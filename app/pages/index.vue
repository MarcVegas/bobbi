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

// SEO
useHead({
  title: 'Bobbi - Matcha Slow Bar | Coffee Nook',
  meta: [
    {
      name: 'description',
      content: 'Discover the best matcha in your city at Bobbi - Matcha Slow Bar. Premium ingredients, nice ambiance, and affordable prices.',
    },
  ],
});
</script>