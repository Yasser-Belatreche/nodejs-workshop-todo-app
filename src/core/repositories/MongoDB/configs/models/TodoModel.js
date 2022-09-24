const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
    id: String,
    item: String,
    createdAt: Date,
    updatedAt: Date,
});

const TodoModel = model("todo", todoSchema);

module.exports = { TodoModel };
