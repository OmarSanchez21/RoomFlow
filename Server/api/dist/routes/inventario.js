"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inventario_1 = __importDefault(require("../controllers/inventario"));
const val_Inventario_1 = require("../middleware/validations/val_Inventario");
const InventarioRouter = (0, express_1.Router)();
InventarioRouter.get('/', inventario_1.default.getAll);
InventarioRouter.get('/:id', inventario_1.default.getOne);
InventarioRouter.post('/', val_Inventario_1.validate, inventario_1.default.Save);
InventarioRouter.put('/:id', val_Inventario_1.validate, inventario_1.default.Edit);
InventarioRouter.delete('/:id', inventario_1.default.Delete);
exports.default = InventarioRouter;
