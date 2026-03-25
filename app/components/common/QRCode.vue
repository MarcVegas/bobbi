<template>
  <div class="qr-code-wrapper">
    <canvas ref="qrCanvas" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import QRCodeLib from 'vue-qrcode';

interface Props {
  value: string;
  size?: number;
  bgColor?: string;
  fgColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 256,
  bgColor: '#ffffff',
  fgColor: '#5aa84a', // matcha green
});

const qrCanvas = ref<HTMLCanvasElement | null>(null);

const generateQR = () => {
  if (!qrCanvas.value) return;

  // Use QRCode library to generate
  const QRCode = require('qrcode');

  QRCode.toCanvas(
    qrCanvas.value,
    props.value,
    {
      width: props.size,
      margin: 2,
      color: {
        dark: props.fgColor,
        light: props.bgColor,
      },
    },
    (error: Error) => {
      if (error) console.error('QR Code generation error:', error);
    }
  );
};

onMounted(() => {
  generateQR();
});

watch(() => props.value, () => {
  generateQR();
});
</script>

<style scoped>
.qr-code-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

canvas {
  border-radius: 0.5rem;
}
</style>
