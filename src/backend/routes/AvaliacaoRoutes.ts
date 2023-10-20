import { Router } from 'express';
import AvaliacaoController from '../controllers/AvaliacaoController';

const router = Router();

router.post('/avaliacoes', AvaliacaoController.create);
router.get('/avaliacoes', AvaliacaoController.getAll);
router.get('/avaliacoes/:id', AvaliacaoController.getById);
router.put('/avaliacoes/:id', AvaliacaoController.update);
router.delete('/avaliacoes/:id', AvaliacaoController.delete);

export default router;