import { ref, onMounted, onUnmounted } from 'vue';

export function useParallax(speed: number = 0.5) {
  const offset = ref(0);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      offset.value = window.pageYOffset * speed;
    }
  };

  onMounted(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // Initial call
    }
  });

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', handleScroll);
    }
  });

  return {
    offset,
  };
}
