import {Router} from 'express';
import Inv_CategoriaControllers from '../controllers/inv_categoria';
const Inv_CategoriaRouter = Router();

Inv_CategoriaRouter.get('/', Inv_CategoriaControllers.getAllCategoria);
Inv_CategoriaRouter.get('/:id', Inv_CategoriaControllers.getOneCategoria);

export default Inv_CategoriaRouter;