const app = require("./src/app");
const appConstants = require("./src/constants/app.constant");

const port = appConstants.port;

app.listen(port,()=>{
    console.log (`Example app listening os port ${port}`);
});