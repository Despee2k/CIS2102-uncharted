import { z } from 'zod';

export const AddRecipeSchema = z.object({
  title: z.string(),
  description: z.string(),
  servings: z.number().positive(),
  prepTime: z.number().positive(),
  category: z.string(),
  ingredients: z.array(z.string()),
  procedure: z.array(z.string()),
});