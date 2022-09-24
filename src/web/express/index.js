const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");

const { mainRouter } = require("./routes");

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", mainRouter);

const startExpressServer = () => {
    const PORT = 3000;

    app.listen(PORT, () => {
        console.log(`Todo app listening on port ${PORT}`);
    });
};

module.exports = { startExpressServer };
