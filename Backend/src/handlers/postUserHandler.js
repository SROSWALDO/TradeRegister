// handlers/usuarioHandler.js
const { crearUsuario } = require('../controllers/postUser');

const crearUsuarioHandler = async (req, res) => {
    const { nombreUsuario, correoElectronico, contraseña, isAdmin } = req.body;

    try {
        const nuevoUsuario = await crearUsuario({ nombreUsuario, correoElectronico, contraseña, isAdmin });
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    crearUsuarioHandler,
};
