const { Registro } = require("../db");

const getRegisters = async (req, res) => {
    try {
        const registers = await Registro.findAll();
       return res.status(200).json({registers});
    } catch (error) {
        console.log(error.message);
       return  res.status(500).json({ error: "Error al obtener los registros" })
    }
}

module.exports = getRegisters;