import {Router} from 'express';
import { validate } from '../middleware/validations/val_proveedor';
import ProveedorControllers from '../controllers/proveedor';
const ProveedorRouter = Router();

ProveedorRouter.get('/', ProveedorControllers.getAll);
ProveedorRouter.get('/:id', ProveedorControllers.getOne);
ProveedorRouter.post('/', validate ,ProveedorControllers.Save);
ProveedorRouter.put('/:id', validate, ProveedorControllers.Edit);
ProveedorRouter.delete('/:id', ProveedorControllers.Delete);

export default ProveedorRouter;