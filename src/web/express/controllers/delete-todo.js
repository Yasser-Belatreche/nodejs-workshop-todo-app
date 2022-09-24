const { TodoModel } = require("../../../core/repositories/MongoDB/configs/models/TodoModel");

const deleteTodo = async (req, res) => {
    await TodoModel.deleteOne({ id: req.params.id });

    return res.status(200).json({ id: req.params.id });
};

module.exports = { deleteTodo };
