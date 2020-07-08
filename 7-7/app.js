const Koa = require('koa'),
  router = require('koa-router')(),
  render = require('koa-art-template'),
  static = require('koa-static'),
  koaBody = require('koa-body'),
  path = require('path'),
  fs = require('fs'),
  session = require('koa-session'),
  admin = require('./router/admin'),
  member = require('./router/member'),
  msql = require("./lib/dbclass")

//实例化KOA对象
const app = new Koa()

/////////////////////////////////////////////////////////////////////////
//配置

//模板
render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
});

//静态资源
app.use(static('static'))

//koabody
app.use(koaBody({
  multipart: true
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

///////////////////////////////////////////////////////////////////
//路由
router.use('/admin', admin)
router.use('/member', member)
router.get("/testsql", async ctx => {

  let sql = "select * from user"
  let res = await msql.query(sql)
  console.log(res);
})

///////////////////////////////////////////////////////////////////
//路由中间件
app.use(router.routes()).use(router.allowedMethods())

//服务器监听
app.listen(2000, () => {
  console.log('*localhost:2000')
})