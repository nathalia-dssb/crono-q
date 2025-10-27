<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";

import { Button } from "~/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import DatePicker from "~/components/ui/datepicker/date-picker.vue";
import TimeInput from "~/components/ui/timepicker/time-input.vue";
import { ArrowLeft } from "lucide-vue-next";
import { eventSchema, type EventForm } from "~/schemas/EventSchema";

const initialEventData: EventForm = {
  event_name: "Evento de Prueba",
  location: "Auditorio Principal",
  day: "2025-12-01",
  i_hour: "09:00",
  f_hour: "11:00",
};

const formSchema = toTypedSchema(eventSchema);

const form = useForm({
  validationSchema: formSchema,
  initialValues: initialEventData,
});

const onSubmit = form.handleSubmit((values: EventForm) => {
  console.log("Form submitted!", values);
});
</script>

<template>
  <div class="flex flex-col w-full min-h-full gap-8">
    <div class="flex flex-row gap-2 justify-center w-full relative">
      <div class="flex absolute left-0">
        <NuxtLink to="/admi">
          <Button variant="ghost" class="text-secondary rounded-full">
            <ArrowLeft />
          </Button>
        </NuxtLink>
      </div>

      <h1 class="text-secondary text-4xl text-center">Editar Evento</h1>
    </div>

    <div class="w-full h-[80vh] flex justify-center items-center">
      <form
        class="space-y-6 md:w-1/2 justify-center flex flex-col items-center h-full"
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
              <FormControl>
                <TimeInput v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="f_hour" class="w-full">
            <FormItem class="w-full">
              <FormControl>
                <TimeInput v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>

        <Button type="submit" class="w-1/2 text-xl" variant="secondary">
          Actualizar Evento
        </Button>
      </form>
    </div>
  </div>
</template>
