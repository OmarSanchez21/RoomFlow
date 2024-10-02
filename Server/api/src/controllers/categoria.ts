import {Response, Request} from 'express';
import CategoriaModel from '../models/categoria';
import { createErrorResponse, createSuccessResponse } from '../util/apiResponse';
import { logError } from '../util/logs';

const CategoriaControllers = {
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
    },
    SaveCategoria: async(req: Request, res: Response) =>{
        try {
            const { nombre, descripcion } = req.body;
            const existing = await CategoriaModel.findOne({nombre});
            if(existing){
                return res.status(400).json(createErrorResponse('La categoria ya existe', 400));
            };
            const newCategory = new CategoriaModel({
                nombre,
                descripcion
            });
            await newCategory.save();
            return res.status(201).json(createSuccessResponse('Categoría creada correctamente', 201, newCategory));
        } catch (error) {
            logError(`Adding Category: ${error}`);
            return res.status(500).json(createErrorResponse('Error al crear la categoria', 500, error));
        }
    },
    EditCategoria: async(req: Request, res: Response) =>{
        try {
            const {id} = req.params;
            const data = req.body;
            const update = await CategoriaModel.findByIdAndUpdate(id, data, {new: true});
            if(!update){
                return res.status(404).json(createErrorResponse('No se encontro la categoria', 404));
            }
            return res.status(200).json(createSuccessResponse('Categoría editada correctamente', 200, update));
        } catch (error) {
            logError(`Editing Category: ${error}`);
            return res.status(500).json(createErrorResponse('Error al editar la categoria', 500, error));
        }
    },
    DeleteCategory: async(req: Request, res: Response) =>{
        try {
            const id = req.params.id;
            const deleted = await CategoriaModel.findByIdAndDelete(id);
            if(!deleted){
                return res.status(404).json(createErrorResponse('No se encontro la categoria', 404));
            }
            return res.status(200).json(createSuccessResponse('Categoría eliminada correctamente', 200));
        } catch (error) {
            logError(`Deleting Category: ${error}`);
            return res.status(500).json(createErrorResponse('Error al eliminar la categoria', 500, error));
        }
    }
}
export default CategoriaControllers;