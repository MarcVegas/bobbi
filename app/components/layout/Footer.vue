<template>
  <footer class="section-padding" style="background: var(--color-primary); color: var(--color-white);">
    <div class="container-elegant">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full flex items-center justify-center" style="background: var(--color-accent);">
              <svg class="w-6 h-6" style="color: var(--color-text-dark);" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 21h8v-2H2v2zm2-10h4v8H4v-8zm14 0c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2s-2 .9-2 2v4c0 1.1.9 2 2 2zm-6 10h8v-2h-8v2zm2-18c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
              </svg>
            </div>
            <h3 class="font-bold text-2xl" style="color: var(--color-accent);">Bean Haven Café</h3>
          </div>
          <p class="text-sm leading-relaxed opacity-80">
            Experience premium coffee from the finest beans, crafted with passion and served in a warm atmosphere.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-bold text-lg mb-4">Quick Links</h4>
          <div class="space-y-2 text-sm opacity-80">
            <a href="#about" class="block hover:opacity-100 transition-opacity">About Us</a>
            <a href="#products" class="block hover:opacity-100 transition-opacity">Our Products</a>
            <a href="#store" class="block hover:opacity-100 transition-opacity">Store Locator</a>
            <a href="#blog" class="block hover:opacity-100 transition-opacity">Blog</a>
          </div>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-bold text-lg mb-4">Contact</h4>
          <div class="space-y-2 text-sm opacity-80">
            <p>{{ CAFE_INFO.address }}</p>
            <p>{{ CAFE_INFO.phone }}</p>
            <p>{{ CAFE_INFO.email }}</p>
          </div>
        </div>

        <!-- Social & Hours -->
        <div>
          <h4 class="font-bold text-lg mb-4">Follow Us</h4>
          <div class="flex gap-4 mb-6">
            <a
              v-for="(url, platform) in CAFE_INFO.social"
              :key="platform"
              :href="url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              style="background: var(--color-accent);"
              :aria-label="`Follow us on ${platform}`"
            >
              <component :is="getSocialIcon(platform)" class="w-5 h-5" style="color: var(--color-text-dark);" />
            </a>
          </div>

          <h4 class="font-bold text-lg mb-3">Hours</h4>
          <div class="space-y-1 text-sm opacity-80">
            <p>{{ CAFE_INFO.hours.weekday }}</p>
            <p>{{ CAFE_INFO.hours.weekend }}</p>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-8 border-t opacity-20" style="border-color: var(--color-white);">
        <p class="text-center text-sm opacity-60">&copy; {{ new Date().getFullYear() }} Bean Haven Café. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Import icons - you can customize these based on actual social platforms
import {
  ChatBubbleOvalLeftEllipsisIcon as InstagramIcon,
  ChatBubbleLeftRightIcon as FacebookIcon,
  AtSymbolIcon as TwitterIcon,
} from '@heroicons/vue/24/outline';

const getSocialIcon = (platform: string) => {
  const icons: Record<string, any> = {
    instagram: InstagramIcon,
    facebook: FacebookIcon,
    twitter: TwitterIcon,
  };
  return icons[platform] || InstagramIcon;
};

const capitalizeFirst = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
</script>
