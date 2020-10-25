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

router.post('/user', async (ctx) => {
  let {body, header} = ctx.request
  console.log(header)
  if(!body.name || !body.email) {
    ctx.body = {
      "code": 404,
      "msg": "name和email不得为空"
    }
    return
  }
  if(!header.role || header.role !=='admin') {
    ctx.body = {
      "code": 401,
      "msg": "unauthorized post"
    }
    return
  }
  ctx.body = {
    "code": 200,
    "data": {
      "name": "zaishuiyiixa",
      "email": "zaishuiyixa@email.com"
    }
  }
})

app.use(koaBody())
app.use(cors())
app.use(json({pretty: false, param: 'pretty'}))
app.use(router.routes())
  .use(router.allowedMethods())

  app.listen(3000)