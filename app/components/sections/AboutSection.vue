<template>
  <section class="section-padding" style="background: var(--color-cream);">
    <div class="container-elegant">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left: Photos Collage -->
        <div class="relative h-[500px]">
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
        <div class="space-y-6">
          <!-- Badge -->
          <div class="inline-block">
            <span class="label-small px-4 py-2 rounded-full" style="background: var(--color-surface); color: var(--color-text-muted);">
              About Us
            </span>
          </div>

          <!-- Headline -->
          <h2 class="section-title" style="color: var(--color-text-dark);">
            Discover The Best Quality Beans And Ambience
          </h2>

          <!-- Body Text -->
          <p class="body-text" style="color: var(--color-text-muted);">
            We pride ourself on providing top-notch coffee beans from exceptional farms
            handpicked by our expert sourcing team. Enjoy premium coffee that satisfies both your taste buds and your senses.
          </p>

          <p class="body-text" style="color: var(--color-text-muted);">
            Our premium beans are carefully selected from the finest farms, ensuring top-quality which favor coffee,
            while immersing them in a perfect, stylish atmosphere the fosters relaxation and connection with others.
          </p>

          <!-- CTA Button -->
          <div class="pt-4">
            <button class="btn-outline">
              Explore Our Product
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// About section with image collage
</script>
