import { loginSchema } from "~/schemas/LoginSchema";
import { authenticateStudent, authenticateAdmin } from "../../utils/auth";

export default defineEventHandler(async (event) => {
  try {
    // 1. Leer el body de la petición
    const body = await readBody(event);

    // 2. Validar los datos con Zod (discriminatedUnion)
    const validationResult = loginSchema.safeParse(body);

    if (!validationResult.success) {
      throw createError({
        statusCode: 400,
        message: "Datos inválidos",
        data: validationResult.error.errors,
      });
    }

    const credentials = validationResult.data;

    // 3. Autenticar según el tipo de usuario
    let result;

    if (credentials.userType === "student") {
      result = await authenticateStudent(credentials);
    } else if (credentials.userType === "admin") {
      result = await authenticateAdmin(credentials);
    } else {
      throw createError({
        statusCode: 400,
        message: "Tipo de usuario no válido",
      });
    }

    // 4. Retornar la respuesta exitosa
    return result;
  } catch (error: any) {
    // Si ya es un error creado por nosotros, lo lanzamos tal cual
    if (error.statusCode) {
      throw error;
    }

    // Error inesperado del servidor
    console.error("Error en login:", error);
    throw createError({
      statusCode: 500,
      message: "Error interno del servidor",
    });
  }
});