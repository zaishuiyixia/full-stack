const koaRouter = require('koa-router')
const aRouter = require('../api/a')

const router = new koaRouter()

router.get('/a', aRouter.a)

module.exports = router