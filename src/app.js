const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.get("/Login", (req,res)=>{
    console.log("Client doing call a API");
    res.send("Hello World!");
});
app.use('./v1/auth',require('./app/v1/routes'));

module.exports=app;