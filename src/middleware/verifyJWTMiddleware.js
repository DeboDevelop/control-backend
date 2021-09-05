const jwt = require("jsonwebtoken");

function verifyJWT(req, res, next) {
    try {
        const decoded = jwt.verify(req.headers["authorization"], process.env.JWT_SECRET);
        next();
    } catch (err) {
        console.log(err);
        return res.status(400).send("Invalid Token");
    }
}

module.exports = { verifyJWT };
