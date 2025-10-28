<script setup lang="ts">
import type { DateValue } from "@internationalized/date";
import {
  DateFormatter,
  getLocalTimeZone,
  parseDate,
} from "@internationalized/date";
import { CalendarIcon } from "lucide-vue-next";

import { ref, watch } from "vue";
import { cn } from "~/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const df = new DateFormatter("es-ES", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

const props = defineProps<{
  modelValue?: string;
  label?: string;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const value = ref<DateValue | undefined>();

watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal) {
      try {
        value.value = parseDate(newVal);
      } catch (e) {
        console.warn("Invalid date format provided to date picker:", newVal);
      }
    }
  },
  { immediate: true }
);

watch(
  () => value.value,
  (newVal) => {
    if (newVal) {
      const date = newVal.toDate(getLocalTimeZone());
      const isoString = date.toISOString().split("T")[0]!;
      emit("update:modelValue", isoString);
    }
  }
);
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <button
        variant="ghost"
        :class="
          cn(
            'justify-start text-left font-normal text-foreground border border-secondary text-2xl items-center gap-4 flex flex-row p-2 rounded-md w-full',
            !value && 'text-foreground'
          )
        "
      >
        <CalendarIcon class="mr-2 h-4 w-4" />
        {{
          value
            ? df.format(value.toDate(getLocalTimeZone()))
            : "Selecciona una fecha"
        }}
      </button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <Calendar v-model="value" initial-focus />
    </PopoverContent>
  </Popover>
</template>
