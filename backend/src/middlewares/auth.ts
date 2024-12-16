import { NextFunction, Request, Response } from "express";
import { UnauthorizedException } from "../exceptions/unauthorized";
import { ErrorCode } from "../exceptions/root";
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../secrets";
import { prismaClient } from "..";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;  // Extract the token

    if (!token) {
        return next(new UnauthorizedException("Unauthorized!", ErrorCode.UNAUTHORIZED));
    }

    try {
        const payload = jwt.verify(token, JWT_SECRET) as any;
        const user = await prismaClient.user.findFirst({ where: { id: payload.userId } });

        if (!user) {
            return next(new UnauthorizedException("Unauthorized!", ErrorCode.UNAUTHORIZED));
        }

        (req as any).user = user;
        next();
    } catch (error) {
        next(new UnauthorizedException("Unauthorized!", ErrorCode.UNAUTHORIZED));
    }
};

// Admin role check middleware
export const adminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as any;
    if (user.role !== 'ADMIN') {
        return next(new UnauthorizedException("Access denied. Admins only.", ErrorCode.UNAUTHORIZED));
    }
    next();
};
