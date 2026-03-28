<template>
  <div class="qr-code-wrapper">
    <QrcodeVue
      :value="value"
      :size="size"
      :background="bgColor"
      :foreground="fgColor"
      level="H"
      render-as="canvas"
    />
  </div>
</template>

<script setup lang="ts">
import QrcodeVue from 'qrcode.vue';

interface Props {
  value: string;
  size?: number;
  bgColor?: string;
  fgColor?: string;
}

withDefaults(defineProps<Props>(), {
  size: 256,
  bgColor: '#ffffff',
  fgColor: '#1A3A2A', // primary green
});
</script>

<style scoped>
.qr-code-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.qr-code-wrapper :deep(canvas) {
  border-radius: 0.5rem;
}
</style>
