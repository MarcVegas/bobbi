<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
    <div class="container-elegant">
      <div class="flex items-center justify-between h-20">
        <!-- Logo Left -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-full flex items-center justify-center" style="background: var(--color-primary);">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 21h8v-2H2v2zm2-10h4v8H4v-8zm14 0c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2s-2 .9-2 2v4c0 1.1.9 2 2 2zm-6 10h8v-2h-8v2zm2-18c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
            </svg>
          </div>
          <span class="font-bold text-xl tracking-tight transition-colors" style="color: var(--color-primary);">
            Bean Haven Café
          </span>
        </NuxtLink>

        <!-- Navigation Links Center -->
        <nav class="hidden md:flex items-center gap-8">
          <a href="#about" class="text-sm font-medium hover:opacity-70 transition-opacity" style="color: var(--color-text-dark);">
            About Us
          </a>
          <a href="#products" class="text-sm font-medium hover:opacity-70 transition-opacity" style="color: var(--color-text-dark);">
            Our Product
          </a>
          <a href="#store" class="text-sm font-medium hover:opacity-70 transition-opacity" style="color: var(--color-text-dark);">
            Our Store
          </a>
          <a href="#blog" class="text-sm font-medium hover:opacity-70 transition-opacity" style="color: var(--color-text-dark);">
            Blog
          </a>
        </nav>

        <!-- CTA Button Right -->
        <button
          @click="isShareModalOpen = true"
          class="btn-primary flex items-center gap-2"
        >
          <span>Order Now</span>
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
