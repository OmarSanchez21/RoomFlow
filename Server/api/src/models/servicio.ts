import mongoose, {Document, Schema} from "mongoose";

interface IServicio extends Document {
    nombre: string;
    descripcion: string;
    precio: number;
    duracion: number;
    costo: number;
    categoria: string
};

const ServiciosSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    duracion: { type: Number, required: true },
    costo: { type: Number, required: true },
    categoria: { type: String, required: true },
})
const ServicioModel = mongoose.model<IServicio>('Servicio', ServiciosSchema);