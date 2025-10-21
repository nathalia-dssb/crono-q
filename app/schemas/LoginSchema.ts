import * as z from "zod";

// Schema base para login
const baseLoginSchema = z.object({
  userType: z.enum(["student", "admin"], {
    required_error: "El tipo de usuario es requerido.",
    invalid_type_error: "Tipo de usuario inválido.",
  }),
  password: z.string().min(1, "La contraseña es requerida."),
});

// Schema específico para estudiantes
export const studentLoginSchema = baseLoginSchema.extend({
  userType: z.literal("student"),
  student_id: z.coerce.number({
    required_error: "El número de control es requerido.",
    invalid_type_error: "Debe ser un número.",
  }),
});

// Schema específico para administradores
export const adminLoginSchema = baseLoginSchema.extend({
  userType: z.literal("admin"),
  admin_id: z.coerce.number({
    required_error: "El ID de administrador es requerido.",
    invalid_type_error: "Debe ser un número.",
  }),
});

// Schema discriminado que valida según el tipo de usuario
export const loginSchema = z.discriminatedUnion("userType", [
  studentLoginSchema,
  adminLoginSchema,
]);

// Tipos exportados
export type StudentLoginForm = z.infer<typeof studentLoginSchema>;
export type AdminLoginForm = z.infer<typeof adminLoginSchema>;
export type LoginForm = z.infer<typeof loginSchema>;
