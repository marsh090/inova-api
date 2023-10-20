import { Router } from 'express';
import ProfessorController from '../controllers/ProfessorController';

const router = Router();

router.post('/', ProfessorController.create);
router.get('/professores', ProfessorController.getAll);
router.get('/:id', ProfessorController.getById);
router.put('/:id', ProfessorController.update);
router.delete('/:id', ProfessorController.delete);

export default router;