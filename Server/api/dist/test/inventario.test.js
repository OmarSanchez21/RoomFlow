"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../util/config");
async function getInventario() {
    const response = await fetch(`${config_1.URLAPI}/api/v1/inventario`);
    console.log(response.json());
}
getInventario();
