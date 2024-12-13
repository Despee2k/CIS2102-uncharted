import { Router } from 'express';
import { createRecipe } from '../controllers/recipes';
import { errorHandler } from '../error-handler';
import multer from 'multer'

const recipeRoutes: Router = Router();
const upload = multer({ dest: 'uploads/' });

recipeRoutes.post('/addrecipe', upload.single('picture'), errorHandler(createRecipe));
export default recipeRoutes;