import express from "express";
import { PORT } from "./util/config";
import { dbConnection } from "./db/dbConfig";
import { logInfo } from "./util/logs";
import Servc_CategoriaRouter from "./routes/servc_categoria";
import Inv_CategoriaRouter from "./routes/inv_category";
import InventarioRouter from "./routes/inventario";
import ServicioRouter from "./routes/servicio";
import ProveedorRouter from "./routes/proveedor";
import setupSwagger from "./swaggerConfig";
const app = express();

app.use(express.json());

setupSwagger(app);
dbConnection().then(() => {
    app.listen(PORT, () => {
        logInfo(`Server running on port ${PORT}`);
    });
    app.use('/api/v1/servc_categoria', Servc_CategoriaRouter);
    app.use('/api/v1/inv_categoria', Inv_CategoriaRouter);
    app.use('/api/v1/inventario', InventarioRouter);
    app.use('/api/v1/servicio', ServicioRouter);
    app.use('/api/v1/proveedor', ProveedorRouter)
})
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
