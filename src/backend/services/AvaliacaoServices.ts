import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class AvaliacaoServices {
    async create(data: any) {
        return prisma.avaliacao.create({ data });
    }

    async getAll() {
        return prisma.avaliacao.findMany();
    }

    async getById(id: string) {
        return prisma.avaliacao.findUnique({ where: { id } });
    }

    async update(id: string, data: any) {
        return prisma.avaliacao.update({ where: { id }, data });
    }

    async delete(id: string) {
        return prisma.avaliacao.delete({ where: { id } });
    }
}

export default new AvaliacaoServices();