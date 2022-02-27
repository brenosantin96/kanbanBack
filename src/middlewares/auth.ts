import { Request, Response, NextFunction } from 'express';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


export const Auth = {
    private: async (req: Request, res: Response, next: NextFunction) => {
        let success = false;

        //Verificar se existe no header da requisicao um authorization:
        if (req.headers.authorization) {

            const [authType, token] = req.headers.authorization.split(" ");
            if (authType === "Bearer") {
                try {
                    const decoded = JWT.verify(token, process.env.JWT_SECRET as string)
                    if(decoded){
                        success = true;
                    }

                } catch (error) {
                }
            }
        }

        if (success) {
            next();
        } else {
            res.status(401); //Não autorizado
            res.json({ error: "Não autorizado." })
        }

    }
}