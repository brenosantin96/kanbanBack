import { Request, Response } from 'express';
import { Card } from '../models/Card'
import dotenv from 'dotenv'
import JWT from 'jsonwebtoken';

dotenv.config();

const loginInfo = {
    login: process.env.LOGIN,
    senha: process.env.SENHA
}

export const login = async (req: Request, res: Response) => {

    console.log(req.body);
    let { login, senha } = req.body;

    if (login !== process.env.LOGIN || senha !== process.env.SENHA) {
        res.json({ error: "Login ou senha incorretos." })
        return;
    } else {
        //estou criando o TOKEN no proprio método do LOGIN.
        const token = JWT.sign(loginInfo, process.env.JWT_SECRET as string, { expiresIn: "20m" })
        res.json({ status: true, message: "Token gerado com êxito.", token });
        return;
    }

}

export const listCards = async (req: Request, res: Response) => {
    const cards = await Card.findAll();
    res.json({ cards: cards });

}

export const createCards = async (req: Request, res: Response) => {
    let titulo = req.body.titulo
    let conteudo = req.body.conteudo
    let lista = req.body.lista
    console.log(req.body)

    if (titulo !== "" && conteudo !== "" && lista !== "") {
        const card = await Card.create({ titulo, conteudo, lista })
        res.json({ message: "Card criado com sucesso", card })
    }
    else {
        res.json({ message: "Não foi possível criar o CARD" })
    }
}

export const updateCard = async (req: Request, res: Response) => {
    let id = req.params.id;

    let titulo = req.body.titulo
    let conteudo = req.body.conteudo
    let lista = req.body.lista

    const card = await Card.findByPk(id);

    if (card) {
        if (titulo !== "" && conteudo !== "" && lista !== "") {
            try {
                card.titulo = titulo;
                card.conteudo = conteudo;
                card.lista = lista;
                await card.save();
                res.json({ msg: "Card atualizado com sucesso.", card })
            } catch (error) {
                res.json({ error })
            }
        } else {
            res.status(400);
            res.json({ msg: "Para realizar alterações os campos não podem ficar em branco." })
        }

    }

    else {
        res.status(404)
        res.json({ error: "Não existe card com esse ID para ser atualizado." })
    }

}

export const deleteCard = async (req: Request, res: Response) => {
    let id = req.params.id;

    const card = await Card.findByPk(id);

    if (card) {
        card.destroy();
        const actualCards = await Card.findAll();
        if(actualCards){
            res.json({ msg: `O Card com ID ${card.id} e titulo ${card.titulo} foi removido.`, actualCards })
        }
    } else {
        res.status(404);
        res.json({ msg: `Não existe card com o ${id} para ser removido.` })
    }
}