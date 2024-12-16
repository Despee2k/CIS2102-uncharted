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

export const rateRecipe = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { recipeId } = req.params;
    const { rating } = req.body;

    // Validate rating
    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Invalid rating' });
    }

    const userId = (req.user as any).id;

    // Check if user has already rated this recipe
    const existingRating = await prismaClient.recipeRating.findUnique({
      where: {
        recipeId_userId: {
          recipeId: parseInt(recipeId),
          userId: userId
        }
      }
    });

    if (existingRating) {
      return res.status(400).json({ message: 'You have already rated this recipe' });
    }

    // Create new rating
    const newRating = await prismaClient.recipeRating.create({
      data: {
        recipeId: parseInt(recipeId),
        userId: userId,
        rating: rating
      }
    });

    // Fetch all ratings for this recipe
    const recipeRatings = await prismaClient.recipeRating.findMany({
      where: { recipeId: parseInt(recipeId) }
    });

    // Calculate new average rating
    const totalRating = recipeRatings.reduce((sum, r) => sum + r.rating, 0);
    const averageRating = totalRating / recipeRatings.length;

    // Update recipe with new rating
    const updatedRecipe = await prismaClient.recipe.update({
      where: { id: parseInt(recipeId) },
      data: {
        totalRating: averageRating,
        totalRatings: recipeRatings.length
      }
    });

    res.json({ 
      recipe: updatedRecipe, 
      newRating: averageRating 
    });
  } catch (error) {
    console.error('Recipe rating error:', error);
    res.status(500).json({
      message: 'Failed to rate recipe',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

// Update getRecipes to include rating information
export const getRecipes = async (req: Request, res: Response) => {
  try {
    const recipes = await prismaClient.recipe.findMany({
      where: {
        approvalStatus: 'APPROVED'
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
    
    const transformedRecipes = recipes.map(recipe => ({
      ...recipe,
      id: recipe.id,
      authorName: recipe.author.name,
      rating: recipe.totalRating || 0,
      totalRatings: recipe.totalRatings || 0,
      image: recipe.picture,
      createdAt: recipe.createdAt,
      ingredients: recipe.ingredients,
      procedure: recipe.procedure
    }));

    res.json(transformedRecipes);
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