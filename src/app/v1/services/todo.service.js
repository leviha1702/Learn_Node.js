const todoModel = require("../models/todo.model");

class todoService{
    async getTodos(){
        const todos = await todorModel.getTodos()
        if(!todos) {
            return{error : "No users found"};
        }
        return{
            todos,
        };
    }
    async getUserById({ todoId }){
        if(!todoId){
            return {error:"Todo ID is required"};
        }
        const todo=await todoModel.getTodoById(todoId);
        return{
            todo,
        };
    }
    async createdUser({ title,user_id }){
        if(!title||!user_id){
            return{error : "title and user Id are required"};
        }
        const user = await userModel.createUser(name,email);
        if(!user){
            return{error : "User not created"};
        }
        return{
            message:"User created successfully",
            user,
        };
    }
    async updateUser({userId,name,email}){
        if(!userId)
        {
            return{error:"User ID required"};
        }
        const user = await userModel.updateUser(userId,name,email);
        if(!user)
        {
                return{error:"User not update"};
        }
        return{
            user,
        };
    }
    deleteUser({userId}){
        if(!userId)
        {
                    return{error:"User ID is required"};
        }
        userModel.deleteUser(userId); 
        return{
            message:"User deleted successfully",
        };
    }
}
module.exports = new todoService;