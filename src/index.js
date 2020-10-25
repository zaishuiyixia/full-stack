const koa = require('koa')
const path = require('path')
const app = new koa()
const helmet = require('koa-helmet')
const static = require('koa-static')

const router = require('./routes/routes')

app.use(helmet())
//传递给静态资源koa-static这个中间件要是绝对路径
app.use(static(path.join(__dirname,'../public')))
app.use(router())

app.listen(3000)