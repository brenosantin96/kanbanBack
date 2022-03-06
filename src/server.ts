import express from 'express';
import dotenv from 'dotenv'
import {Request, Response, NextFunction} from 'express'
import mainRoutes from './routes/mainRoutes'
import path from 'path';

dotenv.config();
const app = express();

//Rota estatica e JSON:
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));

app.use('/ola', (req:Request, res:Response)=>{
    res.send("Olá mundo")
})

app.use(mainRoutes);



app.listen(process.env.PORT, ()=>{
    console.log(`Servidor iniciado na porta ${process.env.PORT}`);
})