const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'myblog'

MongoClient.connect(
    url, {
        // 配置
        useUnifiedTopology: true
    },
    (err, client) => {
        if (err) {
            console.error('mongodb connect error', err)
            return
        }

        // 没有报错，说明连接成功
        console.log('mongodb connect success')

        // 切换到数据库（控制台 `use myblog`）
        const db = client.db(dbName)

        // 使用集合
        const usersCollection = db.collection('users')

        // // 新增
        // usersCollection.insertOne({ //insertMany新增多个，insertOne新增1个
        //     username: 'shuangyue',
        //     password: 'abc',
        //     realname: '双越'
        // }, (err, result) => {
        //     if (err) {
        //         console.error('users insert error', err)
        //         return
        //     }
        //     console.log(result)

        //     // 关闭连接
        //     client.close()
        // })

        // // 修改
        // usersCollection.updateOne({ username: 'zhangsan' }, // 查询条件
        //     { $set: { realname: '张三A' } }, // 修改的内容，注意有 $set
        //     (err, result) => {
        //         if (err) {
        //             console.error('users update error', err)
        //             return
        //         }
        //         console.log(result)

        //         // 关闭连接
        //         client.close()
        //     }
        // )

        // // 删除
        // usersCollection.deleteOne({ a: 101 },
        //     (err, result) => {
        //         if (err) {
        //             console.error('users delete error', err)
        //             return
        //         }
        //         console.log(result)

        //         // 关闭连接
        //         client.close()
        //     }
        // )

        // 查询
        usersCollection.find({
            // username: 'zhangsan',
            // password: '123'
        }).toArray((err, result) => { //toArray需要传一个回调，toArray转换成数组
            if (err) {
                console.error('users find error', err)
                return
            }
            console.log(result) //node src/code1/test2.js

            // 关闭连接
            client.close() //回调函数这个查询是异步，关闭连接原来是在查询后面，需要挪到里面
        })
    }
)