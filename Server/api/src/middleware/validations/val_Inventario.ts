import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { createErrorResponse } from '../../util/apiResponse';


export const validate = [
    body('nombre').notEmpty().withMessage('El nombre es requerido'),
    body('cantidad').notEmpty().withMessage('La descripción es requerida'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(createErrorResponse('Errores de validación:', 400, errors.array()));
        }
        next();
    }
]