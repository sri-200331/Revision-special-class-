const jwt = require('jsonwebtoken');
const SECRET = "mysecret";

const auth = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ msg: "No token, unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded; // contains id and role
        next();
    } catch (err) {
        return res.status(401).json({ msg: "Invalid token" });
    }
};

module.exports = auth;