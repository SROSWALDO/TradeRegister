const jwt = require('jsonwebtoken');
const { Usuario } = require('../db');  // Ajusta la ruta según tu estructura de proyecto

const login = async (usuario, password) => {
    try {
        // Busca el usuario por nombre de usuario
        const userData = await Usuario.findOne({ where: { nombreUsuario: usuario } });

        // Verifica si el usuario existe
        if (!userData) {
            return { error: "User not found" };
        }

        // Compara la contraseña ingresada con la almacenada
        console.log("Contraseña almacenada:", userData.contraseña);
        console.log("Contraseña ingresada:", password);
        
        if (password !== userData.contraseña) {
            return { error: "Incorrect password" };
        }

        // Genera un token JWT
        const token = jwt.sign({ id: userData.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Retorna solo los datos necesarios del usuario junto con el token
        return {
            user: {
                id: userData.id,
                nombreUsuario: userData.nombreUsuario,
                correoElectronico: userData.correoElectronico,
                isAdmin: userData.isAdmin,
            },
            token
        };

    } catch (error) {
        console.log(error);
        throw new Error("Error during login process");
    }
};

module.exports = login;
