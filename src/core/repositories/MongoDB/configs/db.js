const mongoose = require("mongoose");

const connectToMongo = () => {
    const MONGO_URI = process.env.MONGO_URI;

    if (!MONGO_URI) throw new Error("no MONGO_URI in the env");

    return mongoose.connect(MONGO_URI);
};

module.exports = { connectToMongo };
