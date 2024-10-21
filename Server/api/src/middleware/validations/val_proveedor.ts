import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { createErrorResponse } from '../../util/apiResponse';


export const validate = [
    body('nombre').notEmpty().withMessage('El nombre es requerido'),
    body('telefono').notEmpty().withMessage('El telefono es requerida'),
    body('correo').notEmpty().withMessage('El correo es requerido'),
    body('correo').isEmail().withMessage('El correo no es válido'),
    body('direccion').notEmpty().withMessage('La dirección es requerida'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(createErrorResponse('Errores de validación:', 400, errors.array()));
        }
        next();
    }
]