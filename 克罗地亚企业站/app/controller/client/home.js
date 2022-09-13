'use strict';
const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    this.ctx.query.limit = 4
    const data = await this.service.common.croatia.category("克罗地亚最热景点")
    var wheel = await ctx.service.common.wheel.category("首页轮播")
    var date = await this.service.common.news.all()
    for (var i in date.data) {
      date.data[i].create_time = ctx.helper.format(date.data[i].create_time)
    }
    await this.ctx.render('client/index.html', { croatia: data, wheel: wheel, news: date.data})
  }
  async croatia() {
    const { ctx } = this
    const data = await this.service.common.croatia.category("克罗地亚最热景点")
    const date = await this.service.common.croatia.category("精选陆地景点")
    const dete = await this.service.common.croatia.category("岛屿与半岛")
    var wheel = await ctx.service.common.wheel.category("最爱克罗地亚轮播")
    await this.ctx.render('client/croatia.html', {
      croatia: data,
      wheel: wheel,
      groud: date,
      land: dete
    })
  }
  async croatiaX() {
    const { ctx } = this
    const data = await this.service.common.croatia.cate(ctx.params.id)
    const date = await this.service.common.croatia.edit(ctx.params.id)
    await this.ctx.render('client/croatiaX.html', { wheel: data, croatiaX: date[0] })
  }
  async arounds() {
    const { ctx } = this
    var wheel = await ctx.service.common.wheel.category("周边巴尔干国家轮播")
    const result = await this.service.common.aroundes.category()
    const data = await this.service.common.aroundes.catearounds('斯洛文尼亚')
    const date = await this.service.common.aroundes.catearounds('塞尔维亚')
    const cate = await this.service.common.aroundes.catearounds('波黑 ')
    const black = await this.service.common.aroundes.catearounds('黑山 ')
    await this.ctx.render('client/arounds.html', {
      wheel: wheel,
      around: result,
      data: data,
      date: date,
      cate: cate,
      black: black
    })
  }
  async aroundsX() {
    const { ctx } = this
    const data = await this.service.common.aroundes.cate(ctx.params.id)
    const date=await this.service.common.aroundes.edit(ctx.params.id)
    await this.ctx.render('client/aroundsX.html', { wheel: data,aroundsX:date[0] })
  }
  async tour() {
    const { ctx } = this
    var wheel = await ctx.service.common.wheel.category("行程介绍轮播")
    var data = await ctx.service.common.tour.category("行程介绍")
    await this.ctx.render('client/tour.html', { wheel: wheel, tour: data })
  }
  async tourX() {
    const { ctx } = this
    const data = await this.service.common.tour.edit(ctx.params.id)
    const result = await this.service.common.tour.categoryX(ctx.params.id)
    await this.ctx.render('client/tourX.html', { tourX: data[0], wheel: result })
  }
  async news() {
    const { ctx } = this
    var wheel = await ctx.service.common.wheel.category("资讯轮播")
    this.ctx.query.limit = 4
    var date = await this.service.common.news.all()
    for (var i = 0; i < date.data.length; i++) {
      date.data[i].create_time = ctx.helper.format(date.data[i].create_time)
    }

    await this.ctx.render('client/news.html', {
      wheel: wheel, news: date.data,
      pages: date.pages,
      page: ctx.query.page || 1
    })
  }
  async newsX() {
    const { ctx } = this
    var date = await this.service.common.news.edit(ctx.params.id)
    var wheel = await ctx.service.common.wheel.category("资讯轮播")
    await this.ctx.render('client/newsX.html', { wheel: wheel, newsX: date[0] })
  }
  async about() {
    const { ctx } = this
    var wheel = await ctx.service.common.wheel.category("关于我们轮播")
    const data=await this.service.common.about.edit()
    await this.ctx.render('client/about.html', { wheel: wheel,about:data[0]})
  }
}

module.exports = HomeController;
