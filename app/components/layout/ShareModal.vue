<template>
  <ClientOnly>
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="isOpen"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          @click.self="closeModal"
        >
          <div class="bg-white rounded-lg shadow-elegant-lg max-w-md w-full p-8 animate-slide-up relative">
          <!-- Close Button -->
          <button
            @click="closeModal"
            class="absolute top-4 right-4 w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <XMarkIcon class="w-5 h-5 text-gray-600" />
          </button>

          <!-- Logo -->
          <div class="text-center mb-6">
            <h2 class="font-serif text-4xl font-bold text-matcha-500 mb-2">
              Bobbi
            </h2>
            <p class="text-gray-600">Share our menu with friends</p>
          </div>

          <!-- QR Code -->
          <div class="mb-6 bg-elegant-warmGray p-6 rounded-lg">
            <QRCode :value="menuUrl" :size="200" />
          </div>

          <!-- URL Display -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Menu Link
            </label>
            <div class="flex gap-2">
              <input
                :value="menuUrl"
                readonly
                class="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm"
              />
              <button
                @click="copyToClipboard"
                class="btn-elegant px-4 py-2 whitespace-nowrap"
              >
                {{ copied ? 'Copied!' : 'Copy' }}
              </button>
            </div>
          </div>

          <!-- Social Share Buttons -->
          <div class="border-t pt-6">
            <p class="text-sm font-medium text-gray-700 mb-3">Share via</p>
            <div class="flex gap-3 justify-center">
              <a
                :href="`https://wa.me/?text=${encodeURIComponent('Check out Bobbi Cafe menu: ' + menuUrl)}`"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-white transition-colors"
                aria-label="Share on WhatsApp"
              >
                <ChatBubbleLeftRightIcon class="w-6 h-6" />
              </a>
              <a
                :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(menuUrl)}`"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-colors"
                aria-label="Share on Facebook"
              >
                <ChatBubbleOvalLeftEllipsisIcon class="w-6 h-6" />
              </a>
              <a
                :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent('Check out Bobbi Cafe!')}&url=${encodeURIComponent(menuUrl)}`"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 rounded-full bg-sky-500 hover:bg-sky-600 flex items-center justify-center text-white transition-colors"
                aria-label="Share on Twitter"
              >
                <AtSymbolIcon class="w-6 h-6" />
              </a>
            </div>
          </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useClipboard } from '@vueuse/core';
import { XMarkIcon, ChatBubbleLeftRightIcon, ChatBubbleOvalLeftEllipsisIcon, AtSymbolIcon } from '@heroicons/vue/24/outline';
import QRCode from '~/components/common/QRCode.vue';

interface Props {
  open: boolean;
}

interface Emits {
  (e: 'update:open', value: boolean): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const isOpen = computed({
  get: () => props.open,
  set: (value) => emit('update:open', value),
});

// Get current URL with #menu anchor
const menuUrl = computed(() => {
  if (typeof window !== 'undefined') {
    return `${window.location.origin}#menu`;
  }
  return 'https://bobbicafe.com#menu';
});

const { copy, copied } = useClipboard({ source: menuUrl });

const closeModal = () => {
  isOpen.value = false;
};

const copyToClipboard = () => {
  copy(menuUrl.value);
};

// Close modal on escape key
watch(isOpen, (value) => {
  if (value && typeof window !== 'undefined') {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }
});
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
