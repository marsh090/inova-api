import { Request, Response } from "express";
import AlunoServices from "../services/AlunoServices";

class AlunoController {
    async create(req: Request, res: Response) {
        try {
            const aluno = await AlunoServices.create(req.body);
            return res.status(201).json(aluno);
        } catch (error) {
            return res.status(500).json({ message: (error as Error).message });
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const alunos = await AlunoServices.getAll();
            return res.status(200).json(alunos);
        } catch (error) {
            return res.status(500).json({ message: (error as Error).message });
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const aluno = await AlunoServices.getById(id);
            if (aluno) {
                return res.status(200).json(aluno);
            }
            return res.status(404).json({ message: "Aluno not found" });
        } catch (error) {
            return res.status(500).json({ message: (error as Error).message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const aluno = await AlunoServices.update(id, req.body);
            if (aluno) {
            return res.status(200).json(aluno);
            }
            return res.status(404).json({ message: "Aluno not found" });
        } catch (error) {
            return res.status(500).json({ message: (error as Error).message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await AlunoServices.delete(id);
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ message: (error as Error).message });
        }
    }
}

export default new AlunoController();
