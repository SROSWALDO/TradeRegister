// models/Registro.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Registro = sequelize.define('Registro', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            unique: false,
        },
        origen: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        destino: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cp_origen: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cp_destino: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        direccion_destino: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        direccion_origen: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        estado_origen: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        estado_destino: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        unidad: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        peso: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        dimensiones: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cantidad_skids: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        usuarioId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    return Registro; 
};
