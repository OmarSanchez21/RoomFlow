import {Response, Request} from 'express';
import CategoriaModel from '../models/inv_categoria';
import { createErrorResponse, createSuccessResponse } from '../util/apiResponse';
import { logError } from '../util/logs';

const Servc_CategoriaControllers = {
    getAllCategoria: async(req: Request, res: Response) =>{
        try {
            const categorias = await CategoriaModel.find();
            if(!categorias){
                return res.status(404).json(createErrorResponse('No se encontraron categorias', 404));
            }
            return res.status(200).json(createSuccessResponse('Categorias obtenidas correctamente', 200, categorias));
        } catch (error) {
            return res.status(200).json(createErrorResponse('Error al obtener categorias', 500, error));
        }
    },
    getOneCategoria: async(req: Request, res: Response) =>{
        try {
            const categoria = await CategoriaModel.findById(req.params.id);
            if(!categoria){
                return res.status(404).json(createErrorResponse('No se encontro la categoria', 404));
            }
            return res.status(200).json(createSuccessResponse('Categoría obtenida correctamente', 200, categoria));
        } catch (error) {
            logError(`Getting One Category: ${error}`);
            return res.status(500).json(createErrorResponse('Error al obtener la categoria', 500, error));
        }
    }
}
export default Servc_CategoriaControllers;