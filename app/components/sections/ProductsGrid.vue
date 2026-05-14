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
        <div :key="selectedMain + '-' + selectedSub">
          <!-- Empty state -->
          <div v-if="filteredItems.length === 0" class="empty-state">
            <div class="empty-state-icon">
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- plate -->
                <ellipse cx="40" cy="52" rx="26" ry="6" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.25"/>
                <ellipse cx="40" cy="50" rx="26" ry="10" stroke="currentColor" stroke-width="1.5" fill="none"/>
                <!-- cloche dome -->
                <path d="M14 50 C14 30 66 30 66 50" stroke="currentColor" stroke-width="1.5" fill="none"/>
                <!-- cloche handle knob -->
                <circle cx="40" cy="28" r="3" stroke="currentColor" stroke-width="1.5" fill="none"/>
                <line x1="40" y1="31" x2="40" y2="36" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <!-- sparkle left -->
                <line x1="22" y1="18" x2="22" y2="24" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity="0.5"/>
                <line x1="19" y1="21" x2="25" y2="21" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity="0.5"/>
                <!-- sparkle right -->
                <line x1="58" y1="14" x2="58" y2="20" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity="0.5"/>
                <line x1="55" y1="17" x2="61" y2="17" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity="0.5"/>
              </svg>
            </div>
            <h3 class="empty-state-title">New products coming soon</h3>
            <p class="empty-state-sub">We're still crafting something delicious for this section.<br>Check back with us shortly.</p>
          </div>

          <!-- Menu grid -->
          <div v-else class="menu-grid">
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
              <!-- Image: real photo if available, else leaf placeholder -->
              <div class="pic-placeholder">
                <img
                  v-if="item.imageUrl"
                  :src="item.imageUrl"
                  :alt="item.name"
                  class="card-real-img"
                />
                <div v-else class="pic-placeholder-inner">
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
        </div>
      </transition>
    </div>

    <!-- Lightbox -->
    <MenuLightbox :item="activeItem" @close="activeItem = null" />
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import type { MenuItem } from '../../../shared/types/menu';
import MenuLightbox from '../menu/MenuLightbox.vue';

const activeItem = ref<MenuItem | null>(null);
const { items: allItems, isFromCMS } = useMenuData();
watch(isFromCMS, (val) => {
  if (val) console.log('[useMenuData] ✅ Live Sanity data loaded:', allItems.value.length, 'items');
}, { immediate: true });

// Config for known categories — icon + display label + sort order.
// Any category arriving from Sanity that isn't listed here gets a generic icon
// and a label auto-formatted from its ID (kebab-case → Title Case).
const categoryConfig: Record<string, { label: string; icon: string; order: number }> = {
  matcha: {
    order: 0,
    label: 'Matcha',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C6 2 3 7 3 12s3 10 9 10 9-5 9-10S18 2 12 2z"/><line x1="12" y1="2" x2="12" y2="22"/><path d="M12 9c-2-2-5-3-7-2"/><path d="M12 15c2-2 5-3 7-2"/></svg>',
  },
  coffee: {
    order: 1,
    label: 'Coffee',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>',
  },
  pasta: {
    order: 2,
    label: 'Pasta',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12c0-5 3-9 9-9s9 4 9 9"/><path d="M3 12h18"/><path d="M7 12c0 3 2 6 5 6s5-3 5-6"/><path d="M10 6c0 1.5.5 3 2 4"/><path d="M14 6c0 1.5-.5 3-2 4"/></svg>',
  },
  pastries: {
    order: 3,
    label: 'Pastries',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19c0-4 2-7 8-7s8 3 8 7"/><path d="M9 12C7 10 6 7 8 5c2-2 5-1 6 1s0 4-2 5"/><path d="M15 12c2-2 3-5 1-7-2-2-5-1-6 1"/><line x1="4" y1="19" x2="20" y2="19"/></svg>',
  },
  'chicken-wings': {
    order: 4,
    label: 'Wings',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20c3-3 5-7 5-11 0-2 1-4 3-5 3-1 6 1 7 4 1 2 0 5-2 7L4 20z"/><path d="M9 9c1 2 1 4 0 6"/><path d="M13 7c0 2-1 4-3 6"/></svg>',
  },
  'rice-meals': {
    order: 5,
    label: 'Rice Meals',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 11c0-3.3 3.6-6 8-6s8 2.7 8 6"/><path d="M4 11v2c0 3.3 3.6 6 8 6s8-2.7 8-6v-2"/><ellipse cx="12" cy="11" rx="8" ry="3"/></svg>',
  },
  'sandwiches-toasts': {
    order: 6,
    label: 'Sandwiches',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11h18"/><path d="M3 14h18"/><path d="M5 8c0-1.1 1-2 2-2h10c1 0 2 .9 2 2v3H5V8z"/><path d="M5 14v3c0 1.1 1 2 2 2h10c1 0 2-.9 2-2v-3"/></svg>',
  },
  'snacks-sides': {
    order: 7,
    label: 'Snacks',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 4h2l1 7h8l1-7h2"/><path d="M8 11v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-8"/><line x1="10" y1="7" x2="10" y2="11"/><line x1="14" y1="7" x2="14" y2="11"/></svg>',
  },
};

const genericCategoryIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>';

function toTitleCase(id: string) {
  return id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

const selectedMain = ref('');
const selectedSub = ref('all');

// Exclude sold-out items globally
const availableItems = computed(() =>
  allItems.value.filter(item => !item.soldOut)
);

// Derive main tabs from actual data so new Sanity categories appear automatically.
// Known categories keep their icon/label/order; unknowns get a generic icon and
// are appended after the known ones in the order they first appear in the data.
const mainTabs = computed(() => {
  const seenCategories = new Set<string>();
  const known: { id: string; label: string; icon: string; order: number }[] = [];
  const unknown: { id: string; label: string; icon: string; order: number }[] = [];
  let unknownOrder = 1000;

  for (const item of availableItems.value) {
    if (seenCategories.has(item.category)) continue;
    seenCategories.add(item.category);
    const cfg = categoryConfig[item.category];
    const tab = {
      id: item.category,
      label: cfg?.label ?? toTitleCase(item.category),
      icon: cfg?.icon ?? genericCategoryIcon,
      order: cfg?.order ?? unknownOrder++,
    };
    (cfg ? known : unknown).push(tab);
  }

  return [...known.sort((a, b) => a.order - b.order), ...unknown];
});

// Auto-select the first available tab whenever the tab list changes
watch(mainTabs, (tabs) => {
  if (tabs.length && !tabs.some(t => t.id === selectedMain.value)) {
    selectedMain.value = tabs[0].id;
  }
}, { immediate: true });

// Categories where the "All X" chip is intentionally hidden — items must be
// browsed per subcategory instead.
const NO_ALL_CHIP_CATEGORIES = new Set(['add-ons']);

// Derive subcategory chips from items in the selected category.
// subcategoryLabel from the item is used as the chip label, so whatever is set
// in Sanity Studio appears here automatically. The "All" chip is omitted for
// categories listed in NO_ALL_CHIP_CATEGORIES.
const currentSubcategories = computed(() => {
  const seen = new Set<string>();
  const chips: { id: string; label: string }[] = [];

  if (!NO_ALL_CHIP_CATEGORIES.has(selectedMain.value)) {
    chips.push({ id: 'all', label: `All ${categoryConfig[selectedMain.value]?.label ?? toTitleCase(selectedMain.value)}` });
  }

  for (const item of availableItems.value) {
    if (item.category !== selectedMain.value) continue;
    if (seen.has(item.subcategory)) continue;
    seen.add(item.subcategory);
    chips.push({ id: item.subcategory, label: item.subcategoryLabel ?? toTitleCase(item.subcategory) });
  }
  return chips;
});

watch(selectedMain, (category) => {
  if (NO_ALL_CHIP_CATEGORIES.has(category)) {
    // Auto-select the first subcategory so items are visible immediately
    const firstSub = availableItems.value.find(item => item.category === category);
    selectedSub.value = firstSub?.subcategory ?? 'all';
  } else {
    selectedSub.value = 'all';
  }
});

function selectMain(id: string) {
  selectedMain.value = id;
}

function selectSub(id: string) {
  selectedSub.value = id;
}

const filteredItems = computed(() => {
  return availableItems.value
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

/* ── Card Image ─────────────────────────────────────── */
.card-real-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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

/* ── Empty State ────────────────────────────────────── */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 24px 80px;
  text-align: center;
}

.empty-state-icon {
  width: 80px;
  height: 80px;
  color: var(--color-primary);
  opacity: 0.45;
  margin-bottom: 20px;
}

.empty-state-icon svg {
  width: 100%;
  height: 100%;
}

.empty-state-title {
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-dark);
  margin-bottom: 10px;
}

.empty-state-sub {
  font-size: 0.82rem;
  color: var(--color-text-muted);
  line-height: 1.65;
  max-width: 320px;
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
