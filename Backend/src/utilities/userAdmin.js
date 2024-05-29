const { Usuario } = require('../db');

const createAdmin = async () => {
    try {
        const adminUser = await Usuario.create({
            nombreUsuario: "Eduardo",
            correoElectronico: "eduardo_risk13@hotmail.com",
            contraseña: "Risk13",
            isAdmin: true,
        });

        console.log("Admin created");
        return adminUser;

    } catch (error) {
        console.error("Error creating admin:", error );
    }
};

module.exports = createAdmin;