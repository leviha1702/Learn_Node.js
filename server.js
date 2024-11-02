const app = require("./src/app");
const appConstants = require("./src/constants/app.constant");

const port = appConstants.PORT;

app.listen(port,()=>{
    console.log (`Example app listening os port ${port}`);
});