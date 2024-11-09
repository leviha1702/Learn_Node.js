const express = require('express');
const path = require('path');
const configViewEnginge = require('./src/configs/viewEngine');
const webRoutes = require('./src/app2/routes/web');

require('dotenv').config();


const app = express();
const port = process.env.PORT || 8000  ;
const hostname= process.env.HOST_NAME;

configViewEnginge(app);

app.use('/', webRoutes);


app.listen(port,hostname,() =>{
    console.log(`Example app listening on port ${port}`);
});