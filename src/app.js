const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan')
const PgDatabase = require("./database/pg.database");
const app = express();

app.use(bodyParser.json());

app.use(morgan('dev'));

PgDatabase.connectDB();
app.get("/Login", (req,res)=>{
    console.log("Client doing call a API");
    res.send("Hello World!");
});
app.use("/v1/auth",require("./app/v1/routes"));
app.use("/v1",require("./app/v1/routes/user"));
module.exports=app;