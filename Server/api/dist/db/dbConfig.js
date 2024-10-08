"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = dbConnection;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../util/config");
const logs_1 = require("../util/logs");
async function dbConnection() {
    try {
        await mongoose_1.default.connect(config_1.MONGODB);
        (0, logs_1.logSuccess)("Conectado a MongoDB");
    }
    catch (error) {
        (0, logs_1.logError)("Error: " + error);
    }
}
