'use strict'

module.exports=()=>{
    return async function getCommon(ctx,next){
        var info=await ctx.service.common.info.list()
        ctx.locals.info=info[0]
        ctx.locals.title=""
        ctx.locals.keyword=""
        ctx.locals.description=""
        await next()
    }
}