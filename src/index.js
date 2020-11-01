// const koa = require('koa')
// const path = require('path')
// const helmet = require('koa-helmet')
// const statics = require('koa-static')
// const router = require('./routes/routes')

// app.use(helmet())
//传递给静态资源koa-static这个中间件要是绝对路径
// app.use(statics(path.join(__dirname,'../public')))
// app.use(router())

//es6 改写
import koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import router from './routes/routes'
import koaBody from 'koa-body'
import jsonutil from 'koa-json'
import cors from '@koa/cors'
import compose from 'koa-compose'
import compress from 'koa-compress'

const app = new koa()

const isDevNode = process.env.NODE_ENV === 'production' ? false : true

/**
 * @description: 使用koa-compose，集成中间件
 */
const middleware = compose([
  koaBody(),
  statics(path.join(__dirname,'../public')),
  cors(),
  jsonutil({pretty: false, param: 'pretty'}),
  helmet()
])

if(!isDevNode) {
  app.use(compress())
}

app.use(middleware)
app.use(router())

app.listen(3000)