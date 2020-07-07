  const router=require("koa-router")()

  router.get("/",ctx=>{
      ctx.body="会员管理系统"
  })

  router.get("/login",ctx=>{
      ctx.render("login")
  })


      
      




module.exports=router.routes();