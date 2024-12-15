import { Router } from 'express';
import { createRecipe, getRecipes, getUserRecipes } from '../controllers/recipes';
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

recipeRoutes.get('/user', [authMiddleware], errorHandler(getUserRecipes));

export default recipeRoutes;