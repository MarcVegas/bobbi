<template>
  <span
    v-if="badge"
    :class="badgeClasses"
    class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide"
  >
    {{ badgeText }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  badge: MenuBadge;
}

const props = defineProps<Props>();

const badgeText = computed(() => {
  if (!props.badge) return '';
  return props.badge.replace('-', ' ');
});

const badgeClasses = computed(() => {
  switch (props.badge) {
    case 'best-seller':
      return 'bg-matcha-500 text-white';
    case 'new':
      return 'bg-elegant-gold text-white';
    case 'popular':
      return 'bg-matcha-200 text-matcha-800';
    default:
      return '';
  }
});
</script>
