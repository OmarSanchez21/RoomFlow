"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLAPI = exports.PORT = exports.MONGODB = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.MONGODB = process.env.MONGO_DB || "";
exports.PORT = process.env.PORT || "";
exports.URLAPI = process.env.URL || "";