'use strict';
const Controller = require('egg').Controller;
class InfoController extends Controller {
    async list() {
        const { ctx } = this;
        const data = await this.service.common.info.list()
        await this.ctx.render('admin/info.html', { info: data[0] })
    }
    async edit() {
        const { ctx } = this
        try {
            const data = await this.service.common.info.edit(ctx.request.body)
            if (data) {
                ctx.body = {
                    code: 200,
                    msg: '提交成功'
                }
            } else {
                ctx.body = {
                    code: 404,
                    msg: '提交失败'
                }
            }
        } catch (error) {
            ctx.body = {
                code: 400,
                msg: '出错啦'
            }
        }
    }
}
module.exports = InfoController;
