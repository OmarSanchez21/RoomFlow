import { Request, Response, NextFunction } from 'express';
import { verifyJwtToken } from '../../util/jwt';
import { createErrorResponse } from '../../util/apiResponse';

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // El token está en el formato "Bearer <token>"

    if (!token) {
        return res.status(401).json(createErrorResponse('Token no proporcionado'));
    }

    try {
        const user = verifyJwtToken(token);
        (req as any).user = user;  
        next();
    } catch (error) {
        return res.status(403).json(createErrorResponse('Token inválido o expirado'));
    }
}
