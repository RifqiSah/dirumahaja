import { Router } from 'express';
import ItemController from '../controllers/item-controller';

const router = Router();

router.get('/', ItemController.index);
router.get('/:id', ItemController.show);
router.post('/', ItemController.store);

export default router;