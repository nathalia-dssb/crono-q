<script setup lang="ts">
import { StreamBarcodeReader } from "vue-barcode-reader";

const onDecode = (text: string) => {
  console.log(`Decode text from QR code is ${text}`);
};
const onLoaded = () => {
  console.log(`Ready to start scanning barcodes`);
};
</script>

<template>
  <div class="w-full flex justify-center items-center">
    <StreamBarcodeReader
      @decode="onDecode"
      @loaded="onLoaded"
      class="w-100 h-100 items-center flex justify-center bg-primary"
    ></StreamBarcodeReader>
  </div>
</template>
