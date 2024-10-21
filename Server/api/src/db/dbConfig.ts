import mongoose from "mongoose";
import { MONGODB } from "../util/config";
import { logSuccess, logError } from "../util/logs";


export async function dbConnection() {
    try {
        await mongoose.connect(MONGODB);
        logSuccess("Conectado a MongoDB");
    } catch (error) {
        logError("Error: " + error);
    }
}