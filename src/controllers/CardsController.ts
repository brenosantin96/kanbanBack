import {Request, Response} from 'express';
import {Card} from '../models/Card'
import dotenv from 'dotenv'
import JWT from 'jsonwebtoken';

dotenv.config();

const loginInfo = {
    login: process.env.LOGIN,
    senha: process.env.SENHA
}

export const login = async (req:Request, res:Response)=>{
    
    console.log(req.body);
    let {login, senha} = req.body;
    
    if(login !== process.env.LOGIN || senha !== process.env.SENHA ){
        res.json({error: "Login ou senha incorretos."})
        return;
    } else {
        const token = JWT.sign(loginInfo, process.env.JWT_SECRET as string, {expiresIn: "20m"})
        res.json({status: true, message: "Token gerado com êxito.", token});
        return;
    }

}

export const listCards = async (req:Request, res:Response)=>{
    const cards = await Card.findAll();
    res.json({cards: cards});
    
}

export const createCards = (req:Request, res:Response)=>{
    res.send("Create Cards Route")
}

export const updateCard = (req:Request, res:Response)=>{
    res.send("Update Card Route")
}

export const deleteCard = (req:Request, res:Response)=>{
    res.send("Delete Card Route")
}