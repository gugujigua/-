const Service = require('egg').Service;

class InfoService extends Service {
    async list() {
        return  await this.app.mysql.query(
            'select * from info where id=1');
    }
    async edit(data){
        let str=""
        for(var i in data){
            str += i+'="'+data[i]+'",'
        }
        str=str.slice(0,-1)
        return await this.app.mysql.query('update info set '+str+' where id=1')
    }
}

module.exports = InfoService;