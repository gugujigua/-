const Service = require('egg').Service;

class CategoryService extends Service {
    async all(){
        const page=this.ctx.query.page||1
        const limit=this.ctx.query.limit*1 ||20
        const offset=(page-1)*limit
        const allData=await this.app.mysql.query('select id from category')
        const total=allData.length
        const data=await this.app.mysql.query('select * from category limit ?,?', [offset, limit])
        return {total,data}
    }
    async addCount(data){
        return await this.app.mysql.query("insert into category(title,en_title,description) values(?,?,?)",[data.title,data.en_title,data.description])
    }
    async edit(id){
        return await this.app.mysql.query('select * from category where id=?',id)
    }
    async editCount(data,id){
        return await this.app.mysql.query('update category set title=?,en_title=?,description=? where id=?',[data.title,data.en_title,data.description,id])
    }
    async delete(id){
        return await this.app.mysql.query('delete from category where id=?',id)
    }
}

module.exports = CategoryService;