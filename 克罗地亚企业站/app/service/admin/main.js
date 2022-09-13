const Service = require('egg').Service;

class MainService extends Service {
    async newPassword(data) {
       const { ctx }=this
       var newPass=this.ctx.helper.encryptPass(data.newPass,this.app.config.adminSecretKey)
        await this.app.mysql.query('update login set password=? where username=?',[newPass,this.ctx.session.username])
        return true
        
    }
    async sureoldPass(data){
        const {ctx}=this
        var oldPass=this.ctx.helper.encryptPass(data.oldPass,this.app.config.adminSecretKey)
        const tdata=await this.app.mysql.query('select * from login where username=?',[this.ctx.session.username])
        if(oldPass===tdata[0].password){
            return true
        }else{
            return false
        }
    }
   
}

module.exports = MainService;