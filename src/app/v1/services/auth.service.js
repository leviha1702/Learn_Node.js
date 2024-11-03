const authModel = require("../models/auth.model");

class authService{
    register(username,password){
        //1. check invalid
        if(!username||!password){
            return {
                success: false,
                message:"Username and password are required",
                status : 400,
            };
        }
        //2.check existing user
        const user =authModel.getUser(username);
        if(user){
            return{
                success: false,
                message:"Username already exists",
                status : 400,
            };
        }
        authModel.createUser(username,password);
        console.log("Access user created account");
        return {
            username,
            password,
        };
    }
    login(username,password){
        return{
            message:"Login success",
        };
    }
}
module.exports = new authService;