import { ObjectId } from "mongodb";
import mongoose, {Document,Schema} from "mongoose";

interface ICategoria extends Document {
    _id: ObjectId;
    nombre: string;
    descripcion: string;
}

const CategoriaSchema: Schema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true }
});

const CategoriaModel = mongoose.model<ICategoria>('Categoria', CategoriaSchema);

export default CategoriaModel;