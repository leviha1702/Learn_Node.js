/*const express = require ('express');
const app = express();
const bodyParser = require("body-parser");
const { message } = require('statuses');
app.use(bodyParser.json());
//đinh ngĩa route gốc
app.get('/',(req,res)=>{
    res.send('Chào mừng đến với API Node.js!');
});
app.get('/world',(req,res)=>{
    console.log("Client doing call a API");
    res.json({message:"Hello World!"});
});
app.post('/profile',(req,res)=>{
    const {email,password} = req.body;
    if(! email || !password){
        return res.json({
            message : "Email or Password is required",
        });
    }
    if(Number(password) === 123456){
        return res.json({
        message : "Login success",
        });
    }
    return res.json({
        message: "Login fail",
    });
});
app.get('/profile',(req,res)=>{
    console.log(req.body);
    res.json({
        name:"Le Viet Ha",
        age:19,
        address:"Nha Trang",
    });
});
//nghe tại cổng 3000
app.listen(3000,()=>{
    console.log('Server Express.js đang chạy tại http://localhost:3000');
});*/