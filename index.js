const Koa = require('koa')
//koa-router 路由解析中间件
const Router = require('koa-router')
//@koa/cors 跨域处理中间件
const cors = require('@koa/cors')
//koa-body 协议解析中间件
const koaBody = require('koa-body')
const json = require('koa-json')

const app = new Koa()
const router = new Router()

router.post('/post', async (ctx) => {
  let {body} = ctx.request
  console.log(ctx.request)
  console.log(body)
  ctx.body = {
    ...body
  }
})

app.use(koaBody())
app.use(cors())
app.use(json({pretty: false, param: 'pretty'}))
app.use(router.routes())
  .use(router.allowedMethods())

  app.listen(3000)