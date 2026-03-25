import { ref, computed, onMounted, onUnmounted } from 'vue';
import type { LayoutMode } from '~/shared/types/layout';

export function useLayoutMode() {
  const currentMode = ref<LayoutMode>('bento');
  const isMobile = ref(false);

  const checkMobile = () => {
    if (typeof window !== 'undefined') {
      isMobile.value = window.innerWidth < 768; // tablet breakpoint

      // Auto-set to cards on mobile if preference not set
      if (isMobile.value && currentMode.value === 'bento') {
        const savedPreference = localStorage.getItem('layoutPreference') as LayoutMode;
        if (!savedPreference) {
          currentMode.value = 'cards';
        }
      }
    }
  };

  const toggleLayout = () => {
    currentMode.value = currentMode.value === 'bento' ? 'cards' : 'bento';
    // Save preference
    if (typeof window !== 'undefined') {
      localStorage.setItem('layoutPreference', currentMode.value);
    }
  };

  const setLayout = (mode: LayoutMode) => {
    currentMode.value = mode;
    if (typeof window !== 'undefined') {
      localStorage.setItem('layoutPreference', mode);
    }
  };

  onMounted(() => {
    // Check saved preference
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('layoutPreference') as LayoutMode;
      if (savedMode) {
        currentMode.value = savedMode;
      }

      checkMobile();
      window.addEventListener('resize', checkMobile);
    }
  });

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', checkMobile);
    }
  });

  const layoutIcon = computed(() => {
    return currentMode.value === 'bento' ? 'grid' : 'layers';
  });

  return {
    currentMode,
    isMobile,
    toggleLayout,
    setLayout,
    layoutIcon,
  };
}
