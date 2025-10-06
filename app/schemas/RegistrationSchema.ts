import * as z from "zod";

export const registrationSchema = z.object({
  student_id: z.coerce
    .number({
      required_error: "El número de control es requerido.",
      invalid_type_error: "Debe ser un número.",
    })
    .int()
    .positive("El número de control debe ser válido."),

  first_name: z.string().min(1, "El nombre es requerido."),
  last_name: z.string().min(1, "Los apellidos son requeridos."),
  career: z.string().min(1, "La carrera es requerida."),

  semester: z.coerce
    .number({
      required_error: "El semestre es requerido.",
      invalid_type_error: "Debe ser un número.",
    })
    .int()
    .min(1, "El semestre debe ser al menos 1.")
    .max(12, "El semestre no puede ser mayor a 12."),

  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres."),
});

export type RegistrationForm = z.infer<typeof registrationSchema>;
