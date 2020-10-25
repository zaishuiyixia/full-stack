const Koa = require('koa')
//koa-router 路由解析中间件
const Router = require('koa-router')
//@koa/cors 跨域处理中间件
const cors = require('@koa/cors')
//koa-body 协议解析中间件
const koaBody = require('koa-body')
//格式化返回数据中间件
const json = require('koa-json')

const app = new Koa()
const router = new Router()

//路由路径前缀设置
router.prefix('/api')

//获取get请求中的params
router.get('/get', ctx => {
  const params = ctx.request.query
  console.log(JSON.stringify(params, null, 2))
  ctx.body = {...params}
})

router.post('/post', async (ctx) => {
  let {body, header} = ctx.request
  console.log(ctx.request)
  console.log(header)
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