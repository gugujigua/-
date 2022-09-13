'use strict'
const crypto = require('crypto')
module.exports = {
     encryptPass(secretKey, password) {
          var hmac = crypto.createHmac('sha1', secretKey)
          hmac.update(password)
          const pass = hmac.digest('hex')
          const sha1 = crypto.createHash('sha1')
          sha1.update(pass)
          return sha1.digest('hex')
     },
     format(ts) {
          var d = new Date(ts)
          const NYR = [
               d.getFullYear(),
               (d.getMonth() + 1).toString().padStart(2, 0),
               d.getDate().toString().padStart(2, 0),
          ].join('-')
          // const SFM = [
          //      d.getHours().toString().padStart(2, 0),
          //      d.getMinutes().toString().padStart(2, 0),
          //      d.getSeconds().toString().padStart(2, 0),
          // ].join(':')
          return NYR 
     }

}