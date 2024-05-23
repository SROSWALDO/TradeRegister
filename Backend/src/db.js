// Dependencias
const { Sequelize } = require("sequelize");
require("dotenv").config();

// Modelos
const RegistroModel = require("./models/Registro");
const UsuarioModel = require("./models/Usuario");

// Connection to SQL
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/trade`,
    { logging: false, native: false }
);

// Instances of models
RegistroModel(sequelize);
UsuarioModel(sequelize);

// Relations of models
const { Registro, Usuario } = sequelize.models;

// Definición de la relación entre Registro y Usuario
// Asumiendo que quieres una relación uno a muchos (un usuario puede tener varios registros)
Usuario.hasMany(Registro, {
  foreignKey: "usuarioId",
  as: "registros"
});
Registro.belongsTo(Usuario, {
  foreignKey: "usuarioId",
  as: "usuario"
});

module.exports = {
 ...sequelize.models,
  connection: sequelize,
};
