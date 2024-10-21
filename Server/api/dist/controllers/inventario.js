"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inventario_1 = __importDefault(require("../models/inventario"));
const apiResponse_1 = require("../util/apiResponse");
const logs_1 = require("../util/logs");
const InventarioControllers = {
    getAll: async (req, res) => {
        try {
            const inventarios = await inventario_1.default.find();
            if (!inventarios) {
                return res.status(404).json((0, apiResponse_1.createErrorResponse)('No se encontraron inventarios', 404));
            }
            return res.status(200).json((0, apiResponse_1.createSuccessResponse)('Inventarios obtenidos correctamente', 200, inventarios));
        }
        catch (error) {
            (0, logs_1.logError)(`Getting All Inventories: ${error}`);
            return res.status(500).json((0, apiResponse_1.createErrorResponse)('Error interno', 500));
        }
    },
    getOne: async (req, res) => {
        try {
            const inventario = await inventario_1.default.findById(req.params.id);
            if (!inventario) {
                return res.status(404).json((0, apiResponse_1.createErrorResponse)('No se encontro el inventario', 404));
            }
            return res.status(200).json((0, apiResponse_1.createSuccessResponse)('Inventario obtenido correctamente', 200, inventario));
        }
        catch (error) {
            (0, logs_1.logError)(`Getting One Inventory: ${error}`);
            return res.status(500).json((0, apiResponse_1.createErrorResponse)('Error interno', 500));
        }
    },
    Save: async (req, res) => {
        try {
            const inventario = new inventario_1.default(req.body);
            await inventario.save();
            if (!inventario) {
                return res.status(404).json((0, apiResponse_1.createErrorResponse)('No se pudo guardar el inventario', 404));
            }
            return res.status(200).json((0, apiResponse_1.createSuccessResponse)('Inventario guardado correctamente', 200, inventario));
        }
        catch (error) {
            (0, logs_1.logError)(`Saving Inventory: ${error}`);
            return res.status(500).json((0, apiResponse_1.createErrorResponse)('Error interno', 500));
        }
    },
    Edit: async (req, res) => {
        try {
            const _id = req.params.id;
            (0, logs_1.logInfo)(_id);
            const update = req.body;
            const updatedInv = await inventario_1.default.findByIdAndUpdate(_id, update, { new: true });
            if (!updatedInv) {
                return res.status(404).json((0, apiResponse_1.createErrorResponse)('No se pudo actualizar el inventario', 404));
            }
            return res.status(200).json((0, apiResponse_1.createSuccessResponse)('Inventario actualizado correctamente', 200, updatedInv));
        }
        catch (error) {
            (0, logs_1.logError)(`Updating Inventory: ${error}`);
            return res.status(500).json((0, apiResponse_1.createErrorResponse)('Error interno', 500));
        }
    },
    Delete: async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await inventario_1.default.findByIdAndDelete(id);
            if (!deleted) {
                return res.status(404).json((0, apiResponse_1.createErrorResponse)('No se pudo eliminar el inventario', 404));
            }
            return res.status(200).json((0, apiResponse_1.createSuccessResponse)('Inventario eliminado correctamente', 200, deleted));
        }
        catch (error) {
            (0, logs_1.logError)(`Deleting Inventory: ${error}`);
            return res.status(500).json((0, apiResponse_1.createErrorResponse)('Error interno', 500));
        }
    }
};
exports.default = InventarioControllers;
