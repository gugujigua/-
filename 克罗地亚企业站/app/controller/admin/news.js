'use strict';
const Controller = require('egg').Controller;
class NewsController extends Controller {
    async list() {
        const { ctx } = this;
        await this.ctx.render('admin/news.html')
    }
    async all() {
        const { ctx } = this
        try {
            const data = await this.service.common.news.all()
            ctx.body = {
                code: 200,
                msg: '获取成功',
                data: data.data,
                total: data.total
            }
        } catch (error) {
            ctx.body = {
                code: 404,
                msg: '获取失败'
            }
        }
    }
    async add(){
        const { ctx }=this
        await this.ctx.render('admin/add-news.html')
    }
    async addNews() {
        const { ctx } = this
        try {
            await this.service.common.news.addNews(ctx.request.body)
           
            ctx.body = {
                code: 200,
                msg: '添加成功'
            }
        } catch (error) {
            ctx.body = {
                code: 404,
                msg: '添加出错'
            }
        }
    }
    async edit() {
        const { ctx } = this
        const data = await this.service.common.news.edit(ctx.params.id)
        await this.ctx.render('/admin/edit-news.html', { data: data[0] })
    }
    async editNews() {
        const { ctx } = this
        try {
            await this.service.common.news.editNews(ctx.request.body, ctx.params.id)
            this.ctx.body = {
                code: 200,
                msg: '编辑成功'
            }
        } catch (error) {
            this.ctx.body = {
                code: 404,
                msg: '编辑出错'
            }
        }
    }
    async delete() {
        const { ctx } = this
        try {
            await this.service.common.news.delete(ctx.params.id)
            ctx.body = {
                code: 200,
                msg: '删除成功'
            }
        } catch (error) {
            ctx.body = {
                code: 404,
                msg: '删除出错'
            }
        }
    }
}

module.exports = NewsController;
