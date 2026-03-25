<template>
  <footer class="bg-elegant-black text-white section-padding">
    <div class="container-elegant">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <!-- Brand -->
        <div>
          <h3 class="font-serif text-3xl font-bold text-matcha-400 mb-4">Bobbi</h3>
          <p class="text-gray-300 text-sm leading-relaxed">
            Experience the finest matcha drinks, coffee, and pastries in an elegant atmosphere.
          </p>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-serif text-lg font-semibold mb-4">Contact</h4>
          <div class="space-y-2 text-sm text-gray-300">
            <p>{{ CAFE_INFO.address }}</p>
            <p>{{ CAFE_INFO.phone }}</p>
            <p>{{ CAFE_INFO.email }}</p>
          </div>
        </div>

        <!-- Hours -->
        <div>
          <h4 class="font-serif text-lg font-semibold mb-4">Hours</h4>
          <div class="space-y-2 text-sm text-gray-300">
            <p>{{ CAFE_INFO.hours.weekday }}</p>
            <p>{{ CAFE_INFO.hours.weekend }}</p>
          </div>
        </div>

        <!-- Social & Delivery -->
        <div>
          <h4 class="font-serif text-lg font-semibold mb-4">Follow Us</h4>
          <div class="flex gap-4 mb-6">
            <a
              v-for="(url, platform) in CAFE_INFO.social"
              :key="platform"
              :href="url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-matcha-500 flex items-center justify-center hover:bg-matcha-600 transition-colors"
              :aria-label="`Follow us on ${platform}`"
            >
              <component :is="getSocialIcon(platform)" class="w-5 h-5 text-white" />
            </a>
          </div>

          <h4 class="font-serif text-lg font-semibold mb-3">Delivery</h4>
          <div class="flex flex-col gap-2 text-sm">
            <a
              v-for="(url, platform) in CAFE_INFO.delivery"
              :key="platform"
              :href="url"
              class="text-matcha-400 hover:text-matcha-300 transition-colors"
            >
              {{ capitalizeFirst(platform) }}
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} Bobbi Cafe. All rights reserved.</p>
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
