<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";

import { Button } from "~/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { ArrowLeft } from "lucide-vue-next";
import { eventSchema, type EventForm } from "~/schemas/EventSchema";
import TimeInput from "~/components/ui/timepicker/time-input.vue";
import { DatePicker } from "~/components/ui/datepicker";

const formSchema = toTypedSchema(eventSchema);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values: EventForm) => {
  console.log(values);
});
</script>

<template>
  <div class="flex flex-row gap-2 justify-center w-full relative">
    <div class="flex absolute left-0">
      <NuxtLink to="/admi">
        <Button variant="ghost" class="text-secondary rounded-full">
          <ArrowLeft />
        </Button>
      </NuxtLink>
    </div>

    <h1 class="text-secondary text-4xl text-center">Añadir evento</h1>
  </div>

  <div
    class="w-full flex flex-col justify-center items-center mt-12 text-foreground h-[80vh]"
  >
    <form
      class="space-y-6 w-1/2 justify-center flex flex-col items-center"
      @submit="onSubmit"
    >
      <FormField v-slot="{ componentField }" name="event_name" class="w-full">
        <FormItem class="w-full">
          <FormControl>
            <Input
              type="text"
              placeholder="Ingrese el nombre del evento"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="location" class="w-full">
        <FormItem class="w-full">
          <FormControl>
            <Input
              type="text"
              placeholder="Ingrese la ubicación del evento"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="day" class="w-full">
        <FormItem class="w-full">
          <FormControl>
            <DatePicker v-bind="componentField" name="day" label="Fecha" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <div class="grid grid-cols-2 gap-4 w-full">
        <FormField v-slot="{ componentField }" name="i_hour" class="w-full">
          <FormItem class="w-full">
            <FormLabel class="text-foreground">Hora de inicio</FormLabel>
            <FormControl>
              <TimeInput v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="f_hour" class="w-full">
          <FormItem class="w-full">
            <FormLabel class="text-foreground">Hora de termino</FormLabel>
            <FormControl>
              <TimeInput v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
      </div>

      <Button type="submit" class="w-1/2 text-xl" variant="secondary">
        Añadir Evento
      </Button>
    </form>
  </div>
</template>
