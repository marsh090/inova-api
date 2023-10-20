import { Router } from "express";
import AuthController from "../controllers/AuthController";

const router = Router();

router.post('/aluno', AuthController.loginAluno);
router.post('/professor', AuthController.loginProfessor);

export default router;
