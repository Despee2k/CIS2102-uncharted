import { NextFunction, Request, Response } from "express";
import { prismaClient } from "..";
import { hashSync, compareSync } from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../secrets";
import { BadRequestsException } from "../exceptions/bad-request";
import { ErrorCode } from "../exceptions/root";

export const signup = async (req:Request, res:Response, next: NextFunction) => {
    const {name, email, password} = req.body;

    let user = await prismaClient.user.findFirst({where: {email: email}})
    if(user){
        next (new BadRequestsException("User already exists!", ErrorCode.USER_ALREADY_EXISTS));
    }
    user = await prismaClient.user.create({
        data:{
            name,
            email,
            password: hashSync(password, 10)
        }
    })
    res.json(user);
}

export const login = async (req:Request, res:Response, next: NextFunction) => {
    const {email, password} = req.body;

    let user = await prismaClient.user.findFirst({where: {email: email}})
    if(!user){
        next (new BadRequestsException("User does not exist!", ErrorCode.USER_NOT_FOUND));
    }
    else if(user) {
        if(!compareSync(password, user.password)){
            next (new BadRequestsException("Incorrect password!", ErrorCode.INCORRECT_PASSWORD));
        } else {
            const token = jwt.sign({
                userId: user.id
            }, JWT_SECRET)
    
            res.json({user, token});
        }
    }
}