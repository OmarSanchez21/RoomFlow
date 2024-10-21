import { Router } from "express";
import ReservaControllers from "../controllers/reserva";

const ReservaRouter = Router();

ReservaRouter.get('/', ReservaControllers.getAll);
ReservaRouter.get('/:id', ReservaControllers.getOne);
ReservaRouter.post('/', ReservaControllers.Save);
ReservaRouter.delete('/:id', ReservaControllers.Delete);
ReservaRouter.post('/cliente', ReservaControllers.getByClient);
export default ReservaRouter