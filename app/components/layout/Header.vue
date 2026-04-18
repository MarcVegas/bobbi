<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
    <div class="container-elegant">
      <div class="flex items-center justify-between h-20">
        <!-- Logo Left -->
        <NuxtLink to="/" class="flex items-center group">
          <NuxtImg
            src="/images/bobbi_text_logo.png"
            alt="Bobbi"
            class="h-10 w-auto transition-opacity group-hover:opacity-80"
          />
        </NuxtLink>

        <!-- Navigation Links Center -->
        <nav class="hidden md:flex items-center gap-8">
          <a href="#about" class="text-sm font-medium hover:opacity-70 transition-opacity" style="color: var(--color-text-dark);">
            About Us
          </a>
          <a href="#products" class="text-sm font-medium hover:opacity-70 transition-opacity" style="color: var(--color-text-dark);">
            Our Product
          </a>
          <a href="#menu" class="text-sm font-medium hover:opacity-70 transition-opacity" style="color: var(--color-text-dark);">
            Our Menu
          </a>
          <a href="#store" class="text-sm font-medium hover:opacity-70 transition-opacity" style="color: var(--color-text-dark);">
            Our Store
          </a>
        </nav>

        <!-- CTA Button Right -->
        <button
          @click="isShareModalOpen = true"
          class="btn-primary flex items-center gap-2"
        >
          <span>Share Menu</span>
        </button>
      </div>
    </div>

    <!-- Share Modal -->
    <ShareModal v-model:open="isShareModalOpen" />
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ShareModal from './ShareModal.vue';

const isShareModalOpen = ref(false);
</script>
