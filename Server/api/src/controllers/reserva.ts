import { Response, Request } from "express";
import ReservaModel from "../models/reserva";
import { createErrorResponse, createSuccessResponse } from '../util/apiResponse';
import { logError } from "../util/logs";

const ReservaControllers = {
    getAll: async(req: Request, res: Response) => {
        try {
            const reservas = await ReservaModel.find();
            if(!reservas){
                return res.status(404).json(createErrorResponse('No se encontraron reservas', 404));
            }
        } catch (error) {
            logError(`Failed Getting All Reserva: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno del servidor', 500));
        }
    },
    getOne: async(req:Request, res:Response) =>{
        try {
            const reserva = await ReservaModel.findById(req.params.id);
            if(!reserva){
                return res.status(404).json(createErrorResponse('No se encontro la reserva', 404));
            }
            return res.status(200).json(createSuccessResponse('Reserva encontrada', 200, reserva));
        } catch (error) {
            logError(`Failed Getting One Reserva: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno del servidor', 500));
        }
    },
    Save: async( req:Request, res:Response) =>{
        try {
            const reserva = new ReservaModel(req.body);
            await reserva.save();
            if(!reserva){
                return res.status(404).json(createErrorResponse('No se pudo guardar la reserva', 404));
            }
            return res.status(200).json(createSuccessResponse('Reserva guardada correctamente', 200, reserva));
        } catch (error) {
            logError(`Failed Saving Reserva: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno del servidor', 500));
        }
    },
    Edit: async(req:Request, res:Response) =>{
        try {
            const _id = req.params.id;
            const {cliente, habitacion, fechaInicio, fechaFin, estado, fechaCheckIn, fechaCheckOut} = req.body;
            const updatedReserva = await ReservaModel.findByIdAndUpdate(_id, {cliente, habitacion, fechaInicio, fechaFin, estado, fechaCheckIn, fechaCheckOut}, {new: true});
            if(!updatedReserva){
                return res.status(404).json(createErrorResponse('No se pudo actualizar la reserva', 404));
            }
            return res.status(200).json(createSuccessResponse('Reserva actualizada correctamente', 200, updatedReserva));
        } catch (error) {
            logError(`Failed Updating Reserva: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno del servidor', 500));
        }
    },
    Delete: async (req: Request, res: Response) =>{
        try {
            const deleted = await ReservaModel.findByIdAndDelete(req.params.id);
            if(!deleted){
                return res.status(404).json(createErrorResponse('No se pudo eliminar la reserva', 404));
            }
            return res.status(200).json(createSuccessResponse('Reserva eliminada correctamente', 200, deleted));
        } catch (error) {
            logError(`Failed Deleting Reserva: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno del servidor', 500));
        }
    }
}

export default ReservaControllers;