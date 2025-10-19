import bcrypt from "bcrypt";
import prisma from "../../lib/prisma";
import type { StudentLoginForm, AdminLoginForm } from "~/schemas/LoginSchema";

// Tipo de respuesta exitosa
export interface AuthSuccessResponse {
  success: true;
  message: string;
  data: {
    userType: "student" | "admin";
    id: number;
    [key: string]: any;
  };
}

/**
 * Autentica un estudiante
 */
export async function authenticateStudent(
  credentials: StudentLoginForm
): Promise<AuthSuccessResponse> {
  const { student_id, password } = credentials;

  // Buscar estudiante en la base de datos
  const student = await prisma.students.findUnique({
    where: { student_id },
  });

  // Verificar si existe
  if (!student) {
    throw createError({
      statusCode: 401,
      message: "Credenciales incorrectas",
    });
  }

  // Verificar contraseña
  const isPasswordValid = await bcrypt.compare(password, student.password);

  if (!isPasswordValid) {
    throw createError({
      statusCode: 401,
      message: "Credenciales incorrectas",
    });
  }

  // Retornar datos del estudiante (sin contraseña)
  return {
    success: true,
    message: "Login exitoso",
    data: {
      userType: "student",
      id: student.student_id,
      student_id: student.student_id,
      first_name: student.first_name,
      last_name: student.last_name,
      career: student.career,
      semester: student.semester,
    },
  };
}

/**
 * Autentica un administrador
 */
export async function authenticateAdmin(
  credentials: AdminLoginForm
): Promise<AuthSuccessResponse> {
  const { admin_id, password } = credentials;

  // Buscar administrador en la base de datos
  const admin = await prisma.admins.findUnique({
    where: { admin_id },
  });

  // Verificar si existe
  if (!admin) {
    throw createError({
      statusCode: 401,
      message: "Credenciales incorrectas",
    });
  }

  // Verificar contraseña
  const isPasswordValid = await bcrypt.compare(password, admin.password);

  if (!isPasswordValid) {
    throw createError({
      statusCode: 401,
      message: "Credenciales incorrectas",
    });
  }

  // Retornar datos del administrador (sin contraseña)
  return {
    success: true,
    message: "Login exitoso",
    data: {
      userType: "admin",
      id: admin.admin_id,
      admin_id: admin.admin_id,
    },
  };
}

/**
 * Hashea una contraseña con bcrypt
 * Útil para crear usuarios o cambiar contraseñas
 */
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}
