<template>
  <section class="section-padding bg-white">
    <div class="container-elegant">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left: Stats -->
        <div class="grid grid-cols-2 gap-8">
          <!-- Offline Store Count -->
          <div class="text-center md:text-left">
            <div class="text-6xl md:text-7xl font-black mb-2" style="color: var(--color-primary);">48</div>
            <p class="font-bold text-lg mb-1" style="color: var(--color-text-dark);">Offline Store in This Country</p>
            <p class="body-text text-sm" style="color: var(--color-text-muted);">
              Our dedicated team of 120 employees passionately serve our customers
            </p>
          </div>

          <!-- Employees -->
          <div class="text-center md:text-left">
            <div class="flex items-center gap-3 mb-2 justify-center md:justify-start">
              <svg class="w-12 h-12" style="color: var(--color-primary);" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
              <span class="text-4xl font-black" style="color: var(--color-primary);">120</span>
            </div>
            <p class="font-bold text-lg mb-1" style="color: var(--color-text-dark);">Employees</p>
            <p class="body-text text-sm" style="color: var(--color-text-muted);">
              Celebrating a decade of excellence,we've been keeping our customers for past customers
            </p>
          </div>

          <!-- Years in Business -->
          <div class="text-center md:text-left col-span-2 md:col-span-1">
            <div class="flex items-center gap-3 mb-2 justify-center md:justify-start">
              <svg class="w-12 h-12" style="color: var(--color-primary);" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
              </svg>
              <span class="text-4xl font-black" style="color: var(--color-primary);">10</span>
            </div>
            <p class="font-bold text-lg mb-1" style="color: var(--color-text-dark);">Years in Business</p>
            <p class="body-text text-sm" style="color: var(--color-text-muted);">
              A decade of brewing excellence and exceptional service
            </p>
          </div>
        </div>

        <!-- Right: USA Map Illustration -->
        <div class="relative flex items-center justify-center">
          <svg class="w-full h-auto max-w-md" viewBox="0 0 500 350" fill="none">
            <!-- USA Map simplified outline -->
            <path d="M50 100 L100 80 L150 90 L200 70 L250 80 L300 75 L350 85 L400 90 L450 100 L440 150 L430 200 L400 220 L350 230 L300 240 L250 235 L200 230 L150 240 L100 230 L70 200 L50 150 Z"
                  :fill="'var(--color-surface)'"
                  :stroke="'var(--color-primary)'"
                  stroke-width="2"/>

            <!-- Location pins -->
            <circle cx="150" cy="150" r="6" :fill="'var(--color-accent)'" />
            <circle cx="200" cy="180" r="6" :fill="'var(--color-accent)'" />
            <circle cx="280" cy="160" r="6" :fill="'var(--color-accent)'" />
            <circle cx="350" cy="140" r="6" :fill="'var(--color-accent)'" />
            <circle cx="320" cy="200" r="6" :fill="'var(--color-accent)'" />
            <circle cx="250" cy="190" r="6" :fill="'var(--color-accent)'" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Stats bar with numbers and map
</script>
