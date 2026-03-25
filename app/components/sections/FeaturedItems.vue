<template>
  <section class="section-padding bg-elegant-warmGray">
    <div class="container-elegant">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="font-serif text-heading-lg text-elegant-black mb-4">
          Featured Favorites
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Discover our most loved creations, handpicked for their exceptional taste and quality
        </p>
      </div>

      <!-- Featured Items Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="item in featuredItems"
          :key="item.id"
          class="card-elegant group cursor-pointer"
        >
          <!-- Image -->
          <div class="relative aspect-square overflow-hidden bg-gray-100">
            <NuxtImg
              :src="item.imagePath"
              :alt="item.name"
              format="webp"
              quality="85"
              loading="lazy"
              sizes="sm:100vw md:33vw"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
              <h3 class="font-serif text-2xl font-semibold text-elegant-black group-hover:text-matcha-600 transition-colors">
                {{ item.name }}
              </h3>
              <span v-if="item.price" class="font-bold text-lg text-matcha-600 whitespace-nowrap">
                ${{ item.price.toFixed(2) }}
              </span>
            </div>

            <!-- Description -->
            <p class="text-sm text-gray-600 leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { menuData } from '../../../data/menu';
import Badge from '~/components/common/Badge.vue';

const featuredItems = computed(() => {
  return menuData.items.filter(item => item.featured).slice(0, 3);
});
</script>
