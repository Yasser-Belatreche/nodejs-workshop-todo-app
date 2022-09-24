const { TodoItem } = require("../entities/TodoItem");

class CreateTodoUsecase {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }

    async handle(item) {
        const todo = TodoItem.Create(item);

        await this.todoRepository.save(todo);

        return todo.state();
    }
}

module.exports = { CreateTodoUsecase };
