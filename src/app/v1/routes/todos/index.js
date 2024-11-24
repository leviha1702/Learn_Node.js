const express = require('express');
const todoController = require('../../controllers/todo.controller');


const router = express.Router();


//todo routes
router.get("/all",(req,res)=>todoController.getTodos (req,res));
router.get("/:todoId",(req,res)=>todoController.getTodoById (req,res));
router.post("/create",(req,res)=>todoController.createdTodo (req,res));
router.patch("/update",(req,res)=>todoController.updateTodo (req,res));
router.delete("/:todoId",(req,res)=>todoController.deleteTodo (req,res));

module.exports = router;