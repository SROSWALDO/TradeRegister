const { Usuario } = require('../db');  // Ajusta la ruta según tu estructura de proyecto

const login = async (usuario, password) => {
    try {
        // Busca el usuario por correo electrónico
        const userData = await Usuario.findOne({ where: { nombreUsuario: usuario } });

        // Verifica si el usuario existe
        if (!userData) {
            return { error: "User email" };
        }

        // Compara la contraseña ingresada con la almacenada
        console.log("Contraseña almacenada:", userData.contraseña);
        console.log("Contraseña ingresada:", password);
        
        if (password !== userData.contraseña) {
            return { error: "Incorrect password" };
        }

        // Retorna solo los datos necesarios del usuario
        return {
            id: userData.id,
            nombreUsuario: userData.nombreUsuario,
            correoElectronico: userData.correoElectronico,
            isAdmin: userData.isAdmin,
        };

    } catch (error) {
        console.log(error);
        throw new Error("Error during login process");
    }
};

module.exports = login;
