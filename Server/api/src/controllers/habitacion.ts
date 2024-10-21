import { Response, Request } from "express";
import HabitacionModel from "../models/habitacion";
import { createErrorResponse, createSuccessResponse } from "../util/apiResponse";
import { logError } from "../util/logs";

const HabitacionControllers = {
    getAll: async (req: Request, res: Response) => {
        try {
            const habitaciones = await HabitacionModel.find();
            if(!habitaciones){
                return res.status(404).json(createErrorResponse('No se encontraron habitaciones', 404));
            }
            return res.status(200).json(createSuccessResponse('Habitaciones obtenidas correctamente', 200, habitaciones));
        } catch (error) {
            logError(`Getting All Rooms: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno', 500))
        }
    },
    getOne: async (req: Request, res: Response) => {
        try {
            const habitacion = await HabitacionModel.findById(req.params.id);
            if(!habitacion){
                return res.status(404).json(createErrorResponse('No se encontro la habitacion', 404));
            }
            return res.status(200).json(createSuccessResponse('Habitacion obtenida correctamente', 200, habitacion));
        } catch (error) {
            logError(`Getting One Room: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno', 500))
        }
    },
    Save: async (req: Request, res: Response) => {
        try {
            const habitacion = new HabitacionModel(req.body);
            await habitacion.save();
            if(!habitacion){
                return res.status(404).json(createErrorResponse('No se pudo guardar la habitacion', 404));
            }
            return res.status(200).json(createSuccessResponse('Habitacion guardada correctamente', 200, habitacion));
        } catch (error) {
            logError(`Saving Room: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno', 500))
        }
    },
    Edit: async (req: Request, res: Response) => {
        try {
            const _id = req.params.id;
            const update = req.body;
            const updatedHab = await HabitacionModel.findByIdAndUpdate(_id, update);
            if(!updatedHab){
                return res.status(404).json(createErrorResponse('No se pudo actualizar la habitacion', 404));
            }
            return res.status(200).json(createSuccessResponse('Habitacion actualizada correctamente', 200, updatedHab));
        }catch (err){
            logError(`Updating Room: ${err}`);
            return res.status(500).json(createErrorResponse('Error interno', 500))
        }
    },
    Delete: async (req: Request, res: Response) => {
        try {
            const {id} = req.params;
            const deletedHab = await HabitacionModel.findByIdAndDelete(id);
            if(!deletedHab){
                return res.status(404).json(createErrorResponse('No se pudo eliminar la habitacion', 404));
            }
            return res.status(200).json(createSuccessResponse('Habitacion eliminada correctamente', 200, deletedHab));
        } catch (error) {
            logError(`Deleting Room: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno', 500))
        }
    }
}

export default  HabitacionControllers;