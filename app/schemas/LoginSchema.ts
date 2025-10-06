import * as z from "zod";

export const loginSchema = z.object({
  student_id: z.coerce.number({
    required_error: "El número de control es requerido.",
    invalid_type_error: "Debe ser un número.",
  }),
  password: z.string().min(1, "La contraseña es requerida."),
});

export type LoginForm = z.infer<typeof loginSchema>;
