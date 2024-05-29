
//? Dependencies

const { Router } = require('express');
const registerHandler = require('../handlers/RegisterHandler');
const getRegisters = require('../controllers/getRegisters');
const deletedRegisterHandler = require('../handlers/deleteRegisterHandler');
const { crearUsuarioHandler } = require('../handlers/postUserHandler');
const getUsersHandler = require('../handlers/getUsersHandler');
const deleteUserHandler = require('../handlers/deleteUserHandler');
const loginHandler = require('../handlers/loginHandler');


const router = Router();

//* Registros -----------------------------------------
router.get("/register", getRegisters);
router.post("/register", registerHandler);
router.delete("/register/:id", deletedRegisterHandler);

//* Usuarios ------------------------------------------
router.post("/users",crearUsuarioHandler );
router.get("/users", getUsersHandler);
router.delete("/users/:id",deleteUserHandler);
router.post("/login", loginHandler);

module.exports = router;