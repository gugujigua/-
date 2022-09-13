'use strict'

// const { createContext } = require("../public/admin/wangEditor")

module.exports=()=>{
    return async function checkLogin(ctx,next){
        if(ctx.session.isLogin){
            await next()
        }else{
            ctx.redirect('/admin/login')
        }
    }
}