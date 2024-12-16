import { Request, Response } from "express";
import { prismaClient } from "..";
import { NotFoundException } from "../exceptions/not-found";
import { ErrorCode } from "../exceptions/root";

export const addToMealPlan = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      throw new NotFoundException("Unauthorized", ErrorCode.UNAUTHORIZED);
    }

    const { recipeId, day, mealType } = req.body;
    const userId = (req.user as any).id;

    // Check if recipe exists
    const recipe = await prismaClient.recipe.findUnique({
      where: { id: recipeId }
    });

    if (!recipe) {
      throw new NotFoundException("Recipe not found", ErrorCode.UNAUTHORIZED);
    }

    // Check if there's an existing meal plan entry for this day and meal type
    const existingMealPlan = await prismaClient.mealPlan.findUnique({
      where: {
        userId_day_mealType: {
          userId,
          day,
          mealType
        }
      }
    });

    if (existingMealPlan) {
      // Update existing meal plan entry
      const updatedMealPlan = await prismaClient.mealPlan.update({
        where: {
          id: existingMealPlan.id
        },
        data: {
          recipeId
        }
      });
      return res.json(updatedMealPlan);
    }

    // Create new meal plan entry
    const newMealPlan = await prismaClient.mealPlan.create({
      data: {
        userId,
        day,
        mealType,
        recipeId
      }
    });

    res.json(newMealPlan);
  } catch (error) {
    console.error('Add to meal plan error:', error);
    res.status(500).json({ 
      message: 'Failed to add recipe to meal plan',
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
};

export const getMealPlan = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      throw new NotFoundException("Unauthorized", ErrorCode.UNAUTHORIZED);
    }

    const userId = (req.user as any).id;

    const mealPlan = await prismaClient.mealPlan.findMany({
      where: { userId },
      include: {
        recipe: true
      },
      orderBy: [
        { day: 'asc' },
        { mealType: 'asc' }
      ]
    });

    // Transform the meal plan into a more usable format
    const transformedMealPlan = mealPlan.reduce((acc: any[], entry) => {
      const dayIndex = acc.findIndex(d => d.day === entry.day);
      
      if (dayIndex === -1) {
        // Create a new day entry
        acc.push({
          day: entry.day,
          [entry.mealType]: entry.recipe
        });
      } else {
        // Add meal type to existing day entry
        acc[dayIndex][entry.mealType] = entry.recipe;
      }

      return acc;
    }, []);

    res.json(transformedMealPlan);
  } catch (error) {
    console.error('Get meal plan error:', error);
    res.status(500).json({ 
      message: 'Failed to retrieve meal plan',
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
};