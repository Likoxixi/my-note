// require 是一个方法，用于加载模块
// 在Node中，模块有三种：
// 1.具名的核心模块，fs，http
// 2.用户自己编写的文件模块

console.log("加载b模块");


require("./a.js");


console.log("b模块加载完毕");


var aexp = require("./a.js");
console.log(aexp.add(30, 49));
console.log(aexp.foo);