import { Router } from "express";
import SugerenciaControllers from "../controllers/sugerencia";

const SugerenciaRouter = Router();

SugerenciaRouter.get('/', SugerenciaControllers.getAll);
SugerenciaRouter.get('/:id', SugerenciaControllers.getOne);
SugerenciaRouter.post('/', SugerenciaControllers.Save);
SugerenciaRouter.delete('/:id', SugerenciaControllers.Delete);

export default SugerenciaRouter