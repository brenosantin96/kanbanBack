import {Request, Response} from 'express';
import {Card} from '../models/Card'


export const login = (req:Request, res:Response)=>{
    res.send("Login Route")
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