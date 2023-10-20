import { Router } from 'express';
import GrupoController from '../controllers/GrupoController';

const router = Router();

router.post('/grupos', GrupoController.create);
router.get('/grupos', GrupoController.getAll);
router.get('/grupos/:id', GrupoController.getById);
router.put('/grupos/:id', GrupoController.update);
router.delete('/grupos/:id', GrupoController.delete);

export default router;