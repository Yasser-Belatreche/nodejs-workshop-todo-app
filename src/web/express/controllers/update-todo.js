const { TodoModel } = require("../../../core/repositories/MongoDB/configs/models/TodoModel");

const updateTodo = async (req, res) => {
    const todo = await TodoModel.findOneAndUpdate({
        id: req.params.id,
        item: req.body.item,
        updatedAt: new Date(),
    });

    return res.status(200).json(todo);
};

module.exports = { updateTodo };
