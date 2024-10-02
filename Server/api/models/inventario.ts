import mongoose, {Document, Schema} from "mongoose";

interface IInvetario extends Document {
    nombre: string;
    categoria: mongoose.Types.ObjectId;
    cantidad: number;
    proveedor: mongoose.Types.ObjectId;
    precio: number;
    fechaProxPedido: Date;
}
const InventarioSchema: Schema = new Schema({
    nombre: String,
    categoria: { type: Schema.Types.ObjectId, ref: 'Categoria' },
    cantidad: Number,
    proveedor: { type: Schema.Types.ObjectId, ref: 'Proveedor' },
    precio: Number,
    fechaProxPedido: Date
})
const InventarioModel = mongoose.model<IInvetario>('Inventario', InventarioSchema);