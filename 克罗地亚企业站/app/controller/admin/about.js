'use strict';
const Controller = require('egg').Controller;
class AboutController extends Controller {
    async list() {
        const { ctx } = this;
        await this.ctx.render('admin/about.html')
    }
    async all() {
        const { ctx } = this
        try {
            const data = await this.service.common.about.all()
            ctx.body = {
                code: 200,
                msg: '获取成功',
                data: data.data,
            }
        } catch (error) {
            ctx.body = {
                code: 404,
                msg: '获取失败'
            }
        }
    }
    async edit() {
        const { ctx } = this
        const data = await this.service.common.about.edit()
        await this.ctx.render('/admin/edit-about.html', { data: data[0] })
    }
    async editAbout() {
        const { ctx } = this
        try {
            await this.service.common.about.editAbout(ctx.request.body)
            this.ctx.body = {
                code: 200,
                msg: '编辑成功'
            }
        } catch (error) {
            console.log(error);
            this.ctx.body = {
                code: 404,
                msg: '编辑出错'
            }
        }
    }
}

module.exports = AboutController;
