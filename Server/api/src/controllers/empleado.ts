import { Request, Response } from "express";
import EmpleadoModel from "../models/empleado";
import { createSuccessResponse, createErrorResponse } from "../util/apiResponse";
import { logError } from "../util/logs";
import { hashPassword, verifyPassword } from "../util/bcrypt";

const EmpleadoControllers = {
    getAll: async (req: Request, res: Response) => {
        try {
            const empleados = await EmpleadoModel.find().select("-password");
            if (!empleados) {
                return res.status(404).json(createErrorResponse('No se encontraron empleados', 404));
            }

            return res.status(200).json(createSuccessResponse('Empleados obtenidos correctamente', 200, empleados));
        } catch (error) {
            logError(`Getting All Employees: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno', 500))
        }
    },
    getOne: async (req: Request, res: Response) => {
        try {
            const empleado = await EmpleadoModel.findById(req.params.id).select("-password");
            if (!empleado) {
                return res.status(404).json(createErrorResponse('No se encontró el empleado', 404));
            }
            return res.status(200).json(createSuccessResponse('Empleado obtenido correctamente', 200, empleado));
        }catch(error){
            logError(`Getting One Employee: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno', 500))
        }
    },
    Edit: async (req: Request, res: Response) => {
        try {
            const { id } = req.params; 
            const { cedula, nombre, email, username, role, telefono, fCumpleaños, PaisOrigen } = req.body;

            const empleado = await EmpleadoModel.findById(id);
            if(!empleado){
                return res.status(404).json(createErrorResponse("Empleado no encontrado",404));
            }
            if( empleado.cedula !== cedula||empleado.username !== username || empleado.email !== email){
                const empleadoExist = await EmpleadoModel.findOne({ 
                    $or: [{username}, {email}, {cedula}],
                    _id: { $ne: id}
                });
                if(empleadoExist){
                    return res.status(400).json(createErrorResponse("Usuario ya existe", 400));
                }
            }
            empleado.cedula = cedula;
            empleado.nombre = nombre;
            empleado.email = email;
            empleado.username = username;
            empleado.role = role
            empleado.telefono = telefono;
            empleado.fCumpleaños = fCumpleaños;
            empleado.PaisOrigen = PaisOrigen;
            await empleado.save();

            return res.status(200).json(createSuccessResponse("Empleado actualizado", 200, empleado));
        } catch (error) {
            logError(`Failed to update Employee ${error}`);
            return res.status(500).json(createErrorResponse("Error en el servidor", 500));
        }
    },
    Delete: async(req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const empleado = await EmpleadoModel.findByIdAndDelete(id);
            if(!empleado){
                return res.status(404).json(createErrorResponse("Empleado no encontrado", 404));
            }
            return res.status(200).json(createSuccessResponse("Empleado eliminado correctamente", 200, empleado));
        }
        catch(error){
            logError(`Failed to delete Employee ${error}`);
            return res.status(500).json(createErrorResponse("Error en el servidor", 500));
        }
    }
}
export default EmpleadoControllers;