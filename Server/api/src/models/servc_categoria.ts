import mongoose, {Document,Schema} from "mongoose";

interface IServc_Categoria extends Document {
    nombre: string;
    descripcion: string;
}

const Servc_CategoriaSchema: Schema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true }
});

const Servc_CategoriaModel = mongoose.model<IServc_Categoria>('Servc_Categoria', Servc_CategoriaSchema);

export default Servc_CategoriaModel;