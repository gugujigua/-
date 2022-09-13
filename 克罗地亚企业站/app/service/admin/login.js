const Service = require('egg').Service;

class LoginService extends Service {
    async loginUp(data) {
        var result=await this.app.mysql.query(
            'select username,password from login where username = ?',
            [data.username]
        );
        const pass=await this.ctx.helper.encryptPass(data.password,this.app.config.adminSecretKey)
        if(result[0]){
            if(result[0].password===pass){
                this.ctx.session.isLogin=true
                this.ctx.session.username=data.username
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }
}

module.exports = LoginService;