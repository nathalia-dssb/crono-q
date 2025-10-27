<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { useVModel } from "@vueuse/core";
import { cn } from "~/lib/utils";

const props = defineProps<{
  defaultValue?: string;
  modelValue?: string;
  class?: HTMLAttributes["class"];
}>();

const emits = defineEmits<{
  (e: "update:modelValue", payload: string): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});
</script>

<template>
  <input
    v-model="modelValue"
    type="time"
    data-slot="input"
    :class="
      cn(
        'file:text-foreground text-foreground placeholder:text-muted-foreground placeholder:justify-center text-2xl placeholder:content-center placeholder:py-2 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border flex h-10 justify-center w-full min-w-0 rounded-md border-secondary bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 p-2',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        props.class
      )
    "
  />
</template>

<style scoped>
input[type="time"]::-webkit-calendar-picker-indicator {
  display: none;
}
</style>
