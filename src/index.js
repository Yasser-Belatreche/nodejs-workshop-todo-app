const { connectToMongo } = require("./core/repositories/MongoDB/configs/db");
const { startExpressServer } = require("./web/express");

connectToMongo().then(() => {
    console.log("MongoDB connect");

    startExpressServer();
});
