const Service = require('egg').Service;

class NewsService extends Service {
    async all(){
        const page=this.ctx.query.page||1
        const limit=this.ctx.query.limit*1 ||2
        const offset=(page-1)*limit
        const allData=await this.app.mysql.query('select id from news')
        const total=allData.length
        const data=await this.app.mysql.query('select * from news limit ?,?', [offset, limit])
        const pages=Math.ceil(total/limit)
        return {total,data,pages}
    }
    async addNews(data){
        return await this.app.mysql.query("insert into news(title,image,description,content,create_time) values(?,?,?,?,?)",[data.title,data.image,data.description,data.content,Date.now()])
    }
    async edit(id){
        return await this.app.mysql.query('select * from news where id=?',[id])
    }
    async editNews(data,id){
        return await this.app.mysql.query('update news set title=?,image=?,description=?,content=? where id=?',[data.title,data.image,data.description,data.content,id])
    }
    async delete(id){
        return await this.app.mysql.query('delete from news where id=?',id)
    }
}

module.exports = NewsService;