// controllers/usuarioController.js
const { Usuario } = require('../db');  // Ajusta la ruta según tu estructura de proyecto

const crearUsuario = async (datosUsuario) => {
    try {
        const nuevoUsuario = await Usuario.create(datosUsuario);
        return nuevoUsuario;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    crearUsuario,
};
