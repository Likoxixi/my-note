# 简单的http

```javascript
//加载 http 核心模块
var http = require("http");  

//使用 http.createServer()创建一个Web服务器
// 返回一个Server实例
var server = http.createServer(); 

server.on("request", () => {
    console.log("收到客户端请求");
})

server.listen(3000, () => {
    console.log("服务器启动成功，通过http://127.0.0.1:3000/ 进行访问");
})


```

```javascript

//request 可以接收两个参数
// 1.request 请求对象
//    请求对象可以用来获取客户端发送的一些请求信息，例：请求路径
// 2.response 响应对象
//    响应对象可以用来给客户端发送响应消息
// 2.1.response有一个方法 write给用户响应信息
// 2.2.write可以执行多次，但必须以end结束
server.on("request", (request, response) => {
    console.log("收到客户端请求" + request.url);
    if (request.url == "/lexus")
        response.write("Lexus");
    else if (request.url == "/ig")
        response.write("The shy");
    response.end();
})
```

