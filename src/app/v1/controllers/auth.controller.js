const authService = require("../services/auth.service");

class authController{
    static register(req,res){
        const {username,password} = req.body;

        const result = authService.register(username,password);
        if(result.success===false){
            return res.status(result.status).json({
                message:result.message,
            });
        }
        
        return res.status(201).json({
            message: "User created",
            data:result,
        });
    }
    static login (req,res){
        const{username,password} = req.body;
        const result = authService.login(username,password);
        return res.status(200).json({
            message:result.message,
        });
    }
}

module.exports = authController;