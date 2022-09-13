'use strict';
const Controller = require('egg').Controller;
class CroatiaController extends Controller {
    async list() {
        const { ctx } = this;
        await this.ctx.render('admin/croatia.html')
    }
    async all() {
        const { ctx } = this
        try {
            const data = await this.service.common.croatia.all()
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
    async add() {
        const { ctx } = this
        var data=await this.service.admin.cateCroatia.all()
        await this.ctx.render('/admin/add-croatia.html',{category:data.data})
    }
    async addCroatia() {
        const { ctx } = this
        try {
            await this.service.common.croatia.addCroatia(ctx.request.body)
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
        const data = await this.service.common.croatia.edit(ctx.params.id)
        var category=await this.service.admin.cateCroatia.all()
        await this.ctx.render('/admin/edit-croatia', { data: data[0],category:category.data})
    }
    async editCroatia() {
        const { ctx } = this
        try {
            await this.service.common.croatia.editCroatia(ctx.request.body, ctx.params.id)
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
            await this.service.common.croatia.delete(ctx.params.id)
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

module.exports = CroatiaController;
