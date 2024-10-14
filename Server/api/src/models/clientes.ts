import mongoose, {Document, Schema} from "mongoose";

interface ICliente extends Document {
    documentacion: string;
    nombre: string;
    email: string;
    password: string;
    telefono: string;
    direccion?: string;
    historial?: [{
        habitacion: mongoose.Schema.Types.ObjectId;
        fechaentrada: Date;
        fechasalida?: Date;
    }];
    fecharegistro: Date;
    comentarios?:[mongoose.Schema.Types.ObjectId]
}

const ClienteSchema: Schema = new Schema({
    documentacion: { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    telefono: { type: String, required: true },
    direccion: { type: String },
    historial: [{
        habitacion: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Habitacion"
        },
        fechaentrada: { type: Date, required: true },
        fechasalida: { type: Date }
    }],
    comentarios: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comentario"
    }],
    fecharegistro: { type: Date, default: Date.now },
})

const ClienteModel = mongoose.model<ICliente>('Cliente', ClienteSchema);

export default ClienteModel;
