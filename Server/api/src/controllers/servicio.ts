import { Response, Request } from "express";
import ServicioModel from "../models/servicio";
import { createErrorResponse, createSuccessResponse } from "../util/apiResponse";
import { logError } from "../util/logs";

const ServicioControllers = {
    getAll: async (req: Request, res: Response) => {
        try {
           const servicios = await ServicioModel.find();
           if(!servicios){
            return res.status(404).json(createErrorResponse('No se encontraron servicios', 404));
           }
           return res.status(200).json(createSuccessResponse('Servicios obtenidos correctamente', 200, servicios));
        } catch (error) {
            logError(`Getting All Services: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno', 500));
        }
    },
    getOne: async (req: Request, res: Response) => {
        try {
            const servicio = await ServicioModel.findById(req.params.id);
            if(!servicio){
                return res.status(404).json(createErrorResponse('No se encontró el servicio', 404));
            }
            return res.status(200).json(createSuccessResponse('Servicio obtenido correctamente', 200, servicio));
        } catch (error) {
            logError(`Getting One Service: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno', 500));
        }
    },
    Save: async (req: Request, res: Response) => {
        try {
            const save = new ServicioModel(req.body);
            await save.save();
            if(!save){
                return res.status(404).json(createErrorResponse('No se pudo guardar el servicio', 404));
            }
            return res.status(201).json(createSuccessResponse('Servicio guardado correctamente', 200, save));
        } catch (error) {
            logError(`Saving Service: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno', 500));
        }
    },
    Edit: async (req: Request, res: Response) => {
        try {
            const _id = req.params.id;
            const update = req.body;
            const updated = await ServicioModel.findByIdAndUpdate(_id, update, {new: true});
            if(!updated){
                return res.status(404).json(createErrorResponse('No se pudo actualizar el servicio', 404));
            }
            return res.status(200).json(createSuccessResponse('Servicio actualizado correctamente', 200, updated));
        } catch (error) {
            logError(`Updating Service: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno', 500));
        }
    },
    Delete: async (req: Request, res: Response) => {
        try {
            const {id} = req.params;
            const deleted = await ServicioModel.findByIdAndDelete(id);
            if(!deleted){
                return res.status(400).json(createErrorResponse('No se pudo eliminar el servicio', 400));
            }
            return res.status(200).json(createSuccessResponse('Servicio eliminado correctamente', 200, deleted));
        } catch (error) {
            logError(`Deleting Service: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno', 500));
        }
    }
}

export default ServicioControllers;