'use strict';
const Controller = require('egg').Controller;
const fs=require('fs')
const path=require('path')
class UploadController extends Controller {
    async banner() {
        const { ctx } = this
        const file = ctx.request.files[0];
        var dateobj = new Date();
        // console.log('当前目录', __dirname);
        // E:\wuif2202\KLDYZG\app\controller\admin
        var localdir = path.join(__dirname, '../../public/upload')
        var dir = [dateobj.getFullYear(), (dateobj.getMonth() + 1).toString().padStart(2, 0), (dateobj.getDate()).toString().padStart(2, 0)].join('')
        localdir = path.join(localdir, dir)
        if (!fs.existsSync(localdir)) {
            fs.mkdirSync(localdir)
        }
        var time = dateobj.getTime() + path.extname(file.filename)
        var filepath = path.join(localdir, time)
        // console.log('写入目录', filepath);
        var rs = fs.createReadStream(file.filepath)
        var ws = fs.createWriteStream(filepath)
        rs.pipe(ws)
        this.ctx.body = {
            code: 200,
            data: '/public/upload/' + dir + '/' + time,
            msg: '上传成功'
        }
    }
}

module.exports = UploadController;
