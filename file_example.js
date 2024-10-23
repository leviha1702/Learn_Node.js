const fs = require('fs');
//Ghi dữ liệu vào file
fs.writeFile('example.txt','Node.js là tuyệt vời!',(err)=>{
    if(err) throw err;
    console.log('Đã ghi dữ liệu vào file.');
    //đọc dữ liệu từ file
    fs.readFile('example.txt','utf8',(err,data)=>{
        if(err) throw err;
        console.log('Nội dung file:',data);
    });
});