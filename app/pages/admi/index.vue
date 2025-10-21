<script setup lang="ts">
import { ref } from "vue";
import AdmiUpcomingEvents from "~/components/AdmiUpcomingEvents.vue";

const myEvent = ref({
  eventId: 42,
  currentSpot: 101,
  eventName: "Inscripción a Talleres",
  startDate: new Date("2025-11-20T09:00:00"),
  location: "Edificio A, Sala de Juntas",
});
</script>

<template>
  <div class="w-full min-h-screen relative">
    <AdmiCurrentEvent :event-data="myEvent" />

    <div class="flex flex-col items-center gap-4">
      <h1 class="text-secondary text-center text-2xl">Eventos disponibles</h1>
      <div class="px-6 md:w-2/3 flex flex-col gap-4">
        <AdmiUpcomingEvents :event-data="myEvent" />
      </div>
    </div>

    <footer
      class="w-full items-center flex justify-center fixed p-4 bottom-0 bg-background"
    >
      <Button
        variant="outline"
        class="text-secondary underline hover:text-primary outline-0 shadow-none text-lg"
        >Historial de Eventos</Button
      >
    </footer>
  </div>
</template>
