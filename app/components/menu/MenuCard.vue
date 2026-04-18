<template>
  <div class="card-elegant overflow-hidden max-w-lg mx-auto w-full">
    <!-- Image -->
    <div class="relative aspect-[3/4] overflow-hidden bg-gray-100">
      <NuxtImg
        v-if="item.imagePath"
        :src="item.imagePath"
        :alt="item.name"
        format="webp"
        quality="85"
        sizes="sm:100vw md:50vw lg:400px"
        class="w-full h-full object-cover"
      />

      <!-- Badge -->
      <div v-if="item.badge" class="absolute top-4 left-4">
        <Badge :badge="item.badge" />
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <!-- Name & Price -->
      <div class="flex items-start justify-between gap-3 mb-3">
        <h3 class="font-serif text-2xl font-semibold text-elegant-black">
          {{ item.name }}
        </h3>
        <span v-if="item.price" class="font-bold text-xl text-matcha-600 whitespace-nowrap">
          ${{ item.price.toFixed(2) }}
        </span>
      </div>

      <!-- Category -->
      <div class="mb-3">
        <span class="inline-block px-3 py-1 rounded-full text-xs font-medium bg-matcha-100 text-matcha-700">
          {{ categoryName }}
        </span>
      </div>

      <!-- Description -->
      <p class="text-gray-600 leading-relaxed">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Badge from '~/components/common/Badge.vue';

interface Props {
  item: MenuItem;
}

const props = defineProps<Props>();

const categoryName = computed(() => {
  return props.item.category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
});
</script>
