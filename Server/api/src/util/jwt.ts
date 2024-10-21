import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './config';

export function createJwtToken(user: any): string{
    const payload = {
        id: user._id,
        username: user.email,
        role: user.role
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    return token;
}

export function verifyJwtToken(token: string): any {
    try {
        const payload = jwt.verify(token, JWT_SECRET);
        return payload;
    } catch (error) {
        throw new Error('Invalid token');
    }
}