"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logSuccess = logSuccess;
exports.logError = logError;
exports.logWarning = logWarning;
exports.logInfo = logInfo;
const cli_color_1 = __importDefault(require("cli-color"));
function logSuccess(message) {
    console.log(cli_color_1.default.green(`SUCCESS: ${message}`));
}
function logError(message) {
    console.log(cli_color_1.default.red(`ERROR: ${message}`));
}
function logWarning(message) {
    console.log(cli_color_1.default.yellow(`WARNING: ${message}`));
}
function logInfo(message) {
    console.log(cli_color_1.default.cyan(`INFO: ${message}`));
}
