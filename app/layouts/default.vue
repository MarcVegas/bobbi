<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import Header from '~/components/layout/Header.vue';
import Footer from '~/components/layout/Footer.vue';

// Add smooth scroll behavior
onMounted(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.style.scrollBehavior = 'smooth';
  }
});
</script>
