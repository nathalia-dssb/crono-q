<script setup>
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
</script>

<template>
  <div class="flex w-full px-12 h-200 items-center relative overflow-clip">
    <div class="blob-outer-container">
      <div class="blob-inner-container">
        <div class="blob"></div>
      </div>
    </div>
    <DotLottieVue
      style="height: 500px; width: 500px"
      class="z-1"
      autoplay
      loop
      src="https://lottie.host/8a08465d-0879-4b05-a259-8e4b4805e967/aWC5Fts7wB.lottie"
    />
    <div class="w-full h-full flex justify-center items-center z-1">
      <h1 class="text-6xl text-foreground">
        <p>Administra tus filas de manera:</p>
        <Typer :words="['rápida', 'sencilla', 'ágil', 'sin esperas']" />
      </h1>
    </div>
  </div>
</template>

<style scoped>
.blob-outer-container {
  position: absolute;
  right: 0;
  height: 200px;
  width: 100px;
  z-index: 0;
  inset: 0;
  margin: auto;
  filter: blur(100px);
  opacity: 0.8;
}

.blob-inner-container {
  border-radius: 9999px;
  position: absolute;
  inset: 0;
  margin: auto;
  max-height: 800px;
  height: 800px;
  width: 100vw;
  overflow: hidden;
  background-color: #1c1427;
  transform: scale(0.8);
}

.blob {
  position: absolute;
  overflow: hidden;
  height: 800px;
  width: 100vw;
  inset: 0;
  margin: auto;
  background: conic-gradient(from 0deg, #97feed, #0b666a, #4c00ff, #1c1427);
  animation: spinBlob 8s linear infinite;
}

@keyframes spinBlob {
  0% {
    transform: rotate(0deg) scale(2);
  }

  100% {
    transform: rotate(1turn) scale(2);
  }
}
</style>
