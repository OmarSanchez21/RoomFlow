import { Request, Response } from "express";
import SugerenciaModel from "../models/sugerencia";
import { createErrorResponse, createSuccessResponse } from "../util/apiResponse";
import { logError } from "../util/logs";
import ClienteModel from "../models/clientes";

const SugerenciaControllers = {
    getAll: async (req: Request, res: Response) => {
        try {
            const sugerencias = await SugerenciaModel.find();
            if (!sugerencias) {
                return res.status(404).json(createErrorResponse("No se encontraron sugerencias", 404));
            }
            return res.status(200).json
        } catch (error) {
            logError(`Failed to get Sugerencia ${error}`);
            return res.status(500).json(createErrorResponse("Error al obtener las sugerencias", 500));
        }
    },
    getOne: async (req: Request, res: Response) => {
        try {
            const sugerencia = await SugerenciaModel.findById(req.params.id);
            if(!sugerencia){
                return res.status(404).json(createErrorResponse("Not found", 404));
            }
            return res.status(200).json(createSuccessResponse("Founded", 200, sugerencia))
        } catch (error) {
            logError(`Error getting one Sugerencia: ${error}`);
            return res.status(500).json(createSuccessResponse(""))
        }
    },
    Save: async(req: Request, res: Response) =>{
        try {
            const { cliente, mensaje } = req.body;
            const fecha = Date.now();
            const sugerencia = new SugerenciaModel({ cliente, mensaje, fecha });
            await sugerencia.save();
            if(!sugerencia){
                return res.status(404).json(createErrorResponse("Failed to Save Sugerencia", 404))
            }
            const clienteM = await ClienteModel.findByIdAndUpdate(cliente, {
                $push: { comentarios: sugerencia._id }
            }, {new: true});
            if(!clienteM){
                return res.status(404).json(createErrorResponse("Failed to Save Sugerencia", 404))
            }
            return res.status(201).json(createSuccessResponse("Added", 201, sugerencia))
        } catch (error) {
            logError(`Failed Save Sugerencia ${error}`)
            return res.status(500).json(createErrorResponse("Failed to Save Sugerencia", 500))
        }
    },
    Delete: async(req: Request, res: Response) => {
        try {
            const _id = req.params.id;
            const deleted = await SugerenciaModel.findById(_id);
            if(!deleted){
                return res.status(404).json(createErrorResponse("No se pudo borrar", 404))
            }
            return res.status(200).json(createSuccessResponse("Se borro correctamente", 200, deleted));
        } catch (error) {
            logError(`Error deleting Sugerencia ${error}`)
            return res.status(500).json(createErrorResponse("Error interno", 500))
        }
    }
}

export default SugerenciaControllers;