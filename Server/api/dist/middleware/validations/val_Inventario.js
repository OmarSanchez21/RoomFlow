"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const express_validator_1 = require("express-validator");
const apiResponse_1 = require("../../util/apiResponse");
exports.validate = [
    (0, express_validator_1.body)('nombre').notEmpty().withMessage('El nombre es requerido'),
    (0, express_validator_1.body)('cantidad').notEmpty().withMessage('La descripción es requerida'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json((0, apiResponse_1.createErrorResponse)('Errores de validación:', 400, errors.array()));
        }
        next();
    }
];
