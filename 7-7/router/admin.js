const router = require('koa-router')(),
      fs = require('fs')

//路由守卫
router.use(async(ctx,next) =>{

    //判断是否登录
    if (!ctx.session.admin){

        ctx.redirect('member/login')

    } else {

        await next()
    }

    
})

//根路由
router.get('/', async(ctx) =>{

   ctx.render('admin')

})

router.post('/addDo', ctx =>{

    let {title,price} = ctx.request.body;

    let file = ctx.request.files.photo

    //上传到服务器
    let dirName = 'static/upload'
    if (!fs.existsSync(dirName)){
        fs.mkdirSync(dirName)
    }

    if (file){

        //管道流
        let readStream = fs.createReadStream(file.path)
        let writeStream = fs.createWriteStream(dirName + '/' + file.name)
        if (readStream.pipe(writeStream)){
            console.log('文件上传成功')
        }

    }
    

    //渲染到页面
    ctx.render('product',{title,price,photo: '../upload/' + file.name})


})



module.exports = router.routes()