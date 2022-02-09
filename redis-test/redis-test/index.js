const redis = require('redis')

//创建客户端
const redisClient = redis.createClient(6379, '127.0.0.1') //端口，主机

redisClient.on('error', err => {
    console.error(err)
})


//测试   //cnpm init -y | cnpm i redis --save |node index.js
redisClient.set('myname', 'zhangsan2', redis.print) //redis.print这个是打印   (redis.print)Reply: OK

redisClient.get('myname', (err, val) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('val', val)


    // 退出
    redisClient.quit() // cmd运行node index.js
})

// https: //www.runoob.com/redis/redis-install.html参考这个要开里面2个窗口和cmd开这个文件夹1个窗口