<template>
  <section class="section-padding" style="background: var(--color-cream);">
    <div class="container-elegant">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left: Photos Collage -->
        <div ref="aboutImages" class="relative h-[500px] scroll-fade-left">
          <!-- Background Image -->
          <div class="absolute top-0 left-0 w-[70%] h-[60%] rounded-lg overflow-hidden shadow-lg">
            <NuxtImg
              src="/images/matcha_demo.jpg"
              alt="Cafe Interior"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Foreground Image (Overlapping) -->
          <div class="absolute bottom-0 right-0 w-[70%] h-[60%] rounded-lg overflow-hidden shadow-xl">
            <NuxtImg
              src="/images/matcha_powder_spoon_transparent.jpg"
              alt="Coffee Preparation"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- Right: Text + CTA -->
        <div ref="aboutText" class="space-y-6 scroll-fade-right scroll-delay-200">
          <!-- Badge -->
          <div class="inline-block">
            <span class="label-small px-4 py-2 rounded-full" style="background: var(--color-surface); color: var(--color-text-muted);">
              About Us
            </span>
          </div>

          <!-- Headline -->
          <h2 class="section-title" style="color: var(--color-text-dark);">
            Discover The Best Quality Matcha And Ambience
          </h2>

          <!-- Body Text -->
          <p class="body-text" style="color: var(--color-text-muted);">
            We pride ourselves on providing top-notch matcha from exceptional sources
            handpicked by our expert sourcing team. Enjoy premium matcha that satisfies both your taste buds and your senses.
          </p>

          <p class="body-text" style="color: var(--color-text-muted);">
            Our premium matcha is carefully selected from the finest sources, ensuring top-quality which favor health and wellness,
            while immersing you in a perfect, stylish atmosphere that fosters relaxation and connection with others.
          </p>

          <!-- CTA Button -->
          <div class="pt-4">
            <a href="#menu" class="btn-outline">
              Explore Our Menu
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const aboutImages = ref<HTMLElement | null>(null);
const aboutText = ref<HTMLElement | null>(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    { threshold: 0.1 }
  );

  if (aboutImages.value) observer.observe(aboutImages.value);
  if (aboutText.value) observer.observe(aboutText.value);
});
</script>
