import { User } from '@prisma/client'; // Adjust import based on your Prisma model

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

export {};