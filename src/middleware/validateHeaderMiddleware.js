function validateAuthorization(req, res, next) {
    if (
        req.headers.authorization !== undefined &&
        req.headers.authorization !== null &&
        req.headers.authorization !== "" &&
        typeof req.headers.authorization == "string"
    ) {
        next();
    } else {
        res.status(400).send("Invalid Token");
    }
}

module.exports = { validateAuthorization };
