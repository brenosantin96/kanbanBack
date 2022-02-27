import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/instance';

export interface CardInstance extends Model {
    id: number;
    titulo: string;
    conteudo: string;
    lista: string;
}

export const Card = sequelize.define<CardInstance>('Card', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    titulo: {
        type: DataTypes.STRING,
    },
    conteudo: {
        type: DataTypes.STRING
    },
    lista: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'cards',
    timestamps: false
});