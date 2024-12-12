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

export const signup = async (req:Request, res:Response) => {
    SignUpSchema.parse(req.body)
    const {name, email, password} = req.body;

    let user = await prismaClient.user.findFirst({where: {email: email}})
    if(user){
        throw new BadRequestsException("User already exists!", ErrorCode.USER_ALREADY_EXISTS);
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

export const login = async (req:Request, res:Response) => {
    const {email, password} = req.body;

    let user = await prismaClient.user.findFirst({where: {email: email}})
    if(!user){
        throw new NotFoundException("User does not exist!", ErrorCode.USER_NOT_FOUND);
    }
    if(!compareSync(password, user.password)){
        throw new BadRequestsException("Incorrect password!", ErrorCode.INCORRECT_PASSWORD);
    }
    const token = jwt.sign({
        userId: user.id
    }, JWT_SECRET)

    res.json({user, token});
}

// /me -> return the logged in user
export const me = async (req: Request, res: Response) => {
    res.json(req.user);
}