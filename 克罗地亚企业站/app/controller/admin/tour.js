'use strict';
const Controller = require('egg').Controller;
class TourController extends Controller {
    async list() {
        const { ctx } = this;
        await this.ctx.render('admin/tour.html')
    }
    async all() {
        const { ctx } = this
        try {
            const data = await this.service.common.tour.all()
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
        var data=await this.service.admin.cateTour.all()
        await this.ctx.render('admin/add-tour.html',{category:data.data})
    }
    async addTour() {
        const { ctx } = this
        try {
            await this.service.common.tour.addTour(ctx.request.body)
           
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
        const data = await this.service.common.tour.edit(ctx.params.id)
        var category=await this.service.admin.cateTour.all()
        await this.ctx.render('/admin/edit-tour.html', { data: data[0],category:category.data})
    }
    async editTour() {
        const { ctx } = this
        try {
            await this.service.common.tour.editTour(ctx.request.body, ctx.params.id)
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
            await this.service.common.tour.delete(ctx.params.id)
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

module.exports = TourController;
