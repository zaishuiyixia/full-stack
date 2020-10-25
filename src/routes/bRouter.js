const koaRouter = require('koa-router')
const bRouter = require('../api/b')

const router = new koaRouter()

router.get('/b', bRouter.b)

module.exports = router