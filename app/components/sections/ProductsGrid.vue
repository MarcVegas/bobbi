<template>
  <section id="menu" class="relative" style="background: var(--color-cream);">
    <!-- Section Header -->
    <div class="pt-16 pb-8 md:pt-20 md:pb-10">
      <div class="container-elegant text-center">
        <h2 class="section-title mb-3" style="color: var(--color-text-dark);">Our Menu</h2>
        <p class="body-text" style="color: var(--color-text-muted);">
          Crafted with care, served with intention
        </p>
      </div>
    </div>

    <!-- Sticky Category Nav -->
    <div class="sticky top-0 z-30 py-3 menu-nav-sticky">
      <div class="container-elegant">
        <!-- Main Tabs -->
        <div class="flex justify-center gap-3 mb-3">
          <button
            v-for="tab in mainTabs"
            :key="tab.id"
            @click="selectMain(tab.id)"
            :class="['main-tab', selectedMain === tab.id ? 'main-tab--active' : '']"
          >
            <span class="tab-icon" v-html="tab.icon" />
            {{ tab.label }}
          </button>
        </div>

        <!-- Sub Chips -->
        <div class="sub-chips-scroll">
          <div class="sub-chips-inner">
            <button
              v-for="sub in currentSubcategories"
              :key="sub.id"
              @click="selectSub(sub.id)"
              :class="['sub-chip', selectedSub === sub.id ? 'sub-chip--active' : '']"
            >
              {{ sub.label }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Menu Grid -->
    <div class="container-elegant pb-16 pt-6">
      <transition name="menu-fade" mode="out-in">
        <div
          :key="selectedMain + '-' + selectedSub"
          class="menu-grid"
        >
          <article
            v-for="item in filteredItems"
            :key="item.id"
            class="menu-item-card"
            role="button"
            tabindex="0"
            @click="activeItem = item"
            @keydown.enter="activeItem = item"
            @keydown.space.prevent="activeItem = item"
          >
            <!-- Pic Coming Soon Placeholder -->
            <div class="pic-placeholder">
              <div class="pic-placeholder-inner">
                <svg class="leaf-icon" viewBox="0 0 48 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 2C24 2 10 11 6 22C3 31 6 40 13 44C17.5 46.5 24 46 24 46C24 46 30.5 46.5 35 44C42 40 45 31 42 22C38 11 24 2 24 2Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
                  <line x1="24" y1="2" x2="24" y2="50" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
                  <path d="M24 20 C20 17 14 16 11 18" stroke="currentColor" stroke-width="1" stroke-linecap="round" fill="none"/>
                  <path d="M24 28 C28 25 34 24 37 26" stroke="currentColor" stroke-width="1" stroke-linecap="round" fill="none"/>
                  <path d="M24 36 C21 34 17 33 15 34" stroke="currentColor" stroke-width="1" stroke-linecap="round" fill="none"/>
                </svg>
                <span class="pic-soon-text">Pic coming soon</span>
              </div>
            </div>

            <!-- Card Info -->
            <div class="card-body">
              <!-- Sub badge + best-seller badge row -->
              <div class="card-meta">
                <span class="sub-badge">{{ item.subcategoryLabel }}</span>
                <span v-if="item.badge === 'best-seller'" class="badge-star">★ Best Seller</span>
                <span v-else-if="item.badge === 'new'" class="badge-new">New</span>
                <span v-else-if="item.badge === 'popular'" class="badge-pop">Popular</span>
              </div>

              <h3 class="item-name">{{ item.name }}</h3>

              <p v-if="item.description" class="item-description">{{ item.description }}</p>

              <!-- Prices -->
              <div class="price-row">
                <span
                  v-for="p in item.prices"
                  :key="p.label"
                  class="price-chip"
                >
                  <span v-if="p.label !== '1 size'" class="price-size">{{ p.label }}</span>
                  <span class="price-amount">₱{{ p.price }}</span>
                </span>
              </div>
            </div>
          </article>
        </div>
      </transition>
    </div>

    <!-- Lightbox -->
    <MenuLightbox :item="activeItem" @close="activeItem = null" />
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { menuData } from '../../../data/menu';
import type { MenuItem } from '../../../shared/types/menu';
import MenuLightbox from '../menu/MenuLightbox.vue';

const activeItem = ref<MenuItem | null>(null);

const mainTabs = [
  {
    id: 'matcha' as const,
    label: 'Matcha',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C6 2 3 7 3 12s3 10 9 10 9-5 9-10S18 2 12 2z"/><line x1="12" y1="2" x2="12" y2="22"/><path d="M12 9c-2-2-5-3-7-2"/><path d="M12 15c2-2 5-3 7-2"/></svg>',
  },
  {
    id: 'coffee' as const,
    label: 'Coffee',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>',
  },
];

const subcategories = {
  matcha: [
    { id: 'all', label: 'All Matcha' },
    { id: 'signature-series', label: 'Signature Series' },
    { id: 'hojicha', label: 'Hojicha' },
    { id: 'bobbi-icons', label: 'Bobbi Icons' },
    { id: 'heritage-selection', label: 'Heritage Selection' },
    { id: 'marukyu-series', label: 'Marukyu Koyamaen' },
  ],
  coffee: [
    { id: 'all', label: 'All Coffee' },
    { id: 'classics', label: 'The Classics' },
    { id: 'coffee-signatures', label: 'Signatures' },
    { id: 'milk-series', label: 'Milk Series' },
    { id: 'caffeinated-frosts', label: 'Caffeinated Frosts' },
    { id: 'cream-frosts', label: 'Cream Frosts' },
  ],
};

const selectedMain = ref<'matcha' | 'coffee'>('matcha');
const selectedSub = ref('all');

const currentSubcategories = computed(() => subcategories[selectedMain.value]);

watch(selectedMain, () => {
  selectedSub.value = 'all';
});

function selectMain(id: 'matcha' | 'coffee') {
  selectedMain.value = id;
}

function selectSub(id: string) {
  selectedSub.value = id;
}

const filteredItems = computed(() => {
  return menuData.items
    .filter(item => {
      if (item.category !== selectedMain.value) return false;
      if (selectedSub.value === 'all') return true;
      return item.subcategory === selectedSub.value;
    })
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
});
</script>

<style scoped>
/* ── Sticky Nav ─────────────────────────────────────── */
.menu-nav-sticky {
  background: var(--color-cream);
  box-shadow: 0 2px 16px rgba(26, 58, 42, 0.08);
  backdrop-filter: blur(8px);
}

/* ── Main Tabs ──────────────────────────────────────── */
.main-tab {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 10px 26px;
  border-radius: 50px;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  color: var(--color-text-muted);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.08);
}

.main-tab .tab-icon {
  display: flex;
  align-items: center;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.main-tab--active {
  background: var(--color-primary);
  color: white;
  box-shadow: 0 4px 18px rgba(26, 58, 42, 0.28);
}

.main-tab--active .tab-icon {
  opacity: 1;
}

/* ── Sub Chips Scroll ───────────────────────────────── */
.sub-chips-scroll {
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin: 0 -1rem;
  padding: 0 1rem;
}

.sub-chips-scroll::-webkit-scrollbar {
  display: none;
}

.sub-chips-inner {
  display: flex;
  gap: 8px;
  padding-bottom: 2px;
  width: max-content;
}

.sub-chip {
  padding: 6px 15px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  background: white;
  color: var(--color-text-muted);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}

.sub-chip:hover {
  color: var(--color-text-dark);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.sub-chip--active {
  background: var(--color-accent);
  color: var(--color-text-dark);
  font-weight: 700;
  box-shadow: 0 2px 10px rgba(245, 197, 24, 0.35);
}

/* ── Menu Grid ──────────────────────────────────────── */
.menu-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

@media (min-width: 640px) {
  .menu-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }
}

@media (min-width: 900px) {
  .menu-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
  }
}

@media (min-width: 1280px) {
  .menu-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* ── Item Card ──────────────────────────────────────── */
.menu-item-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  outline: none;
}

.menu-item-card:focus-visible {
  box-shadow: 0 0 0 3px rgba(26, 58, 42, 0.35);
}

.menu-item-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 28px rgba(26, 58, 42, 0.12);
}

@media (max-width: 639px) {
  .menu-item-card:active {
    transform: scale(0.98);
  }
}

/* ── Pic Placeholder ────────────────────────────────── */
.pic-placeholder {
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #e8ede8 0%, #d6e2d6 50%, #ccd9cc 100%);
  flex-shrink: 0;
}

@media (min-width: 640px) {
  .pic-placeholder {
    height: 150px;
  }
}

@media (min-width: 900px) {
  .pic-placeholder {
    height: 160px;
  }
}

.pic-placeholder-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.leaf-icon {
  width: 32px;
  height: 36px;
  color: #4A7A5A;
  opacity: 0.55;
}

@media (min-width: 640px) {
  .leaf-icon {
    width: 36px;
    height: 40px;
  }
}

.pic-soon-text {
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
  font-style: italic;
  font-size: 0.68rem;
  color: #4A7A5A;
  letter-spacing: 0.04em;
  opacity: 0.75;
}

@media (min-width: 640px) {
  .pic-soon-text {
    font-size: 0.72rem;
  }
}

/* ── Card Body ──────────────────────────────────────── */
.card-body {
  padding: 11px 12px 13px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

@media (min-width: 640px) {
  .card-body {
    padding: 14px 16px 16px;
  }
}

/* ── Card Meta ──────────────────────────────────────── */
.card-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 5px;
}

.sub-badge {
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: #4A7A5A;
}

.badge-star {
  font-size: 0.58rem;
  font-weight: 700;
  background: var(--color-accent);
  color: var(--color-text-dark);
  padding: 2px 6px;
  border-radius: 20px;
}

.badge-new {
  font-size: 0.58rem;
  font-weight: 700;
  background: #e8f5e9;
  color: #2e7d32;
  padding: 2px 6px;
  border-radius: 20px;
}

.badge-pop {
  font-size: 0.58rem;
  font-weight: 700;
  background: #fce4ec;
  color: #c2185b;
  padding: 2px 6px;
  border-radius: 20px;
}

/* ── Item Name ──────────────────────────────────────── */
.item-name {
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  line-height: 1.2;
  color: var(--color-text-dark);
  margin-bottom: 5px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (min-width: 640px) {
  .item-name {
    font-size: 1.05rem;
  }
}

/* ── Description ────────────────────────────────────── */
.item-description {
  font-size: 0.68rem;
  color: var(--color-text-muted);
  line-height: 1.55;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 10px;
  flex: 1;
}

@media (min-width: 640px) {
  .item-description {
    font-size: 0.75rem;
  }
}

/* ── Price Row ──────────────────────────────────────── */
.price-row {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: auto;
}

/* ── Price Chip ─────────────────────────────────────── */
.price-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: var(--color-surface);
  border-radius: 20px;
  padding: 3px 9px;
  border: 1px solid rgba(26, 58, 42, 0.09);
}

.price-size {
  font-size: 0.6rem;
  color: var(--color-text-muted);
  font-weight: 500;
}

.price-amount {
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--color-primary);
}

/* ── Transition ─────────────────────────────────────── */
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
