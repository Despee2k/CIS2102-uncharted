import { Router } from 'express';
import authRoutes from './auth';
import recipeRoutes from './recipes';

const rootRouter: Router = Router();

rootRouter.use('/auth', authRoutes);
rootRouter.use('/recipes', recipeRoutes);

export default rootRouter;