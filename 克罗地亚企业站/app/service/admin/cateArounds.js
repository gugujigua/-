const Service = require('egg').Service;

class CateAroundsService extends Service {
    async all(){
        const page=this.ctx.query.page||1
        const limit=this.ctx.query.limit*1 ||20
        const offset=(page-1)*limit
        const allData=await this.app.mysql.query('select id from cateArounds')
        const total=allData.length
        const data=await this.app.mysql.query('select * from cateArounds limit ?,?', [offset, limit])
        return {total,data}
    }
    async addCount(data){
        return await this.app.mysql.query("insert into cateArounds(cat_id,title,en_title,description) values(?,?,?,?)",[data.cat_id,data.title,data.en_title,data.description])
    }
    async edit(id){
        return await this.app.mysql.query('select * from cateArounds where id=?',id)
    }
    async editCount(data,id){
        return await this.app.mysql.query('update cateArounds set cat_id=?,title=?,en_title=?,description=? where id=?',[data.cat_id,data.title,data.en_title,data.description,id])
    }
    async delete(id){
        return await this.app.mysql.query('delete from cateArounds where id=?',id)
    }
}

module.exports = CateAroundsService;