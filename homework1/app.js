const Koa = require("koa"),

    router = require("koa-router")(),

    render = require("koa-art-template"),

    path = require("path"),

    static = require("koa-static"),

    koabody = require("koa-body"),
    
    session=require("koa-session");

const login=require("./router/login")


const app = new Koa();

//渲染模板
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
  });


//静态资源
app.use(static('static'));

//koa-body
app.use(koabody({
    multipart:true
}))

//session

app.keys = ['some secret hurr'];

const CONFIG = {
    key: 'koa.sess', /** (string) cookie key (default is koa.sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000,
    autoCommit: true, /** (boolean) automatically commit headers (default true) */
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
    secure: false, /** (boolean) secure cookie*/
    sameSite: null, /** (string) session cookie sameSite options (default null, don't set it) */
  };
   
  app.use(session(CONFIG, app));

  //路由

router.use("/member",login);

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log("running.....");
})

