import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

function generateToken(id: string) {
  return jwt.sign({ id }, 'yourSecretKey', { expiresIn: '1h' });
}

class AuthService {
  async authenticateAluno(matricula: string, senha: string) {
    const aluno = await prisma.aluno.findFirst({
      where: { matriculaAluno: matricula },
    });

    if (!aluno) {
      throw new Error("Matrícula de aluno não existe.");
    }

    if (aluno.senha !== senha) {
      throw new Error("Senha incorreta.");
    }

    const token = generateToken(aluno.id);
    return { token, tipo: 'aluno' };
  }

  async authenticateProfessor(matricula: string, senha: string) {
    const professor = await prisma.professor.findFirst({
      where: { matriculaProfessor: matricula },
    });

    if (!professor) {
      throw new Error("Matrícula de professor não existe.");
    }

    if (professor.senha !== senha) {
      throw new Error("Senha incorreta.");
    }

    const token = generateToken(professor.id);
    return { token, tipo: 'professor' };
  }
}

export default new AuthService();
