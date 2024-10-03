import dotenv from "dotenv";
dotenv.config();
export const MONGODB = process.env.MONGO_DB || "";
export const PORT = process.env.PORT || "";
export const URLAPI = process.env.URL || "";