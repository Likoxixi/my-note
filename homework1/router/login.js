  const router=require("koa-router")()

  router.get("/",ctx=>{
      ctx.body="会员管理系统"
  })

  router.get("/login",ctx=>{
      ctx.render("login")
  })
  router.post("/loginDo",ctx=>{
    console.log(ctx.request.body);
  })


      
      




module.exports=router.routes();