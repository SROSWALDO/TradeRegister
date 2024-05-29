// handlers/obtenerUsuariosHandler.js
const getUsers = require('../controllers/getUsers');

const getUsersHandler = async (req, res) => {
    try {
        const usuarios = await getUsers();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = getUsersHandler;
