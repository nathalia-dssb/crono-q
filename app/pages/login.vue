<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { loginSchema, type LoginForm } from "~/schemas/LoginSchema";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

definePageMeta({
  layout: "landing",
});

const formSchema = toTypedSchema(loginSchema);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values: LoginForm) => {
  console.log("Form submitted!", values);
});
</script>

<template>
  <div
    class="w-full flex flex-col justify-center items-center text-foreground text-4xl gap-8 h-[80vh]"
  >
    <h1 class="font-medium">Iniciar Sesión</h1>

    <form
      class="space-y-6 w-1/2 justify-center flex flex-col items-center"
      @submit="onSubmit"
    >
      <FormField v-slot="{ componentField }" name="student_id" class="w-full">
        <FormItem class="w-full">
          <FormControl>
            <Input
              type="number"
              placeholder="Ingresa tu expediente"
              v-bind="componentField"
              class="no-spinner"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="password" class="w-full">
        <FormItem class="w-full">
          <FormControl>
            <Input
              type="password"
              v-bind="componentField"
              placeholder="Ingresa tu clave de acceso"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <Button type="submit" class="w-1/2 text-xl" variant="secondary">
        Ingresar
      </Button>
    </form>
  </div>
</template>
