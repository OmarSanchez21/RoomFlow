import { Response, Request} from 'express';
import InventarioModel from '../models/inventario';
import { createErrorResponse, createSuccessResponse } from '../util/apiResponse';
import { logError, logInfo } from '../util/logs';

const InventarioControllers = {
    getAll: async(req: Request, res: Response) =>{
        try {
            const inventarios = await InventarioModel.find();
            if(!inventarios){
                return res.status(404).json(createErrorResponse('No se encontraron inventarios', 404));
            }
            return res.status(200).json(createSuccessResponse('Inventarios obtenidos correctamente', 200, inventarios));
        } catch (error) {
            logError(`Getting All Inventories: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno', 500))
        }
    },
    getOne: async(req: Request, res: Response) =>{
        try {
            const inventario = await InventarioModel.findById(req.params.id);
            if(!inventario){
                return res.status(404).json(createErrorResponse('No se encontro el inventario', 404));
            }
            return res.status(200).json(createSuccessResponse('Inventario obtenido correctamente', 200, inventario));
        } catch (error) {
            logError(`Getting One Inventory: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno', 500))
        }
    },
    Save: async(req: Request, res: Response) =>{
        try {
            const inventario = new InventarioModel(req.body);
            await inventario.save();
            if(!inventario){
                return res.status(404).json(createErrorResponse('No se pudo guardar el inventario', 404));
            }
            return res.status(200).json(createSuccessResponse('Inventario guardado correctamente', 200, inventario));
        } catch (error) {
            logError(`Saving Inventory: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno', 500))
        }
    },
    Edit: async(req: Request, res: Response) =>{
        try {
            const _id = req.params.id;
            logInfo(_id);
            const update = req.body;
            const updatedInv = await InventarioModel.findByIdAndUpdate(_id, update, {new: true})
            if(!updatedInv){
                return res.status(404).json(createErrorResponse('No se pudo actualizar el inventario', 404));
            }
            return res.status(200).json(createSuccessResponse('Inventario actualizado correctamente', 200, updatedInv));
        } catch (error) {
            logError(`Updating Inventory: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno', 500))
        }
    },
    Delete: async(req: Request, res: Response) =>{
        try {
            const {id}  = req.params;
            const deleted = await InventarioModel.findByIdAndDelete(id);
            if(!deleted){
                return res.status(404).json(createErrorResponse('No se pudo eliminar el inventario', 404));
            }
            return res.status(200).json(createSuccessResponse('Inventario eliminado correctamente', 200, deleted));
        } catch (error) {
            logError(`Deleting Inventory: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno', 500))
        }
    }
}
export default InventarioControllers;