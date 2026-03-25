<template>
  <div class="relative h-[700px] w-full max-w-lg mx-auto">
    <!-- Card Stack -->
    <div class="relative w-full h-full">
      <div
        v-for="(item, index) in visibleCards"
        :key="item.id"
        :ref="(el) => setCardRef(el as HTMLElement, index)"
        class="absolute inset-0 transition-transform duration-200"
        :style="getCardStyle(index)"
        @touchstart="index === 0 ? handleTouchStart($event) : null"
        @touchmove="index === 0 ? handleTouchMove($event) : null"
        @touchend="index === 0 ? onTouchEnd() : null"
      >
        <MenuCard :item="item" class="h-full" />
      </div>
    </div>

    <!-- Favorite Button (centered at bottom) -->
    <div v-if="currentCard" class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
      <FavoriteButton
        :item-id="currentCard.id"
        :is-favorite="isFavorite(currentCard.id)"
        @toggle="handleFavorite"
      />
    </div>

    <!-- Swipe Indicators -->
    <div class="absolute top-4 left-4 right-4 flex justify-between pointer-events-none">
      <div
        class="px-4 py-2 bg-red-500 text-white font-bold rounded-lg transform -rotate-12 transition-opacity"
        :class="swipeDirection === 'left' ? 'opacity-100' : 'opacity-0'"
      >
        SKIP
      </div>
      <div
        class="px-4 py-2 bg-matcha-500 text-white font-bold rounded-lg transform rotate-12 transition-opacity"
        :class="swipeDirection === 'right' ? 'opacity-100' : 'opacity-0'"
      >
        LIKE
      </div>
    </div>

    <!-- Card Counter -->
    <div class="absolute bottom-32 left-1/2 -translate-x-1/2 text-sm text-gray-500">
      {{ currentIndex + 1 }} / {{ items.length }}
    </div>

    <!-- Swipe Indicator (shows on first card only) -->
    <div v-if="currentIndex === 0" class="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none">
      <div class="flex items-center justify-between px-8 animate-pulse">
        <!-- Left Arrow -->
        <div class="flex flex-col items-center gap-2 opacity-60">
          <div class="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-elegant flex items-center justify-center">
            <svg class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span class="text-xs font-medium text-gray-600 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">Swipe</span>
        </div>

        <!-- Right Arrow -->
        <div class="flex flex-col items-center gap-2 opacity-60">
          <div class="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-elegant flex items-center justify-center">
            <svg class="w-6 h-6 text-matcha-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <span class="text-xs font-medium text-matcha-600 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">Swipe</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useSwipeGesture } from '~/composables/useSwipeGesture';
import { useFavoritesStore } from '~/stores/favorites';
import type { MenuItem } from '~/shared/types/menu';
import MenuCard from './MenuCard.vue';
import FavoriteButton from './FavoriteButton.vue';

interface Props {
  items: MenuItem[];
}

const props = defineProps<Props>();

const favoritesStore = useFavoritesStore();
const { isFavorite, toggleFavorite } = favoritesStore;

const currentIndex = ref(0);
const cardRefs = ref<(HTMLElement | null)[]>([]);

const {
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
  swipeDirection,
  animateCardSwipe,
} = useSwipeGesture();

const visibleCards = computed(() => {
  const maxVisible = 3;
  return props.items.slice(currentIndex.value, currentIndex.value + maxVisible);
});

const currentCard = computed(() => props.items[currentIndex.value]);

const setCardRef = (el: HTMLElement | null, index: number) => {
  if (el) {
    cardRefs.value[index] = el;
  }
};

const getCardStyle = (index: number) => {
  const rotation = index * 2; // 2 degrees per card
  const yOffset = index * 12; // 12px per card
  const scale = 1 - (index * 0.05); // Slight scale reduction

  return {
    transform: `translateY(${yOffset}px) rotate(${rotation}deg) scale(${scale})`,
    zIndex: 10 - index,
  };
};

const handleSwipe = async (direction: 'left' | 'right') => {
  const cardElement = cardRefs.value[0];
  if (!cardElement) return;

  // Animate card out
  await animateCardSwipe(cardElement, direction);

  // Move to next card
  currentIndex.value++;

  // If we've reached the end, loop back
  if (currentIndex.value >= props.items.length) {
    currentIndex.value = 0;
  }
};

const handleFavorite = () => {
  if (currentCard.value) {
    toggleFavorite(currentCard.value.id);
  }
};

const onTouchEnd = async () => {
  const direction = handleTouchEnd();
  if (direction === 'left' || direction === 'right') {
    await handleSwipe(direction);
  }
};
</script>
