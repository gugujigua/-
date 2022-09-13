'use strict';
const Controller = require('egg').Controller;
class WheelController extends Controller {
    async list() {
        const { ctx } = this;
        await this.ctx.render('admin/wheel.html')
    }
    async all() {
        const { ctx } = this
        try {
            const data = await this.service.common.wheel.all()
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
        var data=await this.service.admin.category.all()
        await this.ctx.render('/admin/add-wheel.html',{category:data.data})
    }
    async addWheel() {
        const { ctx } = this
        try {
            await this.service.common.wheel.addWheel(ctx.request.body)
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
        const data = await this.service.common.wheel.edit(ctx.params.id)
        const category=await this.service.admin.category.all()
        await this.ctx.render('/admin/edit-wheel', { data: data[0],category:category.data })
    }
    async editWheel() {
        const { ctx } = this
        try {
            await this.service.common.wheel.editWheel(ctx.request.body, ctx.params.id)
            this.ctx.body={
                code:200,
                msg:'编辑成功'
            }
        } catch (error) {
            console.log('出错',error);
           this.ctx.body={
               code:404,
               msg:'编辑出错'
           }
        }
    }
    async delete(){
        const { ctx }=this
        try {
            await this.service.common.wheel.delete(ctx.params.id)
            ctx.body={
                code:200,
                msg:'删除成功'
            }
        } catch (error) {
            ctx.body={
                code:404,
                msg:'删除出错'
            }
        }
    }
    async category(){
        const { ctx }=this
        await this.service.common.wheel.category(ctx.request.body)
    }
}

module.exports = WheelController;
