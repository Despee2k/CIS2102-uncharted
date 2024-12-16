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
    // If user is authenticated, get their allergies
    const userAllergies = req.user 
      ? ((req.user as any).allergies || '').split(',') // Split by commas to form an array
          .map((allergy: string) => allergy.trim().toLowerCase()) // Trim whitespace and convert to lowercase
          .filter((allergy: string) => allergy !== '') // Remove any empty strings
      : [];
    console.log(userAllergies);
    console.log("USER WHAT: ", req.user);
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

    // Filter out recipes with allergens
    const filteredRecipes = recipes.filter(recipe => {
      // If no allergies, return all recipes
      if (userAllergies.length === 0) return true;

      // Check if any ingredient contains an allergy
      const hasAllergen = recipe.ingredients.some(ingredient =>
        userAllergies.some((allergy: string) => 
          ingredient.ingredient.toLowerCase().includes(allergy.toLowerCase())
        )
      );

      // Return recipe only if no allergens found
      return !hasAllergen;
    });

    const transformedRecipes = filteredRecipes.map(recipe => ({
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

export const getPendingRecipes = async (req: Request, res: Response) => {
  try {
    const pendingRecipes = await prismaClient.recipe.findMany({
      where: {
        approvalStatus: 'PENDING'
      },
      include: {
        ingredients: true,
        procedure: true,
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });

    const transformedPendingRecipes = pendingRecipes.map(recipe => ({
      id: recipe.id,
      title: recipe.title,
      description: recipe.description,
      servings: recipe.servings,
      prepTime: recipe.prepTime,
      category: recipe.category,
      picture: recipe.picture,
      requestDate: recipe.createdAt,
      user: recipe.author.name,
      userEmail: recipe.author.email,
      ingredients: recipe.ingredients,
      procedure: recipe.procedure
    }));

    res.json(transformedPendingRecipes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch pending recipes' });
  }
};

export const approveRecipe = async (req: Request, res: Response) => {
  try {
    const { recipeId } = req.params;

    const updatedRecipe = await prismaClient.recipe.update({
      where: { id: parseInt(recipeId) },
      data: { 
        approvalStatus: 'APPROVED' 
      }
    });

    res.json(updatedRecipe);
  } catch (error) {
    res.status(500).json({ message: 'Failed to approve recipe' });
  }
};

export const rejectRecipe = async (req: Request, res: Response) => {
  try {
    const { recipeId } = req.params;

    const updatedRecipe = await prismaClient.recipe.update({
      where: { id: parseInt(recipeId) },
      data: { 
        approvalStatus: 'DISAPPROVED' 
      }
    });

    res.status(200).json(updatedRecipe);
  } catch (error) {
    res.status(500).json({ message: 'Failed to reject recipe' });
  }
};

export const getPendingRecipe = async (req: Request, res: Response) => {
  try {
    const { recipeId } = req.params;

    const recipe = await prismaClient.recipe.findUnique({
      where: { 
        id: parseInt(recipeId),
        approvalStatus: 'PENDING'
      },
      include: {
        ingredients: true,
        procedure: true,
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found or not pending' });
    }

    const transformedRecipe = {
      id: recipe.id,
      title: recipe.title,
      description: recipe.description,
      servings: recipe.servings,
      prepTime: recipe.prepTime,
      category: recipe.category,
      picture: recipe.picture,
      requestDate: recipe.createdAt,
      user: recipe.author.name,
      userEmail: recipe.author.email,
      ingredients: recipe.ingredients,
      procedure: recipe.procedure
    };

    res.json(transformedRecipe);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch pending recipe' });
  }
};

export const searchRecipes = async (req: Request, res: Response) => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== 'string') {
      return res.status(400).json({ message: 'Query parameter is required' });
    }

    const recipes = await prismaClient.recipe.findMany({
      where: {
        OR: [
          { title: { contains: query.toLowerCase() } },
          { description: { contains: query.toLowerCase() } },
        ],
        approvalStatus: 'APPROVED',
      },
      include: {
        author: { select: { name: true } },
        ingredients: true,
        procedure: true,
      },
    });

    res.json(recipes);
  } catch (error) {
    console.error('Error searching recipes:', error);
    res.status(500).json({ message: 'Failed to search recipes' });
  }
};
