function validateUpdate(req, res, next) {
    if (req.params.id !== undefined && req.params.id !== null && req.params.id !== "") {
        next();
    } else {
        res.status(400).send("Invalid Id");
    }
}

module.exports = { validateUpdate };
