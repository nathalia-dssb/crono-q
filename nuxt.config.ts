import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["reka-ui"],
    },
  },
  modules: ["@nuxt/ui", "shadcn-nuxt"],
  shadcn: {
    prefix: "",
    componentDir: "./app/components/ui",
  },
});
