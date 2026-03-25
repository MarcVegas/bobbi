<template>
  <button
    @click="$emit('toggle')"
    class="fixed top-24 left-1/2 -translate-x-1/2 z-40 md:hidden btn-elegant flex items-center gap-2 shadow-elegant-lg"
    :aria-label="`Switch to ${currentMode === 'bento' ? 'card' : 'grid'} view`"
  >
    <component
      :is="currentMode === 'bento' ? SquaresFourIcon : StackIcon"
      class="w-5 h-5"
    />
    <span class="text-sm font-medium">
      {{ currentMode === 'bento' ? 'Card View' : 'Grid View' }}
    </span>
  </button>
</template>

<script setup lang="ts">
import { Squares2X2Icon as SquaresFourIcon, QueueListIcon as StackIcon } from '@heroicons/vue/24/outline';
import type { LayoutMode } from '~/shared/types/layout';

interface Props {
  currentMode: LayoutMode;
}

interface Emits {
  (e: 'toggle'): void;
}

defineProps<Props>();
defineEmits<Emits>();
</script>
