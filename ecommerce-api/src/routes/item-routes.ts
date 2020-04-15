import { Router } from 'express';
import ItemController from '../controllers/item-controller';

const router = Router();

router.get('/', ItemController.index);
router.post('/', ItemController.store);
router.get('/:id', ItemController.show);
router.patch('/:id', ItemController.update);

export default router;