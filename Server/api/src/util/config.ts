import dotenv from "dotenv";
dotenv.config();
export const MONGODB = process.env.MONGO_DB || "";
export const PORT = process.env.PORT || "";
export const URLAPI = process.env.URL || "";
export const JWT_SECRET = process.env.JWT_SECRET || "";
export const CRYPTO_SECRET = process.env.CRYPTO_SECRET || "";
export const IV = process.env.IV || "";