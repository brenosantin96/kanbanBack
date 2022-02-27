import { Router } from "express";
import * as CardController from '../controllers/CardsController';
const router = Router();

router.post('/login', CardController.login);
router.get('/cards', CardController.listCards);
router.post('/cards', CardController.createCards);
router.put('/cards/:id', CardController.updateCard);
router.delete('/cards/:id', CardController.deleteCard);


export default router;