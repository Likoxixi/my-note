let http = require('http');

let server = http.createServer();

server.on('request', (req, res) => {
    let url = req.url;
    if (url == "/a") {
        res.setHeader("Content-Type", "text/plain;charset=utf-8");
        res.end("你好，6月");
    }
    else if (url == "/b")
        res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.end("<i>好好学</i>");

}).listen(3000, () => {
    console.log("服务器启动");
});