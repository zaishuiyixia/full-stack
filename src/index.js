// const koa = require('koa')
// const path = require('path')
// const helmet = require('koa-helmet')
// const statics = require('koa-static')

//es6 改写
import koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'

const app = new koa()

// const router = require('./routes/routes')
import router from './routes/routes'

app.use(helmet())
//传递给静态资源koa-static这个中间件要是绝对路径
app.use(statics(path.join(__dirname,'../public')))
app.use(router())

app.listen(3000)