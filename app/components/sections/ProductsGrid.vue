<template>
  <section class="section-padding" style="background: var(--color-cream);" id="menu">
    <div class="container-elegant">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="section-title mb-4" style="color: var(--color-text-dark);">
          Our Menu
        </h2>
        <p class="body-text" style="color: var(--color-text-muted);">
          Discover our carefully crafted selection of matcha drinks and delicious pastries
        </p>
      </div>

      <!-- Drinks Section -->
      <div class="mb-12">
        <div class="flex items-center justify-between mb-8">
          <h3 class="text-2xl font-bold" style="color: var(--color-text-dark);">Matcha Drinks</h3>
          <!-- Desktop Navigation Buttons -->
          <div class="hidden md:flex gap-2">
            <button
              @click="scrollDrinks('left')"
              class="p-2 rounded-full bg-white hover:bg-gray-100 shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="!canScrollDrinksLeft"
              aria-label="Scroll drinks left"
            >
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              @click="scrollDrinks('right')"
              class="p-2 rounded-full bg-white hover:bg-gray-100 shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="!canScrollDrinksRight"
              aria-label="Scroll drinks right"
            >
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <!-- Mobile Swipe Hint -->
        <div class="md:hidden text-center mb-4">
          <p class="text-sm text-gray-500 flex items-center justify-center gap-2">
            <svg class="w-5 h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Swipe to browse
            <svg class="w-5 h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </p>
        </div>
        <div ref="drinksContainer" class="overflow-x-auto pb-4 scrollbar-hide scroll-smooth">
          <div class="flex gap-6 min-w-max">
            <!-- Drink 1 -->
            <div class="menu-card-large">
              <div class="bg-oval-large">
                <NuxtImg
                  src="/images/menu/drink1.jpg"
                  alt="Classic Matcha Latte"
                  class="w-full h-full object-cover"
                />
              </div>
              <p class="type-label">Signature</p>
              <h3 class="name-large" style="color: var(--color-text-dark);">Classic Matcha Latte</h3>
              <p class="price-large" style="color: var(--color-primary);">₱150</p>
            </div>

            <!-- Drink 2 -->
            <div class="menu-card-large">
              <div class="bg-oval-large">
                <NuxtImg
                  src="/images/menu/drink2.jpg"
                  alt="Iced Matcha"
                  class="w-full h-full object-cover"
                />
              </div>
              <p class="type-label">Refreshing</p>
              <h3 class="name-large" style="color: var(--color-text-dark);">Iced Matcha</h3>
              <p class="price-large" style="color: var(--color-primary);">₱140</p>
            </div>

            <!-- Drink 3 -->
            <div class="menu-card-large">
              <div class="bg-oval-large">
                <NuxtImg
                  src="/images/menu/drink3.jpg"
                  alt="Matcha Frappé"
                  class="w-full h-full object-cover"
                />
              </div>
              <p class="type-label">Blended</p>
              <h3 class="name-large" style="color: var(--color-text-dark);">Matcha Frappé</h3>
              <p class="price-large" style="color: var(--color-primary);">₱160</p>
            </div>

            <!-- Drink 4 -->
            <div class="menu-card-large">
              <div class="bg-oval-large">
                <NuxtImg
                  src="/images/menu/drink4.jpg"
                  alt="Matcha Affogato"
                  class="w-full h-full object-cover"
                />
              </div>
              <p class="type-label">Premium</p>
              <h3 class="name-large" style="color: var(--color-text-dark);">Matcha Affogato</h3>
              <p class="price-large" style="color: var(--color-primary);">₱180</p>
            </div>

            <!-- Drink 5 -->
            <div class="menu-card-large">
              <div class="bg-oval-large">
                <NuxtImg
                  src="/images/menu/drink5.jpg"
                  alt="Strawberry Matcha"
                  class="w-full h-full object-cover"
                />
              </div>
              <p class="type-label">Fruity</p>
              <h3 class="name-large" style="color: var(--color-text-dark);">Strawberry Matcha</h3>
              <p class="price-large" style="color: var(--color-primary);">₱170</p>
            </div>

            <!-- Drink 6 -->
            <div class="menu-card-large">
              <div class="bg-oval-large">
                <NuxtImg
                  src="/images/menu/drink6.jpg"
                  alt="Honey Matcha Latte"
                  class="w-full h-full object-cover"
                />
              </div>
              <p class="type-label">Sweet</p>
              <h3 class="name-large" style="color: var(--color-text-dark);">Honey Matcha Latte</h3>
              <p class="price-large" style="color: var(--color-primary);">₱155</p>
            </div>

            <!-- Drink 7 -->
            <div class="menu-card-large">
              <div class="bg-oval-large">
                <NuxtImg
                  src="/images/menu/drink7.jpg"
                  alt="Ceremonial Matcha"
                  class="w-full h-full object-cover"
                />
              </div>
              <p class="type-label">Traditional</p>
              <h3 class="name-large" style="color: var(--color-text-dark);">Ceremonial Matcha</h3>
              <p class="price-large" style="color: var(--color-primary);">₱200</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Pastries Section -->
      <div>
        <div class="flex items-center justify-between mb-8">
          <h3 class="text-2xl font-bold" style="color: var(--color-text-dark);">Pastries</h3>
          <!-- Desktop Navigation Buttons -->
          <div class="hidden md:flex gap-2">
            <button
              @click="scrollPastries('left')"
              class="p-2 rounded-full bg-white hover:bg-gray-100 shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="!canScrollPastriesLeft"
              aria-label="Scroll pastries left"
            >
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              @click="scrollPastries('right')"
              class="p-2 rounded-full bg-white hover:bg-gray-100 shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="!canScrollPastriesRight"
              aria-label="Scroll pastries right"
            >
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <!-- Mobile Swipe Hint -->
        <div class="md:hidden text-center mb-4">
          <p class="text-sm text-gray-500 flex items-center justify-center gap-2">
            <svg class="w-5 h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Swipe to browse
            <svg class="w-5 h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </p>
        </div>
        <div ref="pastriesContainer" class="overflow-x-auto pb-4 scrollbar-hide scroll-smooth">
          <div class="flex gap-6 min-w-max">
            <!-- Pastry 1 -->
            <div class="menu-card-large">
              <div class="bg-oval-large">
                <NuxtImg
                  src="/images/menu/pastry1.jpg"
                  alt="Matcha Croissant"
                  class="w-full h-full object-cover"
                />
              </div>
              <p class="type-label">Baked Fresh</p>
              <h3 class="name-large" style="color: var(--color-text-dark);">Matcha Croissant</h3>
              <p class="price-large" style="color: var(--color-primary);">₱90</p>
            </div>

            <!-- Pastry 2 -->
            <div class="menu-card-large">
              <div class="bg-oval-large">
                <NuxtImg
                  src="/images/menu/pastry2.jpg"
                  alt="Matcha Danish"
                  class="w-full h-full object-cover"
                />
              </div>
              <p class="type-label">Buttery</p>
              <h3 class="name-large" style="color: var(--color-text-dark);">Matcha Danish</h3>
              <p class="price-large" style="color: var(--color-primary);">₱95</p>
            </div>

            <!-- Pastry 3 -->
            <div class="menu-card-large">
              <div class="bg-oval-large">
                <NuxtImg
                  src="/images/menu/pastry3.jpg"
                  alt="Matcha Cheesecake"
                  class="w-full h-full object-cover"
                />
              </div>
              <p class="type-label">Creamy</p>
              <h3 class="name-large" style="color: var(--color-text-dark);">Matcha Cheesecake</h3>
              <p class="price-large" style="color: var(--color-primary);">₱120</p>
            </div>

            <!-- Pastry 4 -->
            <div class="menu-card-large">
              <div class="bg-oval-large">
                <NuxtImg
                  src="/images/menu/pastry4.jpg"
                  alt="Matcha Cookie"
                  class="w-full h-full object-cover"
                />
              </div>
              <p class="type-label">Crunchy</p>
              <h3 class="name-large" style="color: var(--color-text-dark);">Matcha Cookie</h3>
              <p class="price-large" style="color: var(--color-primary);">₱75</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const drinksContainer = ref<HTMLElement | null>(null);
const pastriesContainer = ref<HTMLElement | null>(null);

const canScrollDrinksLeft = ref(false);
const canScrollDrinksRight = ref(false);
const canScrollPastriesLeft = ref(false);
const canScrollPastriesRight = ref(false);

const checkScrollPositions = () => {
  if (drinksContainer.value) {
    const { scrollLeft, scrollWidth, clientWidth } = drinksContainer.value;
    canScrollDrinksLeft.value = scrollLeft > 0;
    canScrollDrinksRight.value = scrollLeft < scrollWidth - clientWidth - 10;
  }

  if (pastriesContainer.value) {
    const { scrollLeft, scrollWidth, clientWidth } = pastriesContainer.value;
    canScrollPastriesLeft.value = scrollLeft > 0;
    canScrollPastriesRight.value = scrollLeft < scrollWidth - clientWidth - 10;
  }
};

const scrollDrinks = (direction: 'left' | 'right') => {
  if (!drinksContainer.value) return;
  const scrollAmount = 320; // Width of one card plus gap
  const newPosition = direction === 'left'
    ? drinksContainer.value.scrollLeft - scrollAmount
    : drinksContainer.value.scrollLeft + scrollAmount;

  drinksContainer.value.scrollTo({
    left: newPosition,
    behavior: 'smooth'
  });
};

const scrollPastries = (direction: 'left' | 'right') => {
  if (!pastriesContainer.value) return;
  const scrollAmount = 320; // Width of one card plus gap
  const newPosition = direction === 'left'
    ? pastriesContainer.value.scrollLeft - scrollAmount
    : pastriesContainer.value.scrollLeft + scrollAmount;

  pastriesContainer.value.scrollTo({
    left: newPosition,
    behavior: 'smooth'
  });
};

onMounted(() => {
  checkScrollPositions();

  if (drinksContainer.value) {
    drinksContainer.value.addEventListener('scroll', checkScrollPositions);
  }

  if (pastriesContainer.value) {
    pastriesContainer.value.addEventListener('scroll', checkScrollPositions);
  }

  window.addEventListener('resize', checkScrollPositions);
});

onUnmounted(() => {
  if (drinksContainer.value) {
    drinksContainer.value.removeEventListener('scroll', checkScrollPositions);
  }

  if (pastriesContainer.value) {
    pastriesContainer.value.removeEventListener('scroll', checkScrollPositions);
  }

  window.removeEventListener('resize', checkScrollPositions);
});
</script>

<style scoped>
.menu-card-large {
  background: transparent;
  text-align: center;
  padding: 20px;
  transition: transform 0.3s ease-out;
  min-width: 280px;
  will-change: transform;
}

.menu-card-large:hover {
  transform: translateY(-8px);
}

@media (max-width: 768px) {
  .menu-card-large:active {
    transform: scale(0.98);
  }
}

.bg-oval-large {
  background: var(--color-white);
  border-radius: 50%;
  width: 240px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.bg-oval-large img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.name-large {
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 8px;
}

.price-large {
  font-weight: 800;
  font-size: 1.5rem;
  margin-top: 8px;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
