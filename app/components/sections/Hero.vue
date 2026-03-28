<template>
  <section class="relative min-h-[600px] md:min-h-[700px] overflow-hidden" style="background: var(--color-primary);">
    <div class="container-elegant">
      <div class="grid md:grid-cols-2 gap-8 items-center py-16 md:py-20">
        <!-- Left: Headline + Description + Features + CTA -->
        <div class="relative z-10 animate-slide-up">
          <!-- Headline with Yellow Underline -->
          <h1 class="hero-headline text-white mb-6">
            THE <span class="relative inline-block">
              <span class="relative z-10">BEST MATCHA</span>
              <svg class="absolute bottom-0 left-0 w-full h-3 -mb-2" viewBox="0 0 300 12" preserveAspectRatio="none">
                <path d="M0,6 Q75,0 150,6 T300,6" fill="none" :stroke="'var(--color-accent)'" stroke-width="8" stroke-linecap="round"/>
              </svg>
            </span> IS HERE IN ORMOC CITY
          </h1>

          <!-- Description -->
          <p class="body-text text-white/90 mb-8 max-w-md">
            Bobbi - where every cup tells a premium experience. Come, savor the difference!
          </p>

          <!-- Feature List with Checkmarks -->
          <ul class="feature-list mb-8">
            <li>
              <span class="check-icon">✓</span>
              <span><strong>Premium Beans:</strong> Sourced from the finest farms, roasted to perfection.</span>
            </li>
            <li>
              <span class="check-icon">✓</span>
              <span><strong>Nice Ambiance:</strong> A cozy, welcoming space for work, relaxation, or catching up with friends.</span>
            </li>
            <li>
              <span class="check-icon">✓</span>
              <span><strong>Affordable Prices:</strong> Enjoy top-quality coffee without breaking the bank.</span>
            </li>
          </ul>

          <!-- CTA Button -->
          <a href="#menu" class="btn-primary text-base">
            Explore Our Menu
          </a>
        </div>

        <!-- Right: Matcha Image -->
        <div class="relative flex items-center justify-center md:justify-end -mr-8 md:-mr-16">
          <div class="relative w-full max-w-2xl">
            <NuxtImg
              src="/images/hero_image_transparent.jpg"
              alt="Premium Matcha"
              class="w-full h-auto object-contain drop-shadow-2xl scale-125 md:scale-150"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No parallax needed for this design
</script>
