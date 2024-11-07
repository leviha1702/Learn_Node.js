const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000  ;
const hostname= process.env.HOST_NAME;

app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './src/public')));

app.set('/',(req,res)=>{
    req.send("Hello World");
});
app.get('/levietha', (req,res)=>{
    res.render('sample.ejs');
});
app.listen(port,hostname,() =>{
    console.log(`Example app listening on port ${port}`);
});