const jwt = require('jsonwebtoken');
const { Usuario } = require('../db');

const authenticateToken = async (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Acceso denegado, token no proporcionado' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await Usuario.findByPk(decoded.id);

        if (!user) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error('Error en la verificación del token:', error);
        res.status(401).json({ error: 'Token inválido' });
    }
};

module.exports = authenticateToken;
