const express = require ('express');
const app = express();
//đinh ngĩa route gốc
app.get('/',(req,res)=>{
    res.send('Chào mừng đến với API Node.js!');
});
//nghe tại cổng 3000
app.listen(3000,()=>{
    console.log('Server Express.js đang chạy tại http://localhost:3000');
});