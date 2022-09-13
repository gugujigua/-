const Service = require('egg').Service;

class AboutService extends Service {
    async all(){
        const data=await this.app.mysql.query('select * from about where id=1')
        return {data}
    }
    async edit(){
        return await this.app.mysql.query('select * from about where id=1')
    }
    async editAbout(data){
        return await this.app.mysql.query('update about set image=?,description_one=?,description_two=?,content=? where id=1',[data.image,data.description_one,data.description_two,data.content])
    }
}

module.exports = AboutService;