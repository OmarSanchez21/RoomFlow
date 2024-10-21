import { Response, Request} from 'express';
import ProveedorModel from '../models/proveedor';
import { createErrorResponse, createSuccessResponse } from '../util/apiResponse';
import { logError, logInfo } from '../util/logs';

const ProveedorControllers = {
    getAll: async(req: Request, res: Response) =>{
        try {
            const proveedores = await ProveedorModel.find();
            if(!proveedores){
                return res.status(404).json(createErrorResponse('No se encontraron proveedor', 404));
            }
            return res.status(200).json(createSuccessResponse('Proveedores obtenidos correctamente', 200, proveedores));
        } catch (error) {
            logError(`Getting All Provvedores: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno', 500))
        }
    },
    getOne: async(req: Request, res: Response) =>{
        try {
            const proveedor = await ProveedorModel.findById(req.params.id);
            if(!proveedor){
                return res.status(404).json(createErrorResponse('No se encontro el proveedor', 404));
            }
            return res.status(200).json(createSuccessResponse('Proveedor obtenido correctamente', 200, proveedor));
        } catch (error) {
            logError(`Getting One Provvedor: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno', 500))
        }
    },
    Save: async(req: Request, res: Response) =>{
        try {
            const proveedor = new ProveedorModel(req.body);
            await proveedor.save();
            if(!proveedor){
                return res.status(404).json(createErrorResponse('No se pudo guardar el proveedor', 404));
            }
            return res.status(201).json(createSuccessResponse('Proveedor guardado correctamente', 200, proveedor));
        } catch (error) {
            logError(`Saving Provvedor: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno', 500))
        }
    },
    Edit: async(req: Request, res: Response) =>{
        try {
            const _id = req.params.id;
            const update = req.body;
            const updatedInv = await ProveedorModel.findByIdAndUpdate(_id, update, {new: true})
            if(!updatedInv){
                return res.status(404).json(createErrorResponse('No se pudo actualizar el proveedor', 404));
            }
            return res.status(200).json(createSuccessResponse('Proveedor actualizado correctamente', 200, updatedInv));
        } catch (error) {
            logError(`Updating Proveedor: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno', 500))
        }
    },
    Delete: async(req: Request, res: Response) =>{
        try {
            const {id}  = req.params;
            const deleted = await ProveedorModel.findByIdAndDelete(id);
            if(!deleted){
                return res.status(404).json(createErrorResponse('No se pudo eliminar el proveedor', 404));
            }
            return res.status(200).json(createSuccessResponse('Proveedor eliminado correctamente', 200, deleted));
        } catch (error) {
            logError(`Deleting Inventory: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno', 500))
        }
    }
}
export default ProveedorControllers;