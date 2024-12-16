import { Request, Response } from "express";
import { prismaClient } from "..";
import { hashSync, compareSync } from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../secrets";
import { BadRequestsException } from "../exceptions/bad-request";
import { ErrorCode } from "../exceptions/root";
import { UnprocessableEntity } from "../exceptions/validation";
import { SignUpSchema } from "../schema/users";
import { NotFoundException } from "../exceptions/not-found";

export const signup = async (req: Request, res: Response) => {
    SignUpSchema.parse(req.body)
    const { name, email, password, bio, role } = req.body;

    let user = await prismaClient.user.findFirst({ where: { email: email } });
    if (user) {
        throw new BadRequestsException("User already exists!", ErrorCode.USER_ALREADY_EXISTS);
    }

    user = await prismaClient.user.create({
        data: {
            name,
            email,
            password: hashSync(password, 10),
            bio: bio || null,
            role: role || "USER",  // Default to 'USER' role
        }
    });

    res.json(user);
};


export const login = async (req:Request, res:Response) => {
    const {email, password} = req.body;

    let user = await prismaClient.user.findFirst({where: {email: email}});
    if(!user){
        throw new NotFoundException("User does not exist!", ErrorCode.USER_NOT_FOUND);
    }
    if(!compareSync(password, user.password)){
        throw new BadRequestsException("Incorrect password!", ErrorCode.INCORRECT_PASSWORD);
    }
    const token = jwt.sign(
        { userId: user.id },
        JWT_SECRET,
        { expiresIn: '2h' }
    );

    // Check if survey is completed
    const needsSurvey = !user.completedSurvey;

    res.json({
        user, 
        token, 
        needsSurvey
    });
}

// /me -> return the logged-in user
export const me = async (req: Request, res: Response) => {
    // Check if user's bio is null and replace with "No bio" if it is
    const userWithBio = req.user ? {
        ...req.user, 
        bio: (req.user as any).bio || "No bio"
    } : null;
    res.json(userWithBio);
}

export const updateProfile = async (req: Request, res: Response) => {
    if (!req.user) {
        throw new NotFoundException("Unauthorized!", ErrorCode.UNAUTHORIZED);
    }

    const { name, email, bio } = req.body;
    const userId = req.user.id;  // Access user.id directly since req.user contains the user object

    try {
        const existingUser = await prismaClient.user.findFirst({
            where: { email, NOT: { id: userId } }
        });

        if (existingUser) {
            throw new NotFoundException("Email is already in use!", ErrorCode.USER_ALREADY_EXISTS);
        }

        const updatedUser = await prismaClient.user.update({
            where: { id: userId },
            data: { name, email, bio: bio || "" },  // Set bio to empty string if not provided
            select: {
                id: true,
                name: true,
                email: true,
                bio: true,
                createdAt: true,
                updatedAt: true
            }
        });

        res.json(updatedUser);
    } catch (error) {
        throw new NotFoundException("Failed to update profile!", ErrorCode.INCORRECT_PASSWORD);
    }
};

export const completeSurvey = async (req: Request, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
  
      const { allergies } = req.body;
  
      // Convert array to comma-separated string
      const allergiesString = Array.isArray(allergies) 
        ? allergies.join(',') 
        : '';
  
      const updatedUser = await prismaClient.user.update({
        where: { id: (req.user as any).id },
        data: {
          allergies: allergiesString,
          completedSurvey: true
        }
      });
  
      res.json(updatedUser);
    } catch (error) {
      console.error('Survey completion error:', error);
      res.status(500).json({ 
        message: 'Failed to complete survey',
        error: error instanceof Error ? error.message : 'Unknown error' 
      });
    }
  };