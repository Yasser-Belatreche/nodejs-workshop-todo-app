const { TodoModel } = require("./configs/models/TodoModel");

class MongoTodoRepository {
    async save(todo) {
        const todoModel = new TodoModel(todo.state());

        await todoModel.save();
    }
}

module.exports = { MongoTodoRepository };
