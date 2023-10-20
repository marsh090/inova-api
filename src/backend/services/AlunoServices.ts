import { PrismaClient, Aluno } from '@prisma/client';

const prisma = new PrismaClient();

class AlunoServices {
    async create(data: Aluno): Promise<Aluno> {
        return prisma.aluno.create({ data });
    }

    async getAll(): Promise<Aluno[]> {
        return prisma.aluno.findMany();
    }

    async getById(id: string): Promise<Aluno | null> {
        return prisma.aluno.findUnique({ where: { id } });
    }

    async update(id: string, data: Partial<Aluno>): Promise<Aluno> {
        return prisma.aluno.update({ where: { id }, data });
    }

    async delete(id: string): Promise<void> {
        await prisma.aluno.delete({ where: { id } });
    }
}

export default new AlunoServices();
