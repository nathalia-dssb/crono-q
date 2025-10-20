import { loginSchema } from "~/schemas/LoginSchema";
import { authenticateStudent, authenticateAdmin } from "../../utils/auth";

export default defineEventHandler(async (event) => {
  // 1. Leer y validar el body
  const body = await readBody(event);
  const validationResult = loginSchema.safeParse(body);

  if (!validationResult.success) {
    throw createError({
      statusCode: 400,
      message: "Datos inválidos",
      data: validationResult.error.errors,
    });
  }

  const credentials = validationResult.data;

  // 2. Autenticar según el tipo de usuario
  if (credentials.userType === "student") {
    return await authenticateStudent(credentials);
  } else {
    return await authenticateAdmin(credentials);
  }
});