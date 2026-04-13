import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const MakeupModel = sequelize.define('Makeup', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    marca: {
        type : DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

export default MakeupModel;