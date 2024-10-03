import mongoose, {Document,Schema} from "mongoose";

interface IInv_Categoria extends Document {
    nombre: string;
    descripcion: string;
}

const Inv_CategoriaSchema: Schema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true }
});

const Inv_CategoriaModel = mongoose.model<IInv_Categoria>('Inv_Categoria', Inv_CategoriaSchema);

export default Inv_CategoriaModel;