<template>
  <div class="min-h-screen">
    <!-- Hero Section with Parallax -->
    <Hero />

    <!-- Featured Items Section -->
    <FeaturedItems />

    <!-- Menu Section -->
    <section id="menu" class="section-padding bg-white">
      <div class="container-elegant">
        <!-- Section Title -->
        <div class="text-center mb-12">
          <h2 class="font-serif text-heading-lg text-elegant-black mb-4">
            Our Menu
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted selection of matcha drinks, premium coffee, and artisanal pastries
          </p>
        </div>

        <!-- Layout Toggle Button (Mobile Only) -->
        <LayoutToggle
          v-if="isMobile"
          :current-mode="currentMode"
          @toggle="toggleLayout"
        />

        <!-- Category Filter -->
        <CategoryFilter
          :categories="menuData.categories"
          :selected-category="selectedCategory"
          @select="handleCategorySelect"
        />

        <!-- Menu Layout - Dynamic based on mode -->
        <div v-if="currentMode === 'bento' || !isMobile">
          <BentoLayout :items="filteredItems" />
        </div>

        <div v-else class="flex justify-center">
          <CardSwipeLayout :items="filteredItems" />
        </div>
      </div>
    </section>

    <!-- Cafe Info Section -->
    <section class="section-padding bg-elegant-warmGray">
      <div class="container-elegant">
        <div class="text-center mb-12">
          <h2 class="font-serif text-heading-lg text-elegant-black mb-4">
            Visit Us
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Come experience the warmth and elegance of Bobbi Cafe
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Location -->
          <div class="text-center">
            <div class="w-16 h-16 rounded-full bg-matcha-500 flex items-center justify-center mx-auto mb-4">
              <MapPinIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="font-serif text-xl font-semibold mb-2">Location</h3>
            <p class="text-gray-600">{{ CAFE_INFO.address }}</p>
          </div>

          <!-- Hours -->
          <div class="text-center">
            <div class="w-16 h-16 rounded-full bg-matcha-500 flex items-center justify-center mx-auto mb-4">
              <ClockIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="font-serif text-xl font-semibold mb-2">Hours</h3>
            <p class="text-gray-600 text-sm">{{ CAFE_INFO.hours.weekday }}</p>
            <p class="text-gray-600 text-sm">{{ CAFE_INFO.hours.weekend }}</p>
          </div>

          <!-- Contact -->
          <div class="text-center">
            <div class="w-16 h-16 rounded-full bg-matcha-500 flex items-center justify-center mx-auto mb-4">
              <PhoneIcon class="w-8 h-8 text-white" />
            </div>
            <h3 class="font-serif text-xl font-semibold mb-2">Contact</h3>
            <p class="text-gray-600 text-sm">{{ CAFE_INFO.phone }}</p>
            <p class="text-gray-600 text-sm">{{ CAFE_INFO.email }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { menuData } from '../../data/menu';
import { useLayoutMode } from '~/composables/useLayoutMode';
import { MapPinIcon, ClockIcon, PhoneIcon } from '@heroicons/vue/24/outline';
import Hero from '~/components/sections/Hero.vue';
import FeaturedItems from '~/components/sections/FeaturedItems.vue';
import CategoryFilter from '~/components/menu/CategoryFilter.vue';
import BentoLayout from '~/components/menu/BentoLayout.vue';
import CardSwipeLayout from '~/components/menu/CardSwipeLayout.vue';
import LayoutToggle from '~/components/menu/LayoutToggle.vue';

// SEO
useHead({
  title: 'Menu - Bobbi Cafe | Elegant Matcha & Coffee',
  meta: [
    {
      name: 'description',
      content: 'Browse our elegant selection of matcha drinks, premium coffee, and artisanal pastries at Bobbi Cafe.',
    },
  ],
});

// Layout mode
const { currentMode, isMobile, toggleLayout } = useLayoutMode();

// State
const selectedCategory = ref<MenuCategory>('all');

// Computed
const filteredItems = computed(() => {
  if (selectedCategory.value === 'all') {
    return menuData.items;
  }
  return menuData.items.filter(item => item.category === selectedCategory.value);
});

// Methods
const handleCategorySelect = (category: MenuCategory) => {
  selectedCategory.value = category;
};
</script>