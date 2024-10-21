import mongoose, {Schema, Document} from "mongoose";

interface IProveedor extends Document {
    nombre: string;
    telefono: string;
    correo: string;
    direccion: string;
}

const ProveedoresSchema = new Schema({
    nombre: {type: String, required: true},
    telefono: {type: String, required: true},
    correo: {type: String, required: true, unique: true},
    direccion: {type: String, required: true},
});
const ProveedorModel = mongoose.model<IProveedor>('Proveedor', ProveedoresSchema);

export default ProveedorModel;