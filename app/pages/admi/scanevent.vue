<script setup lang="ts">
import { ArrowLeft } from "lucide-vue-next";
import { StreamBarcodeReader } from "vue-barcode-reader";

const onDecode = (text: string) => {
  console.log(`Decode text from QR code is ${text}`);
};
const onLoaded = () => {
  console.log(`Ready to start scanning barcodes`);
};
</script>

<template>
  <div class="w-full flex flex-col justify-center items-center gap-6 px-4">
    <div class="flex flex-row gap-2 justify-center w-full relative">
      <div class="flex absolute left-0">
        <Button variant="ghost" class="text-secondary rounded-full">
          <ArrowLeft />
        </Button>
      </div>

      <h1 class="text-secondary text-2xl md:text-4xl text-center">
        Nombre del evento
      </h1>
    </div>
    <div class="h-[80vh] flex justify-center items-center content-center">
      <StreamBarcodeReader
        @decode="onDecode"
        @loaded="onLoaded"
        class="w-80 h-80 md:w-100 md:h-100 items-center flex justify-center bg-primary"
      ></StreamBarcodeReader>
    </div>
  </div>
</template>
