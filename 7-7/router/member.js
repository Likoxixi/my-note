const router = require('koa-router')(),
    msql = require("../lib/dbclass");
router.get('/', ctx => {

    console.log('会员管理首页')

})

router.get('/login', ctx => {

    //登录模板
    ctx.render('login')

})

router.post('/loginDo', ctx => {

    let { username, pwd } = ctx.request.body

    //验证用户名和密码的合法性
    let uname = 'ADMIN'
    let password = 'ADMIN'

    if (uname == username && password == pwd) { //验证通过，创建session

        ctx.session.admin = uname

        ctx.body = 'success'

    } else {
        ctx.body = 'fail'
    }

})

router.get("/reg", ctx => {
    ctx.render("reg")
})

router.post("/regDo", async ctx => {
    //接收表单数据
    let { username, name, tel } = ctx.request.body;
    let sql = `insert into user(user_name,name,tel) values('${username}','${name}','${tel}');`;


    //执行语句
    let res = await msql.query(sql);
    console.log(res);

})
router.get("/userlist", async ctx => {
    //读取数据
    let sql = "select id ,user_name,name,tel from user where tel regexp '^1(3|5|7|8|9)[0-9]{9}$' order by id desc limit 0,5;"
    let val = await msql.query(sql);
    console.log(val);


    //渲染数据
    ctx.render('userlist', { val })
})

module.exports = router.routes()