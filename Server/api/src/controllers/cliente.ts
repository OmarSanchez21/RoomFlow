import { Response, Request } from "express";
import ClienteModel from '../models/clientes';
import { createErrorResponse, createSuccessResponse } from "../util/apiResponse";
import { logError } from "../util/logs";

const ClienteControllers = {
    getAll: async (req: Request, res: Response) => {
        try {
            const clientes = await ClienteModel.find().select("-password");
            if (!clientes) {
                return res.status(404).json(createErrorResponse("No se encontraron clientes", 404));
            }
            return res.json(createSuccessResponse("Clientes obtenidos con éxito", 200, clientes));
        } catch (error) {
            logError(`Getting All Cliente: ${error}`);
            return res.status(500).json(createErrorResponse("Error al obtener clientes", 500));
        }
    },
    getOne: async (req: Request, res: Response) => {
        try {
            const cliente = await ClienteModel.findById(req.params.id);
            if(!cliente){
                return res.status(404).json(createErrorResponse("No se encontró el cliente", 404));
            }
            return res.status(200).json(createSuccessResponse("Cliente obtenido correctamente", 200, cliente));
        } catch (error) {
            logError(`Getting One Cliente: ${error}`);
            return res.status(500).json(createErrorResponse("Error interno", 500));
        }
    },
    Edit: async(req: Request, res: Response) => {
        try {
            const _id = req.params.id;
            const {documentacion, nombre, email, telefono, direccion} = req.body;
            const updated = await ClienteModel.findByIdAndUpdate(_id, {documentacion, nombre, email, telefono, direccion}, {new: true});
            if (!updated) {
                return res.status(404).json(createErrorResponse('No se pudo actualizar el cliente', 404));
            }
            return res.status(200).json(createSuccessResponse('Cliente actualizada correctamente', 200, updated));
        } catch (error) {
            logError(`Failed Updating Reserva: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno del servidor', 500));
        }
    },    
    Delete: async(req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const cliente = await ClienteModel.findByIdAndDelete(id);
            if(!cliente){
                return res.status(404).json(createErrorResponse("Cliente Not Found", 404));
            }
            return res.status(200).json(createSuccessResponse("Cliente Borrado", 200));
        } catch (error) {
            logError(`Failed to delete Cliente ${error}`);
            return res.status(500).json(createErrorResponse("Error interno", 500));
        }
    }
}

export default ClienteControllers;