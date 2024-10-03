"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inv_categoria_1 = __importDefault(require("../controllers/inv_categoria"));
const Inv_CategoriaRouter = (0, express_1.Router)();
Inv_CategoriaRouter.get('/', inv_categoria_1.default.getAllCategoria);
Inv_CategoriaRouter.get('/:id', inv_categoria_1.default.getOneCategoria);
exports.default = Inv_CategoriaRouter;
