import crypto from 'crypto';
import { IV, CRYPTO_SECRET } from './config';
const algorithm = 'aes-256-cbc';
const secretKey = Buffer.from(CRYPTO_SECRET, 'base64'); // Debe tener 32 bytes (256 bits)
const iv = Buffer.from(IV, 'base64'); // Debe ser de 16 bytes (128 bits)

// Función para cifrar
export const encryptData = (text: string): string => {
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
};

// Función para descifrar
export const decryptData = (encryptedText: string): string => {
    const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};
