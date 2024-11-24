const userModel = require("../models/user.model");

class userService{
    async getUsers(){
        const users = await userModel.getUsers()
        if(!users) {
            return{error : "No users found"};
        }
        return{
            users,
        };
    }
    async getUserById({ userId }){
        if(!userId){
            return {error:"User ID is required"};
        }
        const user=await userModel.getUserById(userId);
        if(!use){
            return {error :"User not found"};
        }
        return{
            user,
        };
    }
    async createdUser({ name,email }){
        if(!name||!email){
            return{error : "Name and email are required"};
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
module.exports = new userService();