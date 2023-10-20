import { Request, Response } from "express";
import ProfessorServices from "../services/ProfessorServices";

class ProfessorController {
    async create(req: Request, res: Response) {
        try {
            const professor = await ProfessorServices.create(req.body);
            return res.status(201).json(professor);
        } catch (error) {
            return res.status(500).json({ message: (error as Error).message });
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const professores = await ProfessorServices.getAll();
            return res.status(200).json(professores);
        } catch (error) {
            return res.status(500).json({ message: (error as Error).message });
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const professor = await ProfessorServices.getById(id);
            if (professor) {
                return res.status(200).json(professor);
            }
            return res.status(404).json({ message: "Professor not found" });
        } catch (error) {
            return res.status(500).json({ message: (error as Error).message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const professor = await ProfessorServices.update(id, req.body);
            if (professor) {
                return res.status(200).json(professor);
            }
            return res.status(404).json({ message: "Professor not found" });
        } catch (error) {
            return res.status(500).json({ message: (error as Error).message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await ProfessorServices.delete(id);
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ message: (error as Error).message });
        }
    }
}

export default new ProfessorController();