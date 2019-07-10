//引入express框架
const express = require('express')
//引入模板引擎
const ejs = require('ejs')
//引入路由模块
const router = require('./routers')
//搭建服务器
const app = express()
//设置服务器端口并监听
app.listen(3000, () => {
    console.log('the server is running at http://127.0.0.1:3000')
})
//托管静态资源
app.use('assets', express.static('./assets'))
app.use('uploads', express.static('./uploads'))
//设置模板引擎为ejs
app.set('view engine', 'ejs')
//// 指定模板文件的目录 ，后期使用ejs的时候就可以参照这个目录进行ejs文件查询
app.set('views', 'views')

//设置路由中间件
app.use(router)