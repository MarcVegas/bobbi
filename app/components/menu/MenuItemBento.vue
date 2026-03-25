<template>
  <div class="card-elegant group cursor-pointer">
    <!-- Image -->
    <div class="relative aspect-[4/3] overflow-hidden bg-gray-100">
      <NuxtImg
        :src="item.imagePath"
        :alt="item.name"
        format="webp"
        quality="85"
        loading="lazy"
        sizes="sm:100vw md:50vw lg:33vw xl:25vw"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <!-- Badge -->
      <div v-if="item.badge" class="absolute top-3 left-3">
        <Badge :badge="item.badge" />
      </div>

      <!-- Favorite Button (Desktop) -->
      <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          @click.stop="toggleFavorite"
          class="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg"
          :aria-label="isFavorite ? 'Remove from favorites' : 'Add to favorites'"
        >
          <HeartIcon
            :class="[
              'w-5 h-5 transition-colors',
              isFavorite ? 'fill-matcha-500 text-matcha-500' : 'text-gray-600'
            ]"
          />
        </button>
      </div>
    </div>

    <!-- Content -->
    <div class="p-5">
      <!-- Name & Price -->
      <div class="flex items-start justify-between gap-3 mb-2">
        <h3 class="font-serif text-xl font-semibold text-elegant-black group-hover:text-matcha-600 transition-colors">
          {{ item.name }}
        </h3>
        <span v-if="item.price" class="font-semibold text-matcha-600 whitespace-nowrap">
          ${{ item.price.toFixed(2) }}
        </span>
      </div>

      <!-- Description -->
      <p class="text-sm text-gray-600 leading-relaxed line-clamp-2">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { HeartIcon } from '@heroicons/vue/24/outline';
import Badge from '~/components/common/Badge.vue';
import { useFavoritesStore } from '~/stores/favorites';

interface Props {
  item: MenuItem;
}

const props = defineProps<Props>();

const favoritesStore = useFavoritesStore();

const isFavorite = computed(() => favoritesStore.isFavorite(props.item.id));

const toggleFavorite = () => {
  favoritesStore.toggleFavorite(props.item.id);
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
