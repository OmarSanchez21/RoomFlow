import mongoose, {Document, Schema} from "mongoose";

interface IPago extends Document {
    cliente: mongoose.Types.ObjectId;
    reserva: mongoose.Types.ObjectId;
    serviciosContratados:[{
        serivicioId: mongoose.Types.ObjectId;
        costo: number
    }];
    montototal: number;
    metodoPago: string;
    fechaPago: Date;
}

const PagoSchema: Schema = new Schema({
    cliente: { type: Schema.Types.ObjectId, ref: 'Cliente' },
    reserva: { type: Schema.Types.ObjectId, ref: 'Reserva' },
    serviciosContratados: [{
        serivicioId: { type: Schema.Types.ObjectId, ref: 'Servicio' },
        costo: Number
    }],
    montototal: Number,
    metodoPago: String,
    fechaPago: Date
})

const PagoModel = mongoose.model<IPago>('Pago', PagoSchema);

export default PagoModel;