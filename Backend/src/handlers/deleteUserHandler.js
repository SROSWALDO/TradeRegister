const deleteUser = require("../controllers/deleteUser");

const deleteUserHandler = async (req, res) => {
    try {
        const { id } = req.params;

        if(!id) {
            return res.status(400).send("Bad request! Please send an ID");
        }
        const deletedUser = await deleteUser(id);
        return res.json(deletedUser);
    } catch (error) {
        console.log("Error deleting product", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = deleteUserHandler;