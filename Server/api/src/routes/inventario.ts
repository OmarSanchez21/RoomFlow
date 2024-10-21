import {Router} from 'express';
import InventarioControllers from '../controllers/inventario';
import { validate } from '../middleware/validations/val_Inventario';
const InventarioRouter = Router();

InventarioRouter.get('/', InventarioControllers.getAll);
InventarioRouter.get('/:id', InventarioControllers.getOne);
InventarioRouter.post('/', validate ,InventarioControllers.Save);
InventarioRouter.put('/:id', validate, InventarioControllers.Edit);
InventarioRouter.delete('/:id', InventarioControllers.Delete);

export default InventarioRouter;