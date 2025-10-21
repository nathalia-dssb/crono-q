<script setup lang="ts">
import { MapPin } from "lucide-vue-next";
import type { CurrentEvent } from "~/types/admi-events";

const props = defineProps<{
  eventData: CurrentEvent;
}>();
</script>

<template>
  <Card
    class="w-full bg-background text-zinc-50 border-0 shadow-none justify-center items-center flex"
  >
    <CardHeader class="flex flex-row justify-center gap-6 items-center">
      <div class="flex flex-col text-center">
        <span class="font-light text-secondary text-lg">Turno actual</span>
        <span class="text-6xl font-bold"> #{{ eventData.currentSpot }} </span>
      </div>
      <div class="flex flex-col">
        <CardTitle class="text-2xl md:text-nowrap">
          {{ eventData.eventName }}
        </CardTitle>
        <div class="flex flex-row text-secondary">
          <MapPin class="mr-2 h-4 w-4" />
          {{ eventData.location }}
        </div>
      </div>
    </CardHeader>
    <CardFooter class="flex flex-row gap-4">
      <Button variant="destructive">Terminar evento</Button>
      <Button variant="secondary">Escanear turno</Button>
    </CardFooter>
  </Card>
</template>
