const Service = require('egg').Service;

class CountriesService extends Service {
    async all(){
        const page=this.ctx.query.page||1
        const limit=this.ctx.query.limit*1 ||2
        const offset=(page-1)*limit
        const allData=await this.app.mysql.query('select id from countries')
        const total=allData.length
        const data= await this.app.mysql.query('select * from countries')
        return {total,data}
    }
    async addCountries(data){
        return await this.app.mysql.query('insert into countries(headline,description,title,image,content)values(?,?,?,?,?)',[data.headline,data.description,data.title,data.image,data.content])
    }
    async edit(id){
        return await this.app.mysql.query('select * from countries where id=?',id)
    }
    async editCountries(data,id){
        return await this.app.mysql.query('update countries set headline=?,description=?,title=?,image=?,content=? where id=?',[data.headline,data.description,data.title,data.image,data.content,id])
    }
    async delete(id){
        return await this.app.mysql.query('delete from countries where id=?',id)
    }
}

module.exports = CountriesService;