import express from 'express';
import dotenv from 'dotenv'
import {Request, Response, NextFunction} from 'express'
import mainRoutes from './routes/mainRoutes'

dotenv.config();
const app = express();

app.use('/ola', (req:Request, res:Response)=>{
    res.send("Olá mundo")
})

app.use(mainRoutes);

app.listen(process.env.PORT, ()=>{
    console.log("Servidor iniciado");
})