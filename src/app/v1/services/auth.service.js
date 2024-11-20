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
        const user = authModel.getUser(username);
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
    async login(username,password){
        //1. check invalid
        if(!username||!password){
            return {
                success: false,
                message:"Username and password are required",
                status : 400,
            };
        }
        //2.check existing user
        const user =await authModel.getUser(username);
        console.log(user);
        if(!user){
            return{
                success: false,
                message:"Username not exists",
                status : 400,
            };
        }
        //3.check password
        /*if(user.password !== password){
            return {
                success:false,
                message:"Password is incorrect",
                status:400,
            };
        }*/
        return{
            message:"Login success",
            user,
        };
    }
}
module.exports = new authService;