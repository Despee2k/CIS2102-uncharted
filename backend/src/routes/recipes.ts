import { Router } from 'express';
import { createRecipe, getRecipes, getUserRecipes, rateRecipe } from '../controllers/recipes';
import { errorHandler } from '../error-handler';
import {authMiddleware} from '../middlewares/auth';
import upload from '../middlewares/multer-config';

const recipeRoutes: Router = Router();

recipeRoutes.post(
  '/addrecipe',
  [authMiddleware, upload.single('picture')],
  errorHandler(createRecipe)
);

recipeRoutes.post(
  '/:recipeId/rate', 
  [authMiddleware], 
  errorHandler(rateRecipe)
);

recipeRoutes.get('/', [authMiddleware], errorHandler(getRecipes));  // This should use the authMiddleware

recipeRoutes.get('/user', [authMiddleware], errorHandler(getUserRecipes));

export default recipeRoutes;