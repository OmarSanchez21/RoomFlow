import {Router} from 'express';
import Servc_CategoriaControllers from '../controllers/servc_categoria';

const Servc_CategoriaRouter = Router();

Servc_CategoriaRouter.get('/', Servc_CategoriaControllers.getAllCategoria);
Servc_CategoriaRouter.get('/:id', Servc_CategoriaControllers.getOneCategoria);

export default Servc_CategoriaRouter;