import ClienteAuth from "../middleware/auth/clienteauth";
import EmpleadoAuth from "../middleware/auth/empleado";
import { Router } from "express";
import { validateCl } from "../middleware/validations/val_cliente";
import { validateEmp } from "../middleware/validations/val_empleado";


const AuthRouter = Router();

AuthRouter.post("/login/cliente", ClienteAuth.Login);
AuthRouter.post("/login/empleado", EmpleadoAuth.Login);
AuthRouter.post("/register/cliente",validateCl, ClienteAuth.Register);
AuthRouter.post("/register/empleado",validateEmp , EmpleadoAuth.Register);

export default AuthRouter;