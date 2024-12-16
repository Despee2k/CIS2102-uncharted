import { NextFunction, Request, Response } from "express";
import { UnauthorizedException } from "../exceptions/unauthorized";
import { ErrorCode } from "../exceptions/root";
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../secrets";
import { prismaClient } from "..";

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    console.log('AuthMiddleware triggered');  // This should print every time a protected route is accessed
    const token = req.headers.authorization;  // Extract the token

    console.log('Authorization header:', req.headers);  // Log all headers to check for token presence
    console.log('Token extracted:', token);  // Log the token extracted

    if (!token) {
        console.log('No token found');
        return next(new UnauthorizedException("Unauthorized!", ErrorCode.UNAUTHORIZED));
    }

    try {
        const payload = jwt.verify(token, JWT_SECRET) as any;
        console.log('Token payload:', payload);  // Log the decoded token payload
        const user = await prismaClient.user.findFirst({ where: { id: payload.userId } });

        if (!user) {
            console.log('User not found');
            return next(new UnauthorizedException("Unauthorized!", ErrorCode.UNAUTHORIZED));
        }

        (req as any).user = user;
        console.log('User attached to req.user:', req.user);  // Log the user attached to the request

        next();
    } catch (error) {
        console.error('Token verification error:', error);  // Log any errors during token verification
        next(new UnauthorizedException("Unauthorized!", ErrorCode.UNAUTHORIZED));
    }
};

export default authMiddleware;
