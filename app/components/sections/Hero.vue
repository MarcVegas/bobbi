<template>
  <section class="relative h-screen min-h-[600px] overflow-hidden">
    <!-- Parallax Background -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      :style="{
        backgroundImage: `url(https://images.unsplash.com/photo-1624893464636-c122891445c6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        transform: `translateY(${offset}px)`,
        willChange: 'transform',
      }"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

    <!-- Content -->
    <div class="relative h-full flex items-center justify-center text-center container-elegant">
      <div class="max-w-3xl animate-slide-up">
        <h1 class="font-serif text-display-lg md:text-[5rem] font-bold text-white mb-6 leading-tight">
          Experience Elegance<br />in Every Sip
        </h1>
        <p class="text-xl md:text-2xl text-white/90 mb-8 font-light">
          Premium matcha, artisanal coffee, and handcrafted pastries
        </p>
        <a
          href="#menu"
          class="btn-elegant inline-block text-lg"
        >
          Explore Menu
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <ChevronDownIcon class="w-8 h-8 text-white" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
import { useParallax } from '~/composables/useParallax';

const { offset } = useParallax(0.5);
</script>
