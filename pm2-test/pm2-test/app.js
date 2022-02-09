// const http = require('http')
// const server = http.createServer((req, res) => {
//     res.setHeader('Content-type', 'application/json')
//     res.end(JSON.stringify({
//         errno: 0,
//         msg: 'pm test serve 1'
//     }))
// })
// server.listen(8000) //localhost:8000
// console.log('server is listening on port 8000 ...')


const http = require('http')

let server = http.createServer((req, res) => {
    // 模拟日志
    console.log('cur time', Date.now()) //pm2 log app (localhost:8000刷新几次)就能打印出
        // 模拟错误
    console.error('假装出错', Date.now())

    // 模拟一个错误
    if (req.url === '/err') {
        throw new Error('/err 出错了')
    }

    res.setHeader('Content-type', 'application/json')
    res.end(
        JSON.stringify({
            errno: 0,
            msg: 'pm2 test server 3'
        })
    )
})

server.listen(8000)
console.log('server is listening on port 8000 ...')