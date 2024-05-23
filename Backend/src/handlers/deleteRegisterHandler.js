const deletedRegister = require("../controllers/deleteRegister");

const deletedRegisterHandler = async (req, res) => {
    try {
        const { id } = req.params;

        if(!id) {
            return res.status(400).send("Bad request! Please send an ID");
        }
        const deleteRegister = await deletedRegister(id);
        return res.json(deleteRegister);
    } catch (error) {
        console.log("Error deleting product", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = deletedRegisterHandler;