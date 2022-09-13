const Service = require('egg').Service;

class CateCroatiaService extends Service {
    async all(){
        const page=this.ctx.query.page||1
        const limit=this.ctx.query.limit*1 ||20
        const offset=(page-1)*limit
        const allData=await this.app.mysql.query('select id from cateCroatia')
        const total=allData.length
        const data=await this.app.mysql.query('select * from cateCroatia limit ?,?', [offset, limit])
        return {total,data}
    }
    async addCount(data){
        return await this.app.mysql.query("insert into cateCroatia(cat_id,title,en_title) values(?,?,?)",[data.cat_id,data.title,data.en_title])
    }
    async edit(id){
        return await this.app.mysql.query('select * from cateCroatia where id=?',id)
    }
    async editCount(data,id){
        return await this.app.mysql.query('update cateCroatia set cat_id=?,title=?,en_title=? where id=?',[data.cat_id,data.title,data.en_title,id])
    }
    async delete(id){
        return await this.app.mysql.query('delete from cateCroatia where id=?',id)
    }
}

module.exports = CateCroatiaService;