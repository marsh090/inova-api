import { Request, Response } from "express";
import AuthService from "../services/AuthService";

class AuthController {
    async loginAluno(req: Request, res: Response) {
        try {
            const { matricula, senha } = req.body;
            const result = await AuthService.authenticateAluno(matricula, senha);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({ message: (error as Error).message });
        }
    }

    async loginProfessor(req: Request, res: Response) {
        try {
            const { matricula, senha } = req.body;
            const result = await AuthService.authenticateProfessor(matricula, senha);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({ message: (error as Error).message });
        }
    }
}

export default new AuthController();
