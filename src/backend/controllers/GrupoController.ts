import { Request, Response } from 'express';
import GrupoServices from '../services/GrupoServices';

class GrupoController {
    async create(req: Request, res: Response) {
        try {
            const grupo = await GrupoServices.create(req.body);
            return res.status(201).json(grupo);
        } catch (error) {
            return res.status(500).json({ message: (error as Error).message });
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const grupos = await GrupoServices.getAll();
            return res.status(200).json(grupos);
        } catch (error) {
            return res.status(500).json({ message: (error as Error).message });
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const grupo = await GrupoServices.getById(id);
            if (grupo) {
                return res.status(200).json(grupo);
            }
            return res.status(404).json({ message: "Grupo not found" });
        } catch (error) {
            return res.status(500).json({ message: (error as Error).message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const grupo = await GrupoServices.update(id, req.body);
            if (grupo) {
                return res.status(200).json(grupo);
            }
            return res.status(404).json({ message: "Grupo not found" });
        } catch (error) {
            return res.status(500).json({ message: (error as Error).message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await GrupoServices.delete(id);
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ message: (error as Error).message });
        }
    }
}

export default new GrupoController();