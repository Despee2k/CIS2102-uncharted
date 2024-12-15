import { Request, Response } from 'express';
import { prismaClient } from '..';
import { AddRecipeSchema } from '../schema/recipes';
import { z } from 'zod';

export const createRecipe = async (req: Request, res: Response) => {
  try {

    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { title, description, servings, prepTime, category, ingredients, procedure } = req.body;

    if (!title || !description || !servings || !prepTime || !category) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const ingredientsList = JSON.parse(ingredients);
    const procedureSteps = JSON.parse(procedure);

    if (!Array.isArray(ingredientsList) || !Array.isArray(procedureSteps)) {
      return res.status(400).json({ message: "Ingredients and procedure must be arrays." });
    }

    const picturePath = req.file 
      ? `/uploads/${req.file.filename}` 
      : '/api/placeholder/400/320';

    const recipe = await prismaClient.recipe.create({
      data: {
        title,
        description,
        servings: parseInt(servings),
        prepTime: parseInt(prepTime),
        category,
        picture: picturePath,
        authorId: (req.user as any).id,
        ingredients: {
          createMany: {
            data: ingredientsList.map((ingredient: string) => ({ ingredient })),
          },
        },
        procedure: {
          createMany: {
            data: procedureSteps.map((step: string) => ({ step })),
          },
        },
      },
    });

    res.status(201).json(recipe);
  } catch (error) {
    console.error('Recipe creation error:', error);

    res.status(500).json({
      message: 'Failed to create recipe',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

export const getRecipes = async (req: Request, res: Response) => {
  try {
    const recipes = await prismaClient.recipe.findMany({
      where: {
        approvalStatus: 'APPROVED' // Only fetch approved recipes
      },
      include: {
        ingredients: true,
        procedure: true,
        author: {
          select: {
            id: true,
            name: true
          }
        }
      }
    });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch recipes' });
  }
};

export const getUserRecipes = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const recipes = await prismaClient.recipe.findMany({
      where: {
        authorId: (req.user as any).id
      },
      include: {
        ingredients: true,
        procedure: true
      }
    });

    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch user recipes' });
  }
};