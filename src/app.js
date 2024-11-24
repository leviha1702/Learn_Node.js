const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan')
const PgDatabase = require("./database/pg.database");
const app = express();

app.use(bodyParser.json());

app.use(morgan('dev'));

PgDatabase.connectDB();


app.use("/v1",require("./app/v1/routes"));
module.exports=app;