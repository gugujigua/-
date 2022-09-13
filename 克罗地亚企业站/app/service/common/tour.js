const Service = require('egg').Service;

class TourService extends Service {
    async all(){
        const page=this.ctx.query.page||1
        const limit=this.ctx.query.limit*1 ||2
        const offset=(page-1)*limit
        const allData=await this.app.mysql.query('select id from tour')
        const total=allData.length
        const data=await this.app.mysql.query('select * from tour limit ?,?', [offset, limit])
        return {total,data}
    }
    async addTour(data){
        return await this.app.mysql.query("insert into tour(cat_id,title_one,title_two,title,en_title,image,content) values(?,?,?,?,?,?,?)",[data.cat_id,data.title_one,data.title_two,data.title,data.en_title,data.image,data.content])
    }
    async edit(id){
        return await this.app.mysql.query('select * from tour where id=?',id)
    }
    async editTour(data,id){
        return await this.app.mysql.query('update tour set cat_id=?,title_one=?,title_two=?,title=?,en_title=?,image=?,content=? where id=?',[data.cat_id,data.title_one,data.title_two,data.title,data.en_title,data.image,data.content,id])
    }
    async delete(id){
        return await this.app.mysql.query('delete from tour where id=?',id)
    }
    async category(cat_id){
        return await this.app.mysql.query('select * from tour where cat_id=?',cat_id)
    }
    async categoryX(id){
        const data=await this.app.mysql.query("select * from tour where id="+id)
        const date="select * from wheel where title ="+ '"' + data[0].title + '"'
        return await this.app.mysql.query(date)
    }
}

module.exports = TourService;