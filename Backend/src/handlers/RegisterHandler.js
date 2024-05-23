const postRegister = require("../controllers/postRegister");

const registerHandler = async (req, res) => {
    try {
        const registerData = req.body;
        const newRegister = await postRegister(registerData);

        res.status(201).json(newRegister);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al crear registro" })
    }
}

module.exports = registerHandler;