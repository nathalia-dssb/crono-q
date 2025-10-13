<script setup lang="ts">
import QrcodeVue from "qrcode.vue";
import { computed } from "vue";

const props = defineProps<{
  turnId: number | string;
}>();

const turnInformation = computed(() => {
  return `/admi/${props.turnId}`;
});
</script>

<template>
  <div>
    <QrcodeVue :value="turnInformation" :size="200" render-as="svg" level="H" />
  </div>
</template>
