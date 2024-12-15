import { NextFunction, Request, Response } from "express";
import { UnauthorizedException } from "../exceptions/unauthorized";
import { ErrorCode } from "../exceptions/root";
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../secrets";
import { prismaClient } from "..";

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    // 1. Extract the token from the Authorization header
    const token = req.headers.authorization;  // Format: Token (no Bearer)

    console.log("Authorization header:", token);  // Log token for debugging
    
    // 2. If token is not present, throw an unauthorized error
    if (!token) {
        return next(new UnauthorizedException("Unauthorized!", ErrorCode.UNAUTHORIZED));
    }

    try {
        // 3. If the token is present, verify it and extract the payload
        const payload = jwt.verify(token, JWT_SECRET) as any;

        // 4. Fetch the user associated with the token payload
        const user = await prismaClient.user.findFirst({ where: { id: payload.userId } });

        if (!user) {
            return next(new UnauthorizedException("Unauthorized!", ErrorCode.UNAUTHORIZED));
        }

        // 5. Attach the user object to the request object
        (req as any).user = user;
        next();
    } catch (error) {
        console.error("Token verification error:", error);  // Log token verification error
        next(new UnauthorizedException("Unauthorized!", ErrorCode.UNAUTHORIZED));
    }
};

export default authMiddleware;
