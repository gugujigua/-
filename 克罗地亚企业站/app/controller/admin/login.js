'use strict';
const Controller = require('egg').Controller;
class LoginController extends Controller {
    async login() {
        const { ctx } = this;
        await this.ctx.render('admin/login.html')
    }
    async loginUp() {
        const { ctx } = this;
        try {
            this.ctx.validate({
                username: { type: 'string', require: true },
                password: { type: 'string', require: true }
            }, this.ctx.request.body)
            const data = await this.service.admin.login.loginUp(ctx.request.body)
            if (data) {
                this.ctx.body = {
                    code: 200,
                    msg: '登录成功'
                }
            } else {
                ctx.body = {
                    code: 404,
                    msg: '原密码输入错误！'
                }
            }
        } catch (error) {
            ctx.body = {
                code: 404,
                msg: '登录失败'
            }
        }


    }
    async loginOut() {
        const { ctx } = this
        ctx.session = null
        this.ctx.redirect('/admin/login')
    }
}

module.exports = LoginController;
