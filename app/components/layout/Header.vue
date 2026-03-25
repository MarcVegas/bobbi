<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-elegant">
    <div class="container-elegant">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center group">
          <h1 class="font-serif text-4xl font-bold text-matcha-500 tracking-tight transition-colors group-hover:text-matcha-600">
            Bobbi
          </h1>
        </NuxtLink>

        <!-- Share Button -->
        <button
          @click="isShareModalOpen = true"
          class="btn-elegant flex items-center gap-2"
        >
          <ShareIcon class="w-5 h-5" />
          <span class="hidden sm:inline">Share</span>
        </button>
      </div>
    </div>

    <!-- Share Modal -->
    <ShareModal v-model:open="isShareModalOpen" />
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ShareIcon } from '@heroicons/vue/24/outline';
import ShareModal from './ShareModal.vue';

const isShareModalOpen = ref(false);
</script>
