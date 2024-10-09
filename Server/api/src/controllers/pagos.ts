import { Request, Response } from "express";
import PagoModel from "../models/pagos";
import { createErrorResponse, createSuccessResponse } from "../util/apiResponse";
import { logError } from "../util/logs";

const PagosControllers = {
    getAllbyClient: async (req: Request, res: Response) => {
        try {
            const { clientId } = req.params;
            const pagos = await PagoModel.find({ cliente: clientId });
            if(!pagos || pagos.length === 0){
                return res.status(404).json(createErrorResponse("No se encontraron pagos", 404));
            }
            return res.status(200).json(createSuccessResponse("Pagos encontrados", 200, pagos));
        } catch (error) {
            logError(`Failed Getting All Pagos: ${error}`);
            return res.status(500).json(createErrorResponse("Error interno del servidor", 500));
        }
    },
    getOneById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const pago = await PagoModel.findById(id);
            if (!pago) {
                return res.status(404).json(createErrorResponse("Pago no encontrado", 404));
            }

            return res.status(200).json(createSuccessResponse("Pago obtenido con éxito", 200, pago));
        } catch (error) {
            logError(`Error al obtener el pago: ${error}`);
            return res.status(500).json(createErrorResponse("Error al obtener el pago", 500));
        }
    },

    Save: async (req: Request, res: Response) => {
        try {
            const { cliente, reserva, serviciosContratados, montototal, metodoPago, fechaPago } = req.body;
            
            const newPago = new PagoModel({
                cliente,
                reserva,
                serviciosContratados,
                montototal,
                metodoPago,
                fechaPago
            });

            const savedPago = await newPago.save();

            return res.status(201).json(createSuccessResponse("Pago creado con éxito", 201, savedPago));
        } catch (error) {
            logError(`Error al crear el pago: ${error}`);
            return res.status(500).json(createErrorResponse("Error al crear el pago", 500));
        }
    },

    Delete: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const deletedPago = await PagoModel.findByIdAndDelete(id);
            
            if (!deletedPago) {
                return res.status(404).json(createErrorResponse("Pago no encontrado", 404));
            }

            return res.status(200).json(createSuccessResponse("Pago eliminado con éxito", 200, deletedPago));
        } catch (error) {
            logError(`Error al eliminar el pago: ${error}`);
            return res.status(500).json(createErrorResponse("Error al eliminar el pago", 500));
        }
    }
};

export default PagosControllers;