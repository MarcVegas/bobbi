<template>
  <section class="py-6 overflow-hidden" style="background: var(--color-accent);">
    <div class="flex items-center gap-12 animate-marquee whitespace-nowrap">
      <!-- Repeat pattern multiple times for seamless loop -->
      <template v-for="i in 4" :key="i">
        <div class="flex items-center gap-3">
          <svg class="w-8 h-8" style="color: var(--color-text-dark);" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2 21h8v-2H2v2zm2-10h4v8H4v-8zm14 0c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2s-2 .9-2 2v4c0 1.1.9 2 2 2zm-6 10h8v-2h-8v2zm2-18c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
          </svg>
          <span class="font-bold text-xl" style="color: var(--color-text-dark);">Dive into Our Café</span>
        </div>

        <div class="flex items-center gap-3 ml-12">
          <svg class="w-8 h-8" style="color: var(--color-text-dark);" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          </svg>
          <span class="font-bold text-xl" style="color: var(--color-text-dark);">Perk Up Your Café Experience</span>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
// Marquee banner with scrolling text
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
</style>
