const Service = require('egg').Service;

class WheelService extends Service {
    async all(){
        const page=this.ctx.query.page||1
        const limit=this.ctx.query.limit*1 ||20
        const offset=(page-1)*limit
        const allData=await this.app.mysql.query('select id from wheel')
        const total=allData.length
        const data=await this.app.mysql.query('select * from wheel limit ?,?', [offset, limit])
        return {total,data}
    }
    async addWheel(data){
        return await this.app.mysql.query('insert into wheel(title,image,cat_id)values(?,?,?)',[data.title,data.image,data.cat_id])
    }
    async edit(id){
        return await this.app.mysql.query('select * from wheel where id=?',[id])
    }
    async editWheel(data,id){
        return await this.app.mysql.query('update wheel set title=?,image=?,cat_id=? where id=?',[data.title,data.image,data.cat_id,id])
    }
    async delete(id){
        return await this.app.mysql.query('delete from wheel where id=?',id)
    }
    async category(title){
        return await this.app.mysql.query("select * from wheel where title=?",[title])
    }
}

module.exports = WheelService;