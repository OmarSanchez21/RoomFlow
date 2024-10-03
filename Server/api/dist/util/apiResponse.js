"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSuccessResponse = createSuccessResponse;
exports.createErrorResponse = createErrorResponse;
function createSuccessResponse(message, statuscode = 200, data) {
    return {
        success: true,
        message,
        statuscode,
        data
    };
}
function createErrorResponse(message, statuscode = 500, data) {
    return {
        success: false,
        message,
        statuscode,
        data
    };
}
