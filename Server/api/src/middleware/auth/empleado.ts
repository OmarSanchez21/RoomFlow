import { Request, Response} from 'express';
import EmpleadoModel from '../../models/empleado';
import { logError } from '../../util/logs';
import { createErrorResponse, createSuccessResponse } from '../../util/apiResponse';
import { hashPassword, verifyPassword } from '../../util/bcrypt';
import { createJwtToken } from '../../util/jwt';
import { encryptData } from '../../util/hash';
const EmpleadoAuth = {
    Register: async (req: Request, res: Response, next: any) => {
        try {
            const { cedula, nombre, email, username, password, role, telefono, fCumpleaños, PaisOrigen } = req.body;
            const exists = await EmpleadoModel.findOne({ cedula, username, email })
            if(exists){
               return  res.status(401).json(createErrorResponse('Empleado ya existe'));
            }
            const hashedP = await hashPassword(password);
            const hashedC = await encryptData(cedula);
            const emp = new EmpleadoModel({
                cedula: hashedC,
                nombre,
                email,
                username,
                password: hashedP,
                role,
                telefono,
                fCumpleaños,
                PaisOrigen
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
                const { username, password } = req.body;
                const user = await EmpleadoModel.findOne({ username })
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

    export default EmpleadoAuth;