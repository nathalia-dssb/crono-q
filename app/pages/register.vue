<script setup lang="ts">
import { h } from "vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import {
  registrationSchema,
  type RegistrationForm,
} from "~/schemas/RegistrationSchema";

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

const formSchema = toTypedSchema(registrationSchema);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values: RegistrationForm) => {
  console.log("Form submitted!", values);
});
</script>

<template>
  <div
    class="w-full flex flex-col justify-center items-center text-foreground text-4xl px-18 gap-8 h-[80vh]"
  >
    <h1>Regístrate</h1>
    <form
      class="space-y-6 w-2/3 justify-center flex flex-col items-center"
      @submit="onSubmit"
    >
      <FormField v-slot="{ componentField }" name="student_id" class="w-full">
        <FormItem class="w-full">
          <FormControl>
            <Input
              type="number"
              placeholder="Ingresa tu expediente"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="first_name" class="w-full">
        <FormItem class="w-full">
          <FormControl>
            <Input
              type="text"
              placeholder="Ingresa tu nombre"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="last_name">
        <FormItem class="w-full">
          <FormControl>
            <Input
              type="text"
              placeholder="Ingresa tus apellidos"
              v-bind="componentField"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <div class="w-full flex flex-row gap-8">
        <FormField v-slot="{ componentField }" name="career" class="w-full">
          <FormItem class="w-full">
            <FormControl>
              <Input
                type="text"
                placeholder="Ingresa tu carrera"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="semester" class="w-full">
          <FormItem class="w-50">
            <FormControl>
              <Input
                type="number"
                placeholder="Semestre"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
      </div>

      <FormField v-slot="{ componentField }" name="password">
        <FormItem class="w-full">
          <FormControl>
            <Input
              type="password"
              v-bind="componentField"
              placeholder="Ingresa tu contraseña"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <Button type="submit" class="w-1/2 text-xl" variant="secondary">
        Registrarse
      </Button>
    </form>
  </div>
</template>
