import {Router} from 'express';
import { validate } from '../middleware/validations/val_servicio';
import ServicioControllers from '../controllers/servicio';
const ServicioRouter = Router();

ServicioRouter.get('/', ServicioControllers.getAll);
ServicioRouter.get('/:id', ServicioControllers.getOne);
ServicioRouter.post('/', validate ,ServicioControllers.Save);
ServicioRouter.put('/:id', validate, ServicioControllers.Edit);
ServicioRouter.delete('/:id', ServicioControllers.Delete);

export default ServicioRouter;