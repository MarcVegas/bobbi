<template>
  <div class="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 animate-fade-in">
    <div
      v-for="item in items"
      :key="item.id"
      class="break-inside-avoid mb-6"
    >
      <MenuItemBento :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuItemBento from './MenuItemBento.vue';

interface Props {
  items: MenuItem[];
}

defineProps<Props>();
</script>
