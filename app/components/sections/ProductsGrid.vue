<template>
  <section class="section-padding bg-white" id="products">
    <div class="container-elegant">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="section-title mb-4" style="color: var(--color-text-dark);">
          Explore Recent Products
        </h2>
        <p class="body-text" style="color: var(--color-text-muted);">
          Showcases the latest additions and updates to our collections
        </p>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Product Card 1 -->
        <div class="product-card">
          <div class="bg-oval">
            <NuxtImg
              src="/images/menu/drink1.jpg"
              alt="Gayo Tamagosan"
              class="w-full h-full object-contain"
            />
          </div>
          <p class="type-label">Arabica</p>
          <h3 class="name" style="color: var(--color-text-dark);">Gayo Tamagosan</h3>
          <div class="stars">★★★★★</div>
          <p class="price" style="color: var(--color-text-dark);">$43</p>
        </div>

        <!-- Product Card 2 -->
        <div class="product-card">
          <div class="bg-oval">
            <NuxtImg
              src="/images/menu/drink2.jpg"
              alt="Bali Kintamani"
              class="w-full h-full object-contain"
            />
          </div>
          <p class="type-label">Arabica</p>
          <h3 class="name" style="color: var(--color-text-dark);">Bali Kintamani</h3>
          <div class="stars">★★★★★</div>
          <p class="price" style="color: var(--color-text-dark);">$52</p>
        </div>

        <!-- Product Card 3 - Featured with Arrow -->
        <div class="product-card relative">
          <div class="bg-oval">
            <NuxtImg
              src="/images/menu/drink3.jpg"
              alt="Flores Manggarai"
              class="w-full h-full object-contain"
            />
          </div>
          <p class="type-label">Robusta</p>
          <h3 class="name" style="color: var(--color-text-dark);">Flores Manggarai</h3>
          <div class="stars">★★★★☆</div>
          <p class="price" style="color: var(--color-text-dark);">$48</p>

          <!-- Arrow Button -->
          <div class="absolute top-4 right-4">
            <button class="w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110" style="background: var(--color-primary);">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Product Card 4 -->
        <div class="product-card">
          <div class="bg-oval">
            <NuxtImg
              src="/images/menu/drink4.jpg"
              alt="Gunung Tanggamus"
              class="w-full h-full object-contain"
            />
          </div>
          <p class="type-label">Robusta</p>
          <h3 class="name" style="color: var(--color-text-dark);">Gunung Tanggamus</h3>
          <div class="stars">★★★★★</div>
          <p class="price" style="color: var(--color-text-dark);">$49</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Products grid section
</script>
