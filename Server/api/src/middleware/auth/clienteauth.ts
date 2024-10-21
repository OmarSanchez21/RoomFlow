import { Request, Response} from 'express';
import ClienteModel from '../../models/clientes';
import { logError } from '../../util/logs';
import { createErrorResponse, createSuccessResponse } from '../../util/apiResponse';
import { hashPassword, verifyPassword } from '../../util/bcrypt';
import { createJwtToken } from '../../util/jwt';
import { encryptData } from '../../util/hash';

const ClienteAuth = {
    Register: async (req: Request, res: Response, next: any) => {
        try {
            const { documentacion, nombre, email, password, telefono, direccion} = req.body;
            const exists = await ClienteModel.findOne({ documentacion, nombre, email })
            if(exists){
               return  res.status(401).json(createErrorResponse('Empleado ya existe'));
            }
            const hashedP = await hashPassword(password);
            const hashedD = await encryptData(documentacion);
            const emp = new ClienteModel({
                documentacion: hashedD,
                nombre,
                email,
                password: hashedP,
                telefono,
                direccion,
                fecharegistro: Date.now()
            });
            const saved = await emp.save();
            if(!saved){
                return res.status(401).json(createErrorResponse('Error al guardar empleado'));
            }
            return res.status(201).json(createSuccessResponse('Empleado registrado', 201, saved));
            } catch (error) {
                logError(`Registro de Empleado ${error}`);
                return res.status(500).json(createErrorResponse('Error interno'));
            }
        },
        Login: async (req: Request, res: Response) => {
            try {
                const { email, password } = req.body;
                const user = await ClienteModel.findOne({ email })
                if(!user){
                    return res.status(401).json(createErrorResponse('Usuario no encontrado'));
                }
                const isMatch = await verifyPassword(password, user.password);
                if(!isMatch){
                    return res.status(401).json(createErrorResponse('Contraseña incorrecta'));
                }
                const token = createJwtToken(user);
                return res.status(200).json(createSuccessResponse('Login exitoso', 200, token ));
            } catch (error) {
                logError(`Login de Empleado ${error}`);
                return res.status(500).json(createErrorResponse('Error interno'));
            }
        }
    }

    export default ClienteAuth;