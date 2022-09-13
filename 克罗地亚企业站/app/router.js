'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller,middleware} = app;
  const checkLogin=middleware.checkLogin()
  const getCommon=middleware.getCommon()
  //管理端路由
  //登录
  router.get('/admin/login',controller.admin.login.login)
  router.get('/admin/loginout',controller.admin.login.loginOut)
  router.post('/admin/login',controller.admin.login.loginUp)
  router.post('/admin/main',checkLogin,controller.admin.main.newPassword)
  //主页
  router.get('/admin/main',checkLogin,controller.admin.main.list)
  //网站信息
  router.get('/admin/info',checkLogin,controller.admin.info.list)
  router.post('/admin/info',checkLogin,controller.admin.info.edit)
  //轮播管理
  router.get('/admin/wheel',checkLogin,controller.admin.wheel.list)
  router.get('/admin/wheel-data',checkLogin,controller.admin.wheel.all)
  router.get('/admin/add-wheel',checkLogin,controller.admin.wheel.add)
  router.post('/admin/upload',checkLogin,controller.admin.upload.banner)
  router.post('/admin/add-wheel',checkLogin,controller.admin.wheel.addWheel)
  router.get('/admin/edit-wheel/:id',checkLogin,controller.admin.wheel.edit)
  router.post('/admin/edit-wheel/:id',checkLogin,controller.admin.wheel.editWheel)
  router.post('/admin/delete-wheel/:id',checkLogin,controller.admin.wheel.delete)
  //最爱克罗地亚
  router.get('/admin/croatia',checkLogin,controller.admin.croatia.list)
  router.get('/admin/croatia-data',checkLogin,controller.admin.croatia.all)
  router.get('/admin/add-croatia',checkLogin,controller.admin.croatia.add)
  router.post('/admin/add-croatia',checkLogin,controller.admin.croatia.addCroatia)
  router.get('/admin/edit-croatia/:id',checkLogin,controller.admin.croatia.edit)
  router.post('/admin/edit-croatia/:id',checkLogin,controller.admin.croatia.editCroatia)
  router.post('/admin/delete-croatia/:id',checkLogin,controller.admin.croatia.delete) 
  //巴尔干国家(表1)
  router.get('/admin/count',checkLogin,controller.admin.count.list)
  router.get('/admin/count-data',checkLogin,controller.admin.count.all)
  router.get('/admin/add-count',checkLogin,controller.admin.count.add)
  router.post('/admin/add-count',checkLogin,controller.admin.count.addCount)
  router.get('/admin/edit-count/:id',checkLogin,controller.admin.count.edit)
  router.post('/admin/edit-count/:id',checkLogin,controller.admin.count.editCount)
  router.post('/admin/delete-count/:id',checkLogin,controller.admin.count.delete)
  //巴尔干国家（表二）
  router.get('/admin/aroundes',checkLogin,controller.admin.aroundes.list)
  router.get('/admin/aroundes-data',checkLogin,controller.admin.aroundes.all)
  router.get('/admin/add-aroundes',checkLogin,controller.admin.aroundes.add)
  router.post('/admin/add-aroundes',checkLogin,controller.admin.aroundes.addCount)
  router.get('/admin/edit-aroundes/:id',checkLogin,controller.admin.aroundes.edit)
  router.post('/admin/edit-aroundes/:id',checkLogin,controller.admin.aroundes.editCount)
  router.post('/admin/delete-aroundes/:id',checkLogin,controller.admin.aroundes.delete)
  //行程介绍
  router.get('/admin/tour',checkLogin,controller.admin.tour.list)
  router.get('/admin/tour-data',checkLogin,controller.admin.tour.all)
  router.get('/admin/add-tour',checkLogin,controller.admin.tour.add)
  router.post('/admin/add-tour',checkLogin,controller.admin.tour.addTour)
  router.get('/admin/edit-tour/:id',checkLogin,controller.admin.tour.edit)
  router.post('/admin/edit-tour/:id',checkLogin,controller.admin.tour.editTour)
  router.post('/admin/delete-tour/:id',checkLogin,controller.admin.tour.delete)
  //资讯
  router.get('/admin/news',checkLogin,controller.admin.news.list)
  router.get('/admin/news-data',checkLogin,controller.admin.news.all)
  router.get('/admin/add-news',checkLogin,controller.admin.news.add)
  router.post('/admin/add-news',checkLogin,controller.admin.news.addNews)
  router.get('/admin/edit-news/:id',checkLogin,controller.admin.news.edit)
  router.post('/admin/edit-news/:id',checkLogin,controller.admin.news.editNews)
  router.post('/admin/delete-news/:id',checkLogin,controller.admin.news.delete)
  //关于我们
  router.get('/admin/about',checkLogin,controller.admin.about.list)
  router.get('/admin/about-data',checkLogin,controller.admin.about.all)
  router.get('/admin/edit-about/:id',checkLogin,controller.admin.about.edit)
  router.post('/admin/edit-about/:id',checkLogin,controller.admin.about.editAbout)
  //轮播分类
  router.get('/admin/category',checkLogin, controller.admin.category.list)
  router.get('/admin/category-data',checkLogin,controller.admin.category.all)
  router.get('/admin/add-category',checkLogin,controller.admin.category.add)
  router.post('/admin/add-category',checkLogin,controller.admin.category.addCount)
  router.get('/admin/edit-category/:id',checkLogin,controller.admin.category.edit)
  router.post('/admin/edit-category/:id',checkLogin,controller.admin.category.editCount)
  router.post('/admin/delete-category/:id',checkLogin,controller.admin.category.delete)
  //克罗地亚分类
  router.get('/admin/cateCroatia',checkLogin, controller.admin.cateCroatia.list)
  router.get('/admin/cateCroatia-data',checkLogin,controller.admin.cateCroatia.all)
  router.get('/admin/add-cateCroatia',checkLogin,controller.admin.cateCroatia.add)
  router.post('/admin/add-cateCroatia',checkLogin,controller.admin.cateCroatia.addCount)
  router.get('/admin/edit-cateCroatia/:id',checkLogin,controller.admin.cateCroatia.edit)
  router.post('/admin/edit-cateCroatia/:id',checkLogin,controller.admin.cateCroatia.editCount)
  router.post('/admin/delete-cateCroatia/:id',checkLogin,controller.admin.cateCroatia.delete)
  //巴尔干国家分类
  router.get('/admin/cateArounds',checkLogin, controller.admin.cateArounds.list)
  router.get('/admin/cateArounds-data',checkLogin,controller.admin.cateArounds.all)
  router.get('/admin/add-cateArounds',checkLogin,controller.admin.cateArounds.add)
  router.post('/admin/add-cateArounds',checkLogin,controller.admin.cateArounds.addCount)
  router.get('/admin/edit-cateArounds/:id',checkLogin,controller.admin.cateArounds.edit)
  router.post('/admin/edit-cateArounds/:id',checkLogin,controller.admin.cateArounds.editCount)
  router.post('/admin/delete-cateArounds/:id',checkLogin,controller.admin.cateArounds.delete)
  //行程介绍分类
  router.get('/admin/cateTour',checkLogin, controller.admin.cateTour.list)
  router.get('/admin/cateTour-data',checkLogin,controller.admin.cateTour.all)
  router.get('/admin/add-cateTour',checkLogin,controller.admin.cateTour.add)
  router.post('/admin/add-cateTour',checkLogin,controller.admin.cateTour.addCount)
  router.get('/admin/edit-cateTour/:id',checkLogin,controller.admin.cateTour.edit)
  router.post('/admin/edit-cateTour/:id',checkLogin,controller.admin.cateTour.editCount)
  router.post('/admin/delete-cateTour/:id',checkLogin,controller.admin.cateTour.delete)






  






  
  //客户端路由
  router.get('/',getCommon,controller.client.home.index);
  router.get('/croatia',getCommon,controller.client.home.croatia)
  router.get('/croatia/:id',getCommon,controller.client.home.croatiaX)
  router.get('/arounds',getCommon,controller.client.home.arounds)
  router.get('/arounds/:id',getCommon,controller.client.home.aroundsX)
  router.get('/tour',getCommon,controller.client.home.tour)
  router.get('/tour/:id',getCommon,controller.client.home.tourX)
  router.get('/news',getCommon,controller.client.home.news)
  router.get('/news/:id',getCommon,controller.client.home.newsX)
  router.get('/about',getCommon,controller.client.home.about)
};
