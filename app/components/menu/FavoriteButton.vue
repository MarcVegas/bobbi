<template>
  <button
    @click="handleClick"
    class="w-16 h-16 rounded-full bg-white shadow-elegant-lg flex items-center justify-center hover:shadow-card transition-all duration-300"
    :class="{ 'animate-heart-bounce': isAnimating }"
    :aria-label="isFavorite ? 'Remove from favorites' : 'Add to favorites'"
  >
    <HeartIcon
      :class="[
        'w-8 h-8 transition-all duration-300',
        isFavorite ? 'fill-matcha-500 text-matcha-500 scale-110' : 'text-gray-400'
      ]"
    />
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { HeartIcon } from '@heroicons/vue/24/outline';

interface Props {
  itemId: string | undefined;
  isFavorite: boolean;
}

interface Emits {
  (e: 'toggle'): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const isAnimating = ref(false);

const handleClick = () => {
  if (!props.itemId) return;

  // Trigger animation
  isAnimating.value = true;

  // Emit toggle event
  emit('toggle');

  // Reset animation after it completes
  setTimeout(() => {
    isAnimating.value = false;
  }, 600);
};
</script>
