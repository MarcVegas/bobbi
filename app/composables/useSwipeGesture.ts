import { ref, computed } from 'vue';
import { animate } from 'motion';
import type { SwipeGesture } from '~/shared/types/layout';

export function useSwipeGesture() {
  const gesture = ref<SwipeGesture>({
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    deltaX: 0,
    deltaY: 0,
  });

  const isSwiping = ref(false);
  const swipeThreshold = 100; // pixels

  const swipeDirection = computed(() => {
    if (Math.abs(gesture.value.deltaX) < swipeThreshold) return 'none';
    return gesture.value.deltaX > 0 ? 'right' : 'left';
  });

  const handleTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0];
    gesture.value.startX = touch.clientX;
    gesture.value.startY = touch.clientY;
    gesture.value.currentX = touch.clientX;
    gesture.value.currentY = touch.clientY;
    isSwiping.value = true;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isSwiping.value) return;

    const touch = e.touches[0];
    gesture.value.currentX = touch.clientX;
    gesture.value.currentY = touch.clientY;
    gesture.value.deltaX = gesture.value.currentX - gesture.value.startX;
    gesture.value.deltaY = gesture.value.currentY - gesture.value.startY;
  };

  const handleTouchEnd = () => {
    const direction = swipeDirection.value;
    isSwiping.value = false;

    // Reset gesture
    gesture.value = {
      startX: 0,
      startY: 0,
      currentX: 0,
      currentY: 0,
      deltaX: 0,
      deltaY: 0,
    };

    return direction;
  };

  const animateCardSwipe = (element: HTMLElement, direction: 'left' | 'right') => {
    const xValue = direction === 'left' ? -150 : 150;
    const rotation = direction === 'left' ? -20 : 20;

    return animate(
      element,
      {
        x: `${xValue}%`,
        rotate: rotation,
        opacity: 0,
      },
      {
        duration: 0.3,
        easing: 'ease-out',
      }
    );
  };

  const resetCard = (element: HTMLElement) => {
    return animate(
      element,
      {
        x: 0,
        rotate: 0,
        opacity: 1,
      },
      {
        duration: 0.2,
        easing: 'ease-out',
      }
    );
  };

  return {
    gesture,
    isSwiping,
    swipeDirection,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    animateCardSwipe,
    resetCard,
  };
}
