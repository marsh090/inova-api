import { Request, Response } from 'express';
import AvaliacaoServices from '../services/AvaliacaoServices';

class AvaliacaoController {
    async create(req: Request, res: Response) {
        try {
            const avaliacao = await AvaliacaoServices.create(req.body);
            return res.status(201).json(avaliacao);
        } catch (error) {
            return res.status(500).json({ message: (error as Error).message });
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const avaliacoes = await AvaliacaoServices.getAll();
            return res.status(200).json(avaliacoes);
        } catch (error) {
            return res.status(500).json({ message: (error as Error).message });
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const avaliacao = await AvaliacaoServices.getById(id);
            if (avaliacao) {
                return res.status(200).json(avaliacao);
            }
            return res.status(404).json({ message: "Avaliação not found" });
        } catch (error) {
            return res.status(500).json({ message: (error as Error).message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const avaliacao = await AvaliacaoServices.update(id, req.body);
            if (avaliacao) {
                return res.status(200).json(avaliacao);
            }
            return res.status(404).json({ message: "Avaliação not found" });
        } catch (error) {
            return res.status(500).json({ message: (error as Error).message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await AvaliacaoServices.delete(id);
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ message: (error as Error).message });
        }
    }
}

export default new AvaliacaoController();