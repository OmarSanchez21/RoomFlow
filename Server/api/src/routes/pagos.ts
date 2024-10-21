import { Router } from "express";
import PagosControllers from "../controllers/pagos";
const PagoRouter = Router();

PagoRouter.get('/', PagosControllers.getAllbyClient);
PagoRouter.get('/:id', PagosControllers.getOne);
PagoRouter.post('/', PagosControllers.Save);
PagoRouter.delete('/:id', PagosControllers.Delete);
export default PagoRouter