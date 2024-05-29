const { Usuario } = require('../db');

const deleteUser = async (id) => {
    try {
        const removeUser = await Usuario.findOne({ where: {id} });

        if (!removeUser) {
            throw new Error("User not found");
        }

        await removeUser.destroy();

        return { message: "Register deleted successfully" }
    } catch (error) {
        console.log(errpr);
        throw error;
    }
}

module.exports = deleteUser;