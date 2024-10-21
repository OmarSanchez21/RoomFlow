import { Router } from "express";
import ClienteControllers from "../controllers/cliente";
import { validateCl } from "../middleware/validations/val_cliente"

const ClienteRouter = Router();

ClienteRouter.get('/', ClienteControllers.getAll);
ClienteRouter.get('/:id', ClienteControllers.getOne);
ClienteRouter.put('/:id', validateCl, ClienteControllers.Edit);
ClienteRouter.delete('/:id', ClienteControllers.Delete);

export default ClienteRouter;