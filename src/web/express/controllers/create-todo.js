const { createTodoUsecase } = require("../../../core/configuration");

const createTodo = async (req, res) => {
    const data = await createTodoUsecase.handle(req.body.item);

    res.status(201).json(data);
};

module.exports = { createTodo };
