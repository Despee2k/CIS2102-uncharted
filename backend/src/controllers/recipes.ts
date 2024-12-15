import { Request, Response } from 'express';
import { prismaClient } from '..';
import { AddRecipeSchema } from '../schema/recipes';
import { z } from 'zod';

export const createRecipe = async (req: Request, res: Response) => {
  // Validate input data
  const inputSchema = AddRecipeSchema.extend({
    ingredients: z.array(z.string().min(1)),
    procedure: z.array(z.string().min(1)),
  });

  try {
    const data = inputSchema.parse(req.body);

    // Ensure user is authenticated
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    let pictureUrl = '/api/placeholder/400/320';
    if (req.file) {
      pictureUrl = `/uploads/${req.file.filename}`;
    }

    const recipe = await prismaClient.recipe.create({
      data: {
        title: data.title,
        description: data.description,
        servings: data.servings,
        prepTime: data.prepTime,
        category: data.category,
        picture: pictureUrl,
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

    res.status(201).json(recipe);
  } catch (error) {
    console.error('Recipe creation error:', error);

    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: 'Invalid input data',
        errors: error.errors,
      });
    }

    res.status(500).json({
      message: 'Failed to create recipe',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

export const getRecipes = async (req: Request, res: Response) => {
  try {
    const recipes = await prismaClient.recipe.findMany({
      include: {
        ingredients: true,
        procedure: true,
      },
    });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch recipes' });
  }
};