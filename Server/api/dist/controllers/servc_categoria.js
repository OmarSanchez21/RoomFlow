"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inv_categoria_1 = __importDefault(require("../models/inv_categoria"));
const apiResponse_1 = require("../util/apiResponse");
const logs_1 = require("../util/logs");
const Servc_CategoriaControllers = {
    getAllCategoria: async (req, res) => {
        try {
            const categorias = await inv_categoria_1.default.find();
            if (!categorias) {
                return res.status(404).json((0, apiResponse_1.createErrorResponse)('No se encontraron categorias', 404));
            }
            return res.status(200).json((0, apiResponse_1.createSuccessResponse)('Categorias obtenidas correctamente', 200, categorias));
        }
        catch (error) {
            return res.status(200).json((0, apiResponse_1.createErrorResponse)('Error al obtener categorias', 500, error));
        }
    },
    getOneCategoria: async (req, res) => {
        try {
            const categoria = await inv_categoria_1.default.findById(req.params.id);
            if (!categoria) {
                return res.status(404).json((0, apiResponse_1.createErrorResponse)('No se encontro la categoria', 404));
            }
            return res.status(200).json((0, apiResponse_1.createSuccessResponse)('Categoría obtenida correctamente', 200, categoria));
        }
        catch (error) {
            (0, logs_1.logError)(`Getting One Category: ${error}`);
            return res.status(500).json((0, apiResponse_1.createErrorResponse)('Error al obtener la categoria', 500, error));
        }
    }
};
exports.default = Servc_CategoriaControllers;
