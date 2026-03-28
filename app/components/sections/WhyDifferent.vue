<template>
  <section class="section-padding" style="background: var(--color-cream);">
    <div class="container-elegant">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="section-title mb-4" style="color: var(--color-text-dark);">
          Why We Are Different
        </h2>
        <p class="body-text" style="color: var(--color-text-muted);">
          There Are Several Reason Why You May Choose Us
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 items-center">
        <!-- Left Column: 2x2 Grid -->
        <div class="space-y-8">
          <!-- Roasted to Perfection -->
          <div class="text-center md:text-right">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style="background: var(--color-surface);">
              <svg class="w-8 h-8" style="color: var(--color-primary);" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 class="font-bold text-lg mb-2" style="color: var(--color-text-dark);">Roasted to Perfection</h3>
            <p class="body-text text-sm" style="color: var(--color-text-muted);">
              Expert roasting techniques delivering a consistently satisfying cup of coffee
            </p>
          </div>

          <!-- From Farm to Cup -->
          <div class="text-center md:text-right">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style="background: var(--color-surface);">
              <svg class="w-8 h-8" style="color: var(--color-primary);" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <h3 class="font-bold text-lg mb-2" style="color: var(--color-text-dark);">From Farm to Cup</h3>
            <p class="body-text text-sm" style="color: var(--color-text-muted);">
              We follow each coffee bean's journey from farm to cup,
              ensuring sustainable and ethical sourcing practices
            </p>
          </div>
        </div>

        <!-- Center: Coffee Cup Image -->
        <div class="flex items-center justify-center">
          <div class="relative w-64 h-80 flex items-center justify-center">
            <div class="absolute inset-0 rounded-full opacity-10" style="background: var(--color-accent);"></div>
            <NuxtImg
              src="/images/hero_image_transparent.jpg"
              alt="Premium Coffee Cup"
              class="relative w-full h-full object-contain drop-shadow-lg"
            />
          </div>
        </div>

        <!-- Right Column: 2x2 Grid -->
        <div class="space-y-8">
          <!-- Artisan Roasting -->
          <div class="text-center md:text-left">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style="background: var(--color-surface);">
              <svg class="w-8 h-8" style="color: var(--color-primary);" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
              </svg>
            </div>
            <h3 class="font-bold text-lg mb-2" style="color: var(--color-text-dark);">Artisan Roasting</h3>
            <p class="body-text text-sm" style="color: var(--color-text-muted);">
              Our coffee machines combine state-of-the-art
              features with elegant design
            </p>
          </div>

          <!-- Commitment to Quality -->
          <div class="text-center md:text-left">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style="background: var(--color-surface);">
              <svg class="w-8 h-8" style="color: var(--color-primary);" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
              </svg>
            </div>
            <h3 class="font-bold text-lg mb-2" style="color: var(--color-text-dark);">Commitment to Quality</h3>
            <p class="body-text text-sm" style="color: var(--color-text-muted);">
              We promise to source, deliver highest quality
              beans every time, bringing you the authentic
              original flavor of specialty
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Why We Are Different section
</script>
