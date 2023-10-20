import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class GrupoServices {
    async create(data: any) {
        return prisma.grupo.create({ data });
    }

    async getAll() {
        return prisma.grupo.findMany();
    }

    async getById(id: string) {
        return prisma.grupo.findUnique({ where: { id } });
    }

    async update(id: string, data: any) {
        return prisma.grupo.update({ where: { id }, data });
    }

    async delete(id: string) {
        return prisma.grupo.delete({ where: { id } });
    }
}

export default new GrupoServices();