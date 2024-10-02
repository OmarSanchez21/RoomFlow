import mongoose, {Document, mongo, Schema} from "mongoose";

interface IHabitacion extends Document {
    numero: String;
    tipo: string;
    precio: Number;
    estado: string;
    disponible: Boolean;
    descripcion: string;
    imagen: string;
    mantenimiento: [{
        tipo: String;
        fecha: Date;
    }]; 
}

const HabitacionSchema = new Schema({
    numero: { type: String, required: true, unique: true },
    tipo: { type: String, required: true },
    precio: { type: Number, required: true },
    estado: { type: String, required: true },
    disponible: { type: Boolean, required: true },
    descripcion: { type: String, required: true },
    imagen: { type: String, required: true },
    mantenimiento: {
        tipo: { type: String, required: true },
        fecha: { type: Date, required: true }
    }
})

const HabitacionModel = mongoose.model<IHabitacion>('Habitacion', HabitacionSchema);

export default HabitacionModel;