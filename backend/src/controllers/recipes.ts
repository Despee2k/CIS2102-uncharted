import { Request, Response } from 'express';
import { prismaClient } from '..';
import { AddRecipeSchema } from '../schema/recipes';

export const createRecipe = async (req: Request, res: Response) => {
    const data = AddRecipeSchema.parse(req.body);
  
    const recipe = await prismaClient.recipe.create({
      data: {
        ...data,
        picture: req.file ? `/uploads/${req.file.filename}` : '/api/placeholder/400/320',
        ingredients: {
          createMany: {
            data: data.ingredients.map((ingredient) => ({ ingredient })),
          },
        },
        procedure: {
          createMany: {
            data: data.procedure.map((step) => ({ step })),
          },
        },
      },
    });
  
    res.json(recipe);
  };
  