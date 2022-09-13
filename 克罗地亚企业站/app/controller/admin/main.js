'use strict';
const Controller = require('egg').Controller;
class MainController extends Controller {
    async list() {
        const { ctx } = this;
        await this.ctx.render('admin/main.html',{username:ctx.session.username})
    }
    async newPassword() {
        const { ctx } = this
        var re = await this.service.admin.main.sureoldPass(ctx.request.body)
        if (re) {
            try {
                var result = await this.service.admin.main.newPassword(ctx.request.body)
                if (result) {
                    ctx.body = {
                        code: 200,
                        msg: '修改成功'
                    }
                } else {
                    ctx.body = {
                        code: 404,
                        msg: '修改失败'
                    }
                }

            } catch (error) {
                ctx.body = {
                    code: 404,
                    msg: '修改出错'
                }
            }

        } else {
            ctx.body = {
                code: 404,
                msg: '旧密码输入错误'
            }
        }
    }

}

module.exports = MainController;
