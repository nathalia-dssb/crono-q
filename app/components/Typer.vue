<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const props = withDefaults(
  defineProps<{
    words: string[];
    period?: number;
  }>(),
  {
    period: 2000,
  }
);

const textToDisplay = ref("");
const loopIndex = ref(0);
const isDeleting = ref(false);
let timeoutId: ReturnType<typeof setTimeout> | null = null;

const tick = () => {
  const i = loopIndex.value % props.words.length;
  const fullTxt = props.words[i] ?? "";

  if (isDeleting.value) {
    textToDisplay.value = fullTxt.substring(0, textToDisplay.value.length - 1);
  } else {
    textToDisplay.value = fullTxt.substring(0, textToDisplay.value.length + 1);
  }

  let delta = 200 - Math.random() * 100;
  if (isDeleting.value) {
    delta /= 2;
  }

  if (!isDeleting.value && textToDisplay.value === fullTxt) {
    delta = props.period;
    isDeleting.value = true;
  } else if (isDeleting.value && textToDisplay.value === "") {
    isDeleting.value = false;
    loopIndex.value++;
    delta = 500;
  }

  timeoutId = setTimeout(tick, delta);
};

onMounted(() => {
  tick();
});

onUnmounted(() => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
});
</script>

<template>
  <span
    class="typing-effect"
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
  >
    <span class="wrap text-secondary">{{ textToDisplay }}</span>
    <span
      class="cursor"
      v-motion
      :initial="{ opacity: 1 }"
      :enter="{
        opacity: 0,
        transition: { repeat: Infinity, duration: 800, ease: 'linear' },
      }"
      >|</span
    >
  </span>
</template>

<style scoped>
.typing-effect {
  display: inline-block;
}
.cursor {
  margin-left: 0.1em;
  font-weight: bold;
  color: #97feed;
}
</style>
