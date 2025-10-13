<script setup lang="ts">
import { User, Ticket, Clock, MapPin } from "lucide-vue-next";
import type { CurrentSpot } from "~/types/user-spot";

const props = defineProps<{
  spotData: CurrentSpot;
}>();

const formatWaitingTime = (date: Date): string => {
  const now = new Date();
  const diff = Math.max(date.getTime() - now.getTime(), 0);
  const minutes = Math.ceil(diff / (1000 * 60));

  if (minutes < 1) {
    return "Menos de un minuto";
  }
  return `${minutes} min`;
};
</script>

<template>
  <Card class="w-full bg-background text-zinc-50 border-0 shadow-none">
    <CardHeader class="flex flex-row justify-center gap-6 items-center">
      <div class="flex flex-col text-center">
        <span class="font-light text-secondary text-lg">Tu Turno</span>
        <span class="text-6xl font-bold"> #{{ spotData.userSpot }} </span>
      </div>
      <div class="flex flex-col">
        <CardTitle class="text-2xl">
          {{ spotData.eventName }}
        </CardTitle>
        <CardDescription class="flex flex-col p-1 text-secondary">
          <div class="flex flex-row">
            <MapPin class="mr-2 h-4 w-4" />
            {{ spotData.location }}
          </div>

          <div class="flex items-center gap-4">
            <div class="flex items-center">
              <Ticket class="mr-3 h-6 w-6" />
              <span>Turno Actual</span>
            </div>
            <span class="text-2xl text-secondary">
              #{{ spotData.currentSpot }}
            </span>
          </div>
        </CardDescription>
      </div>
    </CardHeader>
    <CardContent>
      <div class="flex flex-col gap-2 justify-center items-center">
        <div class="flex items-center gap-4 w-full md:w-1/4 justify-center">
          <div class="flex items-center">
            <Clock class="mr-3 h-6 w-6" />
            <span class="font-medium">Espera Estimada</span>
          </div>
          <span> ~{{ formatWaitingTime(spotData.waitingTime) }} </span>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
