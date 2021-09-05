require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const totpRoutes = require("./routes/totpRoutes");

app.use(cors());

app.use(express.json());

app.use("/api/totp", totpRoutes);

app.get("*", function (req, res) {
    res.status(404).send("Route not Found");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log("Listening on http://localhost:" + PORT));
