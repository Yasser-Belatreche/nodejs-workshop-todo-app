const { CreateTodoUsecase } = require("./usecases/create-todo-usecase");

const { MongoTodoRepository } = require("./repositories/MongoDB/MongoTodoRepository");

const createTodoUsecase = new CreateTodoUsecase(new MongoTodoRepository());

module.exports = { createTodoUsecase };
