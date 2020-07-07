//加载 http 核心模块
var http = require("http");

//使用 http.createServer()创建一个Web服务器
// 返回一个Server实例
var server = http.createServer();

server.on("request", (request, response) => {
    console.log("收到客户端请求" + request.url);
    if (request.url == "/lexus")
        response.write("Lexus");
    else if (request.url == "/ig")
        response.write("The shy");
    response.end();
})



server.listen(3000, () => {
    console.log("服务器启动成功，通过http://127.0.0.1:3000/ 进行访问");
})