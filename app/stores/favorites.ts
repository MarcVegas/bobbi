import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useFavoritesStore = defineStore('favorites', () => {
  // Session-only favorites (no persistence)
  const favoriteIds = ref<Set<string>>(new Set());

  const isFavorite = (id: string) => {
    return favoriteIds.value.has(id);
  };

  const toggleFavorite = (id: string) => {
    if (favoriteIds.value.has(id)) {
      favoriteIds.value.delete(id);
    } else {
      favoriteIds.value.add(id);
    }
  };

  const addFavorite = (id: string) => {
    favoriteIds.value.add(id);
  };

  const removeFavorite = (id: string) => {
    favoriteIds.value.delete(id);
  };

  const clearFavorites = () => {
    favoriteIds.value.clear();
  };

  const favoritesCount = computed(() => favoriteIds.value.size);

  const getFavorites = computed(() => Array.from(favoriteIds.value));

  return {
    favoriteIds,
    isFavorite,
    toggleFavorite,
    addFavorite,
    removeFavorite,
    clearFavorites,
    favoritesCount,
    getFavorites,
  };
});
