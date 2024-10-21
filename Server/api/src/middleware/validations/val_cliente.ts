import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { createErrorResponse } from "../../util/apiResponse";

export const validateCl = [
    body('documentacion').notEmpty().withMessage('La documentación es requerida'),
    body('nombre').notEmpty().withMessage('El nombre es requerido'),
    body('email').notEmpty().withMessage('El email es requerido'),
    body('email').isEmail().withMessage('El email es requerido'),
    body('telefono').notEmpty().withMessage('El telefono es requerido'),
    body('direccion').notEmpty().withMessage('La dirección es requerida'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(createErrorResponse('Errores de validación:', 400, errors.array()));
        }
        next();
    }
]

