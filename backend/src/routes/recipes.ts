import { Router } from 'express';
import { 
  createRecipe, 
  getRecipes, 
  getUserRecipes, 
  rateRecipe, 
  getPendingRecipes,
  getPendingRecipe,
  approveRecipe,
  rejectRecipe, 
  searchRecipes
} from '../controllers/recipes';
import { errorHandler } from '../error-handler';
import { authMiddleware } from '../middlewares/auth';
import { adminMiddleware } from '../middlewares/auth';
import upload from '../middlewares/multer-config';
import { addToMealPlan, getMealPlan } from '../controllers/meal-plan';

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

recipeRoutes.get(
  '/pending', 
  [authMiddleware, adminMiddleware], 
  errorHandler(getPendingRecipes)
);

recipeRoutes.get(
  '/pending/:recipeId', 
  [authMiddleware, adminMiddleware], 
  errorHandler(getPendingRecipe)
);

recipeRoutes.patch(
  '/:recipeId/approve', 
  [authMiddleware, adminMiddleware], 
  errorHandler(approveRecipe)
);

recipeRoutes.patch(
  '/:recipeId/reject', 
  [authMiddleware, adminMiddleware], 
  errorHandler(rejectRecipe)
);

recipeRoutes.post('/meal-plan', [authMiddleware], errorHandler(addToMealPlan));
recipeRoutes.get('/meal-plan', [authMiddleware], errorHandler(getMealPlan));

recipeRoutes.get('/', [authMiddleware], errorHandler(getRecipes));  // This should use the authMiddleware

recipeRoutes.get('/user', [authMiddleware], errorHandler(getUserRecipes));

recipeRoutes.get('/search', [authMiddleware], errorHandler(searchRecipes));

export default recipeRoutes;