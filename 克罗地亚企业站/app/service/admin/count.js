const Service = require('egg').Service;

class CountriesService extends Service {
    async all(){
        const page=this.ctx.query.page||1
        const limit=this.ctx.query.limit*1 ||2
        const offset=(page-1)*limit
        const allData=await this.app.mysql.query('select id from arounds')
        const total=allData.length
        const data= await this.app.mysql.query('select * from arounds')
        return {total,data}
    }
    async addCount(date){
        return await this.app.mysql.query("insert into arounds(title,description) values(?,?)",[date.title,date.description])
    }
    async edit(id){
        return await this.app.mysql.query('select * from arounds where id=?',id)
    }
    async editCount(data,id){
        return await this.app.mysql.query('update arounds set title=?,description=? where id=?',[data.title,data.description,id])
    }
    async delete(id){
        return await this.app.mysql.query('delete from arounds where id=?',id)
    }
}

module.exports = CountriesService;