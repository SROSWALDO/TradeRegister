const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'Usuario', 
    {
    nombreUsuario: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
    },
    correoElectronico: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
})};