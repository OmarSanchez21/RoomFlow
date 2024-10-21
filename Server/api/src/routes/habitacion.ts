import { Router } from 'express';
import HabitacionControllers from '../controllers/habitacion';

const HabitacionRouter = Router();

HabitacionRouter.get('/', HabitacionControllers.getAll);
HabitacionRouter.get('/:id', HabitacionControllers.getOne);
HabitacionRouter.post('/', HabitacionControllers.Save);
HabitacionRouter.put('/:id', HabitacionControllers.Edit);
HabitacionRouter.delete('/:id', HabitacionControllers.Delete);

export default HabitacionRouter;