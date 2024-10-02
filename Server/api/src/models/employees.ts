import mongoose, {Document, Schema} from "mongoose";

interface IEmployee extends Document {
    cedula: string;
    nombre: string;
    email: string;
    usename: string;
    password: string;
    role: string;
    telefono: Number;
    fCumpleaños: Date;
    PaisOrigen: string;
}
const EmployeesSchema = new Schema({
    cedula: { type: String, required: true },
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    usename: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    telefono: { type: Number, required: true },
    fCumpleaños: { type: Date, required: true },
    PaisOrigen: { type: String, required: true },
})
const EmployeeModel = mongoose.model<IEmployee>('Employee', EmployeesSchema);

export default EmployeeModel;