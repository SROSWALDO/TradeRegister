const login = require('../controllers/login');

const loginHandler = async (req, res) => {
    const { usuario, password } = req.body;

    try {
        const response = await login(usuario, password);

        if (response.error) {
            return res.status(400).json({ error: response.error });
        }

        return res.status(200).json(response);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = loginHandler;
