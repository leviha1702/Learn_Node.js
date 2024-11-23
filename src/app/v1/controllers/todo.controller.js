const todoService = require("../services/todo.service");

class todoController{
    async getTodos(_,res){
        const result= await todoService.getTodos();
        return res.status(200).json(result);
    }
    async getTodoById(req,res){
        const{todoId}=req.params;
        const result = await todoService.getTodoById(todoId);
        return res.status(200).json(result);
    }
    async createdTodo (req,res){
        const {title,user_id}=req.body;
        const result = await todoService.createdTodo(title, user_id);
        return res.status(200).json(result);
    }
    async updateTodo(req,res){
        const {todoId,title,completed,user_id} =req.body;
        const result = await todoService.updateUser(todoId,title,completed,user_id);
        return res.status(200).json(result);
    }
    async deleteTodo(req,res){
        const {todoId}=req.params;
        const result= await todoService.deleteTodo(todoId);
        return res.status(200).json(result);
    }
}

module.exports = new todoController;