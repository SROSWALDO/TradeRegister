//? Importaciones
require('dotenv').config();
console.log('JWT_SECRET:', process.env.JWT_SECRET);
const server = require("./src/server.js");
const { connection } = require("./src/db.js");
const userAdmin = require("./src/utilities/userAdmin.js")

//? Constantes

const PORT = process.env.PORT || 3001; // Elige el puerto definido en las variables de entorno o el puerto 3001 por defecto

//? Función para iniciar el servidor

const startServer = async () => {
  try {
    // Sincroniza la base de datos con los modelos
    await connection.sync({ force: true }); // Usa 'false' para no borrar la base de datos en cada reinicio del servidor
    await userAdmin();
    // Inicia el servidor en el puerto especificado
    server.listen(PORT, () => console.log(`Servidor levantado en el puerto: ${PORT}`));
  } catch (error) {
    console.log("El servidor no se pudo iniciar:", error.message);
  }
};

//? Inicia el servidor
startServer();
