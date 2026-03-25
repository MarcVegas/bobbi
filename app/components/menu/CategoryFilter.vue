<template>
  <div class="mb-8">
    <!-- Desktop/Tablet View -->
    <div class="hidden md:flex flex-wrap gap-3 justify-center">
      <button
        v-for="category in categories"
        :key="category.id"
        @click="$emit('select', category.id)"
        :class="[
          'px-6 py-3 rounded-full font-medium transition-all duration-300',
          selectedCategory === category.id
            ? 'bg-matcha-500 text-white shadow-elegant-lg'
            : 'bg-white text-gray-700 hover:bg-matcha-50 hover:text-matcha-600 shadow-elegant'
        ]"
      >
        {{ category.name }}
      </button>
    </div>

    <!-- Mobile View - Horizontal Scroll -->
    <div class="md:hidden">
      <div class="flex gap-3 overflow-x-auto scrollbar-hide pb-2 px-4 -mx-4">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="$emit('select', category.id)"
          :class="[
            'px-5 py-2.5 rounded-full font-medium whitespace-nowrap transition-all duration-300 flex-shrink-0',
            selectedCategory === category.id
              ? 'bg-matcha-500 text-white shadow-elegant'
              : 'bg-white text-gray-700 shadow-sm'
          ]"
        >
          {{ category.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

interface Category {
  id: MenuCategory;
  name: string;
  icon?: string;
}

interface Props {
  categories: Category[];
  selectedCategory: MenuCategory;
}

interface Emits {
  (e: 'select', category: MenuCategory): void;
}

defineProps<Props>();
defineEmits<Emits>();
</script>
