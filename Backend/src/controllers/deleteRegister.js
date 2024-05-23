const { Registro } = require("../db");

const deleteRegister = async (id) => {
    try {
        const removedRegister = await Registro.findOne({ where: {id} });

        if (!removedRegister) {
            throw new Error("Register not found");
        }

        await removedRegister.destroy();

        return { message: "Register deleted successfully" };
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = deleteRegister;