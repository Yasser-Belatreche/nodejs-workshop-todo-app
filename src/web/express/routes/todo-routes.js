const crypt = require("crypto");
const { Router } = require("express");

const { getTodo } = require("../controllers/get-todo");
const { getTodos } = require("../controllers/get-todos");
const { createTodo } = require("../controllers/create-todo");
const { deleteTodo } = require("../controllers/delete-todo");
const { updateTodo } = require("../controllers/update-todo");

const todoRouter = Router();

todoRouter.get("/", getTodos);
todoRouter.get("/:id", getTodo);
todoRouter.post("/", createTodo);
todoRouter.put("/:id", updateTodo);
todoRouter.delete("/:id", deleteTodo);

module.exports = { todoRouter };
