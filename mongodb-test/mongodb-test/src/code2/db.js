const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017'
const dbName = 'myblog'

// mongoose.set('useFindAndModify', false) //cmd有警告这两句再解开
// mongoose.set('useCreateIndex', true)

mongoose.connect(`${url}/${dbName}`, { //连接，连接的对象会放在connection里(mongoose.connection)
        useNewUrlParser: true,
        useUnifiedTopology: true
    }) //使用mongose连接mongodb服务，mongose已经连接了

const db = mongoose.connection

// 发生错误
db.on('error', err => {
    console.error(err)
})

// 连接一次成功  node src/code2/db.js
db.once('open', () => {
    console.log('mongoose connect success…')
})

module.exports = mongoose