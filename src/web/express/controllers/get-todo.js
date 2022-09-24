const { TodoModel } = require("../../../core/repositories/MongoDB/configs/models/TodoModel");

const getTodo = async (req, res) => {
    const todo = await TodoModel.findOne({ id: req.params.id });

    if (!todo) return res.status(404).json({ error: "not found" });

    res.status(200).json(todo);
};

module.exports = { getTodo };
