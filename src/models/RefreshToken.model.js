import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const RefreshToken = sequelize.define("RefreshToken", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    token: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    expiresAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

export default RefreshToken;