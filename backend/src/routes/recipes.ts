import { Router } from 'express';
import { createRecipe, getRecipes } from '../controllers/recipes';
import { errorHandler } from '../error-handler';
import authMiddleware from '../middlewares/auth';
import upload from '../middlewares/multer-config';

const recipeRoutes: Router = Router();

recipeRoutes.post(
  '/addrecipe',
  [authMiddleware, upload.single('picture')],
  errorHandler(createRecipe)
);

recipeRoutes.get('/', errorHandler(getRecipes));

export default recipeRoutes;