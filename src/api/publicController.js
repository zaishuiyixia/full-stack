import svgCaptcha from 'svg-captcha'

class PublicController {
  constructor() {}
  async getCaptcha(ctx) {
    const newCaptcha = svgCaptcha.create({
      size: 4, //验证码长度
      color: true,//验证码字体颜色
      noise: Math.floor(Math.random()*5),//干扰线的条数
      width: 150,
      height: 50
    })
    console.log(newCaptcha)
    ctx.body = {
      code: 200,
      data: newCaptcha.data
    }
  }
}

export default new PublicController()