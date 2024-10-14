import { Router } from "express";
import EmpleadoControllers from "../controllers/empleado";
import { validateEmp } from "../middleware/validations/val_empleado";

const EmpleadoRouter = Router();

EmpleadoRouter.get('/', EmpleadoControllers.getAll);
EmpleadoRouter.get('/:id', EmpleadoControllers.getOne);
EmpleadoRouter.put('/:id', validateEmp, EmpleadoControllers.Edit);
EmpleadoRouter.delete('/:id', EmpleadoControllers.Delete);

export default EmpleadoRouter;