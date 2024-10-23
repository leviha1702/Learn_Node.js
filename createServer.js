const http = require('http');
const server = http.createServer((req,res)=>{
    res.statusCode = 200; //thiệt lập mã phản hồi HTTP
    res.setHeader('Content-Type','text/plain');//định dạng phản hồi là văn bản
    res.end('Hello, World!\n'); //Kết thúc phản hồi và gửi nội dung với client
});
server.listen(3000,'127.0.0.1',()=>{
    console.log('Server đang chạy tại http://127.0.0.1:3000/');
});
