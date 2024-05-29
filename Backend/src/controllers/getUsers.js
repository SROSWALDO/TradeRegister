// controllers/obtenerUsuariosController.js
const { Usuario } = require('../db');  // Ajusta la ruta según tu estructura de proyecto

const getUsers = async () => {
    try {
        const usuarios = await Usuario.findAll();
        return usuarios;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = getUsers;
