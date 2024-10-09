import mongoose, {Schema, Document, mongo} from "mongoose";

interface IReserva extends Document {
    cliente: mongoose.Types.ObjectId;
    habitacion: mongoose.Types.ObjectId;
    fechaInicio: Date;
    fechaFin: Date;
    servicios: [{
        servicioid: mongoose.Types.ObjectId;
        monto: number
    }]
    estado: string;
    fechaCheckIn: Date;
    fechaCheckOut: Date;
}

const ReservaSchema: Schema = new Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cliente"
    },
    habitacion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Habitacion"
    },
    fechaInicio: Date,
    fechaFin: Date,
    estado: String,
    fechaCheckIn: Date,
    fechaCheckOut: Date
})

const ReservaModel = mongoose.model<IReserva>('Reserva', ReservaSchema);

export default ReservaModel;