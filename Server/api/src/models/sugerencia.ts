import mongoose, {Document, Schema} from "mongoose";
import ClienteModel from './clientes';

interface ISugerencia extends Document {
    cliente: mongoose.Types.ObjectId;
    mensaje: string;
    fecha: Date;
}
const SugerenciaSchema: Schema = new Schema({
    cliente: { type: Schema.Types.ObjectId, ref: 'Cliente' },
    mensaje: {type: String, required: true},
    fecha: {type: Date, default: new Date},
})

const SugerenciaModel = mongoose.model<ISugerencia>('Sugerencia', SugerenciaSchema);

export default SugerenciaModel;

