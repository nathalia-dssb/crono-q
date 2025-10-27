import { z } from "zod";

export const eventSchema = z.object({
  event_name: z
    .string()
    .min(1, { message: "El nombre del evento es requerido" })
    .max(100, { message: "El nombre del evento debe tener máximo 100 caracteres" }),
  location: z
    .string()
    .min(1, { message: "La ubicación es requerida" })
    .max(50, { message: "La ubicación debe tener máximo 50 caracteres" }),
  day: z.string().min(1, { message: "La fecha es requerida" }),
  i_hour: z.string().min(1, { message: "La hora de inicio es requerida" }),
  f_hour: z.string().min(1, { message: "La hora de finalización es requerida" }),
});

export type EventForm = z.infer<typeof eventSchema>;