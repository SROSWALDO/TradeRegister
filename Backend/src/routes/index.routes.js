
//? Dependencies

const { Router } = require('express');
const registerHandler = require('../handlers/RegisterHandler');
const getRegisters = require('../controllers/getRegisters');
const deletedRegisterHandler = require('../handlers/deleteRegisterHandler');


const router = Router();

router.get("/register", getRegisters);
router.post("/register", registerHandler);
router.delete("/register/:id", deletedRegisterHandler);

module.exports = router;