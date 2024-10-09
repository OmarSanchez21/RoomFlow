import { Response, Request } from 'express';
import InventarioModel from '../models/inventario';
import { createErrorResponse, createSuccessResponse } from '../util/apiResponse';
import { logError, logInfo } from '../util/logs';

const InventarioControllers = {

    /**
     * @swagger
     * /api/v1/inventario:
     *   get:
     *     summary: Obtiene todos los inventarios
     *     tags: [Inventarios]
     *     responses:
     *       200:
     *         description: Lista de inventarios obtenida correctamente
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Inventario'
     *       404:
     *         description: No se encontraron inventarios
     *       500:
     *         description: Error interno
     */
    getAll: async (req: Request, res: Response) => {
        try {
            const inventarios = await InventarioModel.find();
            if (!inventarios) {
                return res.status(404).json(createErrorResponse('No se encontraron inventarios', 404));
            }
            return res.status(200).json(createSuccessResponse('Inventarios obtenidos correctamente', 200, inventarios));
        } catch (error) {
            logError(`Getting All Inventories: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno', 500));
        }
    },

    /**
     * @swagger
     * /api/v1/inventario/{id}:
     *   get:
     *     summary: Obtiene un inventario por ID
     *     tags: [Inventarios]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: ID del inventario
     *     responses:
     *       200:
     *         description: Inventario obtenido correctamente
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Inventario'
     *       404:
     *         description: No se encontró el inventario
     *       500:
     *         description: Error interno
     */
    getOne: async (req: Request, res: Response) => {
        try {
            const inventario = await InventarioModel.findById(req.params.id);
            if (!inventario) {
                return res.status(404).json(createErrorResponse('No se encontro el inventario', 404));
            }
            return res.status(200).json(createSuccessResponse('Inventario obtenido correctamente', 200, inventario));
        } catch (error) {
            logError(`Getting One Inventory: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno', 500));
        }
    },

    /**
     * @swagger
     * /api/v1/inventario:
     *   post:
     *     summary: Crea un nuevo inventario
     *     tags: [Inventarios]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Inventario'
     *     responses:
     *       201:
     *         description: Inventario guardado correctamente
     *       404:
     *         description: No se pudo guardar el inventario
     *       500:
     *         description: Error interno
     */
    Save: async (req: Request, res: Response) => {
        try {
            const inventario = new InventarioModel(req.body);
            await inventario.save();
            if (!inventario) {
                return res.status(404).json(createErrorResponse('No se pudo guardar el inventario', 404));
            }
            return res.status(201).json(createSuccessResponse('Inventario guardado correctamente', 200, inventario));
        } catch (error) {
            logError(`Saving Inventory: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno', 500));
        }
    },

    /**
     * @swagger
     * //api/v1/inventario/:id:
     *   put:
     *     summary: Actualiza un inventario
     *     tags: [Inventarios]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: ID del inventario a actualizar
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Inventario'
     *     responses:
     *       200:
     *         description: Inventario actualizado correctamente
     *       404:
     *         description: No se pudo actualizar el inventario
     *       500:
     *         description: Error interno
     */
    Edit: async (req: Request, res: Response) => {
        try {
            const _id = req.params.id;
            const update = req.body;
            const updatedInv = await InventarioModel.findByIdAndUpdate(_id, update, { new: true });
            if (!updatedInv) {
                return res.status(404).json(createErrorResponse('No se pudo actualizar el inventario', 404));
            }
            return res.status(200).json(createSuccessResponse('Inventario actualizado correctamente', 200, updatedInv));
        } catch (error) {
            logError(`Updating Inventory: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno', 500));
        }
    },

    /**
     * @swagger
     * /inventarios/{id}:
     *   delete:
     *     summary: Elimina un inventario por ID
     *     tags: [Inventarios]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: ID del inventario a eliminar
     *     responses:
     *       200:
     *         description: Inventario eliminado correctamente
     *       404:
     *         description: No se pudo eliminar el inventario
     *       500:
     *         description: Error interno
     */
    Delete: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const deleted = await InventarioModel.findByIdAndDelete(id);
            if (!deleted) {
                return res.status(404).json(createErrorResponse('No se pudo eliminar el inventario', 404));
            }
            return res.status(200).json(createSuccessResponse('Inventario eliminado correctamente', 200, deleted));
        } catch (error) {
            logError(`Deleting Inventory: ${error}`);
            return res.status(500).json(createErrorResponse('Error interno', 500));
        }
    }
}

export default InventarioControllers;
