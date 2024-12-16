import { Request, Response, Router } from 'express';
import authRoutes from './auth';
import recipeRoutes from './recipes';
import { adminMiddleware } from '../middlewares/auth';  // Import the adminMiddleware

const rootRouter = Router();

rootRouter.use('/auth', authRoutes);
rootRouter.use('/recipes', recipeRoutes);

// Admin-specific route
rootRouter.use('/admin', [adminMiddleware]);

export default rootRouter;
