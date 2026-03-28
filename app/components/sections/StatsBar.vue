<template>
  <section class="section-padding bg-white">
    <div class="container-elegant">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="section-title mb-4" style="color: var(--color-text-dark);">
          Visit Our Store
        </h2>
        <p class="body-text" style="color: var(--color-text-muted);">
          Come experience the warmth and quality of Bobbi - Matcha Slow Bar
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Left: Map -->
        <div class="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125307.49850171986!2d124.59157069821303!3d11.049171841264721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3307f730e0176ac1%3A0x913bc7c66a44f9a6!2sOrmoc%20City%2C%20Leyte!5e0!3m2!1sen!2sph!4v1774685819727!5m2!1sen!2sph"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <!-- Right: Contact Details -->
        <div class="space-y-8">
          <!-- Address -->
          <div>
            <div class="flex items-start gap-4 mb-3">
              <div class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style="background: var(--color-surface);">
                <svg class="w-6 h-6" style="color: var(--color-primary);" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-lg mb-1" style="color: var(--color-text-dark);">Location</h3>
                <p class="body-text" style="color: var(--color-text-muted);">{{ CAFE_INFO.address }}</p>
              </div>
            </div>
          </div>

          <!-- Hours -->
          <div>
            <div class="flex items-start gap-4 mb-3">
              <div class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style="background: var(--color-surface);">
                <svg class="w-6 h-6" style="color: var(--color-primary);" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-lg mb-1" style="color: var(--color-text-dark);">Hours</h3>
                <p class="body-text" style="color: var(--color-text-muted);">{{ CAFE_INFO.hours.weekday }}</p>
                <p class="body-text" style="color: var(--color-text-muted);">{{ CAFE_INFO.hours.weekend }}</p>
              </div>
            </div>
          </div>

          <!-- Contact -->
          <div>
            <div class="flex items-start gap-4 mb-3">
              <div class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style="background: var(--color-surface);">
                <svg class="w-6 h-6" style="color: var(--color-primary);" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-lg mb-1" style="color: var(--color-text-dark);">Contact</h3>
                <p class="body-text" style="color: var(--color-text-muted);">{{ CAFE_INFO.phone }}</p>
                <p class="body-text" style="color: var(--color-text-muted);">{{ CAFE_INFO.email }}</p>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div>
            <h3 class="font-bold text-lg mb-4" style="color: var(--color-text-dark);">Follow Us</h3>
            <div class="flex gap-3">
              <a
                v-for="(url, platform) in CAFE_INFO.social"
                :key="platform"
                :href="url"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style="background: var(--color-accent);"
                :aria-label="`Follow us on ${platform}`"
              >
                <component :is="getSocialIcon(platform)" class="w-6 h-6" style="color: var(--color-text-dark);" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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
</script>
