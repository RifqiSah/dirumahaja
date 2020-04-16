import { Router } from 'express';
import ItemController from '../controllers/item-controller';

const router = Router();

router.get('/', ItemController.index);
router.post('/', ItemController.store);
router.get('/:id', ItemController.show);
router.put('/:id', ItemController.update);
router.delete('/:id', ItemController.delete);

export default router;