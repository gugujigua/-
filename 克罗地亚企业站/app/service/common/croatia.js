const Service = require('egg').Service;

class CroatiaService extends Service {
    async all(){
        const page=this.ctx.query.page||1
        const limit=this.ctx.query.limit*1 ||2
        const offset=(page-1)*limit
        const allData=await this.app.mysql.query('select id from croatia')
        const total=allData.length
        const data=await this.app.mysql.query('select * from croatia limit ?,?', [offset, limit])
        const pages=Math.ceil(total/limit)
        return {total,data,pages}
    }
    async addCroatia(data){
        return await this.app.mysql.query('insert into croatia(cat_id,title,image,description,content)values(?,?,?,?,?)',[data.cat_id,data.title,data.image,data.description,data.content])
    }
    async edit(id){
        return await this.app.mysql.query('select * from croatia where id=?',[id])
    }
    async editCroatia(data,id){
        return await this.app.mysql.query('update croatia set cat_id=?,title=?,image=?,description=?,content=? where id=?',[data.cat_id,data.title,data.image,data.description,data.content,id])
    }
    async delete(id){
        return await this.app.mysql.query('delete from croatia where id=?',id)
    }
    async category(cat_id){
        return await this.app.mysql.query('select * from croatia where cat_id=?',[cat_id])
    }
    async cate(id){
        const data=await this.app.mysql.query('select * from croatia where id=?',[id])
        return await this.app.mysql.query(`select * from wheel where title='${data[0].title}'`)
    }
    
}

module.exports = CroatiaService;