const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'myblog'
MongoClient.connect(
    url, {
        // 配置
        useUnifiedTopology: true
    },

    (err, client) => { //client连接成功后的客户端
        if (err) {
            console.error('mongodb onnect error', err)
            return
        }

        // 没有报错，说明连接成功
        console.log('mongodb connect success')

        // 切换到数据库（控制台 `use myblog`）
        const db = client.db(dbName) //node src/code1/test1.js

        // 关闭连接
        client.close() //cmd控制台如果退出表示关闭连接，没有退出表示保持连接

    }
)