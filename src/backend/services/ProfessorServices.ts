import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ProfessorServices {
    async create(data: any) {
        return prisma.professor.create({ data });
    }

    async getAll() {
        return prisma.professor.findMany();
    }

    async getById(id: string) {
        return prisma.professor.findUnique({ where: { id } });
    }

    async update(id: string, data: any) {
        return prisma.professor.update({ where: { id }, data });
    }

    async delete(id: string) {
        return prisma.professor.delete({ where: { id } });
    }
}

export default new ProfessorServices();