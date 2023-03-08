const User = require("../services/user");

exports.show = async (req, res) => {
    try {
        const user = await User.findAll();
        return res.status(200).json(user);
    } catch (error) {
        return res.send("" + error);
    }
}
