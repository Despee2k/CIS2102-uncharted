import { Request, Response, Router } from 'express';
import authRoutes from './auth';
import recipeRoutes from './recipes';
import upload from '../middlewares/multer-config'; // Import your multer middleware

const rootRouter = Router();

rootRouter.use('/auth', authRoutes);
rootRouter.use('/recipes', recipeRoutes);


export default rootRouter;
