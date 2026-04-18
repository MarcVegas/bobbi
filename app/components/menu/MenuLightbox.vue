<template>
  <Teleport to="body">
    <Transition name="lb-backdrop">
      <div
        v-if="item"
        class="lb-overlay"
        @click.self="$emit('close')"
        role="dialog"
        aria-modal="true"
        :aria-label="item.name"
      >
        <Transition name="lb-card" appear>
          <div v-if="item" class="lb-card">
            <!-- Close Button -->
            <button class="lb-close" @click="$emit('close')" aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <!-- Image: real photo if available, otherwise leaf placeholder -->
            <div class="lb-pic">
              <img
                v-if="item.imageUrl"
                :src="item.imageUrl"
                :alt="item.name"
                class="lb-real-img"
              />
              <div v-else class="lb-pic-inner">
                <svg class="lb-leaf" viewBox="0 0 48 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 2C24 2 10 11 6 22C3 31 6 40 13 44C17.5 46.5 24 46 24 46C24 46 30.5 46.5 35 44C42 40 45 31 42 22C38 11 24 2 24 2Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
                  <line x1="24" y1="2" x2="24" y2="50" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
                  <path d="M24 20 C20 17 14 16 11 18" stroke="currentColor" stroke-width="1" stroke-linecap="round" fill="none"/>
                  <path d="M24 28 C28 25 34 24 37 26" stroke="currentColor" stroke-width="1" stroke-linecap="round" fill="none"/>
                  <path d="M24 36 C21 34 17 33 15 34" stroke="currentColor" stroke-width="1" stroke-linecap="round" fill="none"/>
                </svg>
                <span class="lb-pic-text">Pic coming soon</span>
              </div>
            </div>

            <!-- Content -->
            <div class="lb-body">
              <!-- Meta row -->
              <div class="lb-meta">
                <span class="lb-sub-badge">{{ item.subcategoryLabel }}</span>
                <span v-if="item.badge === 'best-seller'" class="lb-badge-star">★ Best Seller</span>
                <span v-else-if="item.badge === 'new'" class="lb-badge-new">New</span>
                <span v-else-if="item.badge === 'popular'" class="lb-badge-pop">Popular</span>
              </div>

              <h2 class="lb-name">{{ item.name }}</h2>

              <p class="lb-description">{{ item.description }}</p>

              <!-- Prices -->
              <div class="lb-prices">
                <div
                  v-for="p in item.prices"
                  :key="p.label"
                  class="lb-price-row"
                >
                  <span class="lb-price-size">{{ p.label !== '1 size' ? p.label : 'Price' }}</span>
                  <span class="lb-price-amount">₱{{ p.price }}</span>
                </div>
              </div>

              <!-- Dismiss hint -->
              <p class="lb-hint">Tap outside or press <kbd>Esc</kbd> to close</p>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { watch, onUnmounted } from 'vue';
import type { MenuItem } from '~/shared/types/menu';

interface Props {
  item: MenuItem | null;
}

const props = defineProps<Props>();
const emit = defineEmits<{ close: [] }>();

function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close');
}

watch(() => props.item, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
  } else {
    document.body.style.overflow = '';
    window.removeEventListener('keydown', onKeyDown);
  }
});

onUnmounted(() => {
  document.body.style.overflow = '';
  window.removeEventListener('keydown', onKeyDown);
});
</script>

<style scoped>
/* ── Overlay ───────────────────────────────────────── */
.lb-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: rgba(15, 30, 20, 0.55);
  backdrop-filter: blur(4px);
  padding: 0;
  overflow-y: auto;
}

@media (min-width: 640px) {
  .lb-overlay {
    align-items: center;
    padding: 24px;
  }
}

/* ── Card ──────────────────────────────────────────── */
.lb-card {
  position: relative;
  background: white;
  border-radius: 24px 24px 0 0;
  width: 100%;
  max-width: 480px;
  overflow: hidden;
  box-shadow: 0 -8px 40px rgba(0, 0, 0, 0.2);
  margin-top: auto;
}

@media (min-width: 640px) {
  .lb-card {
    border-radius: 24px;
    margin: 0;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
  }
}

/* ── Close Button ──────────────────────────────────── */
.lb-close {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 10;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.92);
  color: var(--color-text-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  transition: background 0.15s ease, transform 0.15s ease;
}

.lb-close:hover {
  background: white;
  transform: scale(1.08);
}

/* ── Pic Placeholder ───────────────────────────────── */
.lb-pic {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #e8ede8 0%, #d6e2d6 50%, #ccd9cc 100%);
  flex-shrink: 0;
}

@media (min-width: 640px) {
  .lb-pic {
    height: 220px;
  }
}

.lb-real-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lb-pic-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.lb-leaf {
  width: 52px;
  height: 58px;
  color: #4A7A5A;
  opacity: 0.55;
}

.lb-pic-text {
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
  font-style: italic;
  font-size: 0.82rem;
  color: #4A7A5A;
  letter-spacing: 0.05em;
  opacity: 0.8;
}

/* ── Body ──────────────────────────────────────────── */
.lb-body {
  padding: 22px 22px 28px;
}

@media (min-width: 640px) {
  .lb-body {
    padding: 24px 28px 32px;
  }
}

/* ── Meta ──────────────────────────────────────────── */
.lb-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 8px;
}

.lb-sub-badge {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #4A7A5A;
}

.lb-badge-star {
  font-size: 0.62rem;
  font-weight: 700;
  background: var(--color-accent);
  color: var(--color-text-dark);
  padding: 2px 8px;
  border-radius: 20px;
}

.lb-badge-new {
  font-size: 0.62rem;
  font-weight: 700;
  background: #e8f5e9;
  color: #2e7d32;
  padding: 2px 8px;
  border-radius: 20px;
}

.lb-badge-pop {
  font-size: 0.62rem;
  font-weight: 700;
  background: #fce4ec;
  color: #c2185b;
  padding: 2px 8px;
  border-radius: 20px;
}

/* ── Name ──────────────────────────────────────────── */
.lb-name {
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.15;
  color: var(--color-text-dark);
  margin-bottom: 12px;
}

@media (min-width: 640px) {
  .lb-name {
    font-size: 1.7rem;
  }
}

/* ── Description ───────────────────────────────────── */
.lb-description {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.65;
  margin-bottom: 20px;
}

/* ── Prices ────────────────────────────────────────── */
.lb-prices {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.lb-price-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-surface);
  border-radius: 12px;
  padding: 10px 18px;
  border: 1px solid rgba(26, 58, 42, 0.09);
  min-width: 80px;
}

.lb-price-size {
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--color-text-muted);
  margin-bottom: 4px;
}

.lb-price-amount {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1;
}

/* ── Hint ──────────────────────────────────────────── */
.lb-hint {
  font-size: 0.68rem;
  color: #bbb;
  text-align: center;
}

.lb-hint kbd {
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1px 5px;
  font-size: 0.65rem;
  font-family: inherit;
}

/* ── Backdrop Transition ───────────────────────────── */
.lb-backdrop-enter-active,
.lb-backdrop-leave-active {
  transition: opacity 0.22s ease;
}

.lb-backdrop-enter-from,
.lb-backdrop-leave-to {
  opacity: 0;
}

/* ── Card Transition (bottom sheet on mobile) ──────── */
.lb-card-enter-active {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.22s ease;
}

.lb-card-leave-active {
  transition: transform 0.2s ease, opacity 0.18s ease;
}

.lb-card-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.lb-card-leave-to {
  transform: translateY(60px);
  opacity: 0;
}

@media (min-width: 640px) {
  .lb-card-enter-from {
    transform: scale(0.88) translateY(16px);
    opacity: 0;
  }

  .lb-card-leave-to {
    transform: scale(0.92) translateY(10px);
    opacity: 0;
  }
}
</style>
