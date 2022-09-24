const { TodoModel } = require("../../../core/repositories/MongoDB/configs/models/TodoModel");

const getTodos = async (req, res) => {
    const todos = await TodoModel.find();

    res.status(200).json(todos);
};

module.exports = { getTodos };
