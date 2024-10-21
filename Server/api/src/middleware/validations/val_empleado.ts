import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { createErrorResponse } from "../../util/apiResponse";

export const validateEmp = [
    body('cedula').notEmpty().withMessage('La cedula es requerida'),
    body('nombre').notEmpty().withMessage('El nombre es requerido'),
    body('email').notEmpty().withMessage('El email es requerido'),
    body('email').isEmail().withMessage('El email es requerido'),
    body('password').notEmpty().withMessage('La contraseña es requerida'),
    body('telefono').notEmpty().withMessage('El telefono es requerido'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(createErrorResponse('Errores de validación:', 400, errors.array()));
        }
        next();
    }
]