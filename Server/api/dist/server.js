"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./util/config");
const dbConfig_1 = require("./db/dbConfig");
const logs_1 = require("./util/logs");
const servc_categoria_1 = __importDefault(require("./routes/servc_categoria"));
const inv_category_1 = __importDefault(require("./routes/inv_category"));
const inventario_1 = __importDefault(require("./routes/inventario"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, dbConfig_1.dbConnection)().then(() => {
    app.listen(config_1.PORT, () => {
        (0, logs_1.logInfo)(`Server running on port ${config_1.PORT}`);
    });
    app.use('/api/v1/servc_categoria', servc_categoria_1.default);
    app.use('/api/v1/inv_categoria', inv_category_1.default);
    app.use('/api/v1/inventario', inventario_1.default);
});
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
