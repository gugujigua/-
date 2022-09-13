const Service = require('egg').Service;

class AroundesService extends Service {
    async all(){
        const page=this.ctx.query.page||1
        const limit=this.ctx.query.limit*1 ||2
        const offset=(page-1)*limit
        const allData=await this.app.mysql.query('select id from aroundes')
        const total=allData.length
        const data=await this.app.mysql.query('select * from aroundes limit ?,?', [offset, limit])
        return {total,data}
    }
    async addCount(data){
        return await this.app.mysql.query("insert into aroundes(headline,image,cat_id,content) values(?,?,?,?)",[data.headline,data.image,data.cat_id,data.content])
    }
    async edit(id){
        return await this.app.mysql.query('select * from aroundes where id=?',id)
    }
    async editCount(data,id){
        return await this.app.mysql.query('update aroundes set headline=?,image=?,cat_id=?,content=? where id=?',[data.headline,data.image,data.cat_id,data.content,id])
    }
    async delete(id){
        return await this.app.mysql.query('delete from aroundes where id=?',id)
    }
    async category(){
       const sql="select aroundes.cat_id,catearounds.cat_id,catearounds.title,catearounds.en_title,catearounds.description from catearounds left join aroundes on catearounds.title=aroundes.cat_id"
       return await this.app.mysql.query(sql)
    }
    async catearounds(cat_id){
        return await this.app.mysql.query('select * from aroundes where cat_id=?',[cat_id])
    }
    async cate(id){
        const data=await this.app.mysql.query('select * from aroundes where id='+id)
        return await this.app.mysql.query('select * from wheel where title=' +'"'+data[0].headline +'"')
    }
}

module.exports = AroundesService;