import express from "express";
import { PORT } from "./util/config";
import { dbConnection } from "./db/dbConfig";
import { logInfo } from "./util/logs";
import Servc_CategoriaRouter from "./routes/servc_categoria";
import Inv_CategoriaRouter from "./routes/inv_category";
import InventarioRouter from "./routes/inventario";
const app = express();

app.use(express.json());

dbConnection().then(() => {
    app.listen(PORT, () => {
        logInfo(`Server running on port ${PORT}`);
    });
    app.use('/api/v1/servc_categoria', Servc_CategoriaRouter);
    app.use('/api/v1/inv_categoria', Inv_CategoriaRouter);
    app.use('/api/v1/inventario', InventarioRouter);
})
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
