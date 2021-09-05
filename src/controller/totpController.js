const speakeasy = require("speakeasy");
const jwt = require("jsonwebtoken");

function verifyTOTP(req, res) {
    try {
        const verified = speakeasy.totp.verify({
            secret: process.env.BASE32,
            encoding: "base32",
            token: req.headers["authorization"],
            window: 1,
        });
        if (verified) {
            const token = jwt.sign({ Issuer: "Control" }, process.env.JWT_SECRET, {
                expiresIn: "1h",
            });
            res.status(200).json({
                token: token,
            });
        } else {
            res.status(400).send("Invalid Token");
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
}

module.exports = { verifyTOTP };
