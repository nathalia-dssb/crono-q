<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";
import TurnQRCode from "~/components/TurnQRCode.vue";

const now = new Date();
const futureTime = new Date(now.getTime() + 15 * 60000);

const mySpot = ref({
  userSpot: 125,
  eventName: "Inscripción a Talleres",
  currentSpot: 110,
  waitingTime: futureTime,
  location: "Edificio A, Sala de Juntas",
});

const myEvent = ref({
  eventId: 42,
  eventName: "Inscripción a Talleres",
  startDate: new Date("2025-11-20T09:00:00"),
  location: "Edificio A, Sala de Juntas",
});

const isVisible = ref(false);
const innerContainer = ref(null);

onClickOutside(innerContainer, () => {
  if (isVisible.value) {
    isVisible.value = false;
  }
});

const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};
</script>

<template>
  <div class="relative w-full h-full overflow-x-hidden">
    <div class="flex justify-center items-center flex-col gap-2">
      <CurrentEvent :spot-data="mySpot" />
      <Button variant="secondary" class="text-lg w-40" @click="toggleVisibility"
        >Generar QR</Button
      >

      <div
        class="w-full h-full top-0 bottom-0 right-0 left-0 flex items-center justify-center fixed bg-background/20"
        v-if="isVisible"
      >
        <div
          class="bg-card w-90 h-90 flex justify-center items-center rounded-2xl flex-col gap-4"
          ref="innerContainer"
        >
          <div class="flex flex-col text-center">
            <span class="font-light text-primary text-lg">Tu Turno</span>
            <span class="text-2xl font-bold"> #{{ mySpot.userSpot }} </span>
          </div>
          <TurnQRCode :turn-id="mySpot.userSpot" />
          <Button class="text-xl" @click="toggleVisibility">Cerrar</Button>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-6">
      <div class="px-6 md:w-2/3 flex flex-col gap-4">
        <h3 class="text-secondary text-center text-2xl">Eventos inscritos</h3>
        <RegisteredEventModal :event-data="myEvent" :spot-data="mySpot" />
      </div>
      <div class="px-6 md:w-2/3 flex flex-col gap-4">
        <h3 class="text-secondary text-center text-2xl">Eventos disponibles</h3>
        <UnregisteredEventSummary :event-data="myEvent" />
      </div>
    </div>
  </div>
</template>
