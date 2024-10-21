"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const servc_categoria_1 = __importDefault(require("../controllers/servc_categoria"));
const Servc_CategoriaRouter = (0, express_1.Router)();
Servc_CategoriaRouter.get('/', servc_categoria_1.default.getAllCategoria);
Servc_CategoriaRouter.get('/:id', servc_categoria_1.default.getOneCategoria);
exports.default = Servc_CategoriaRouter;
