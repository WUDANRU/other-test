//标准输入输出
// process.stdin.pipe(process.stdout)


// const http = require('http')
// const server = http.createServer((req, res) => {
//     if (req.method === 'POST') {
//         req.pipe(res)
//     }
// })
// server.listen(8081)
// console.log('ok')

//postman的method输入POST，url输入http://localhost:8081/，body输入下面的代码，然后按send，也是显示下面的代码
// {
//     "name": "shuangyue",
//     "city": "beijing"
// }



// const fs = require('fs')
// const path = require('path')

// const fileName1 = path.resolve(__dirname, 'data.txt')
// const fileName2 = path.resolve(__dirname, 'data-bak.txt')

// const readStream = fs.createReadStream(fileName1)
// const writeStream = fs.createWriteStream(fileName2)
// readStream.pipe(writeStream)

// // // 下面两段代码是监听data和监听end,可以注释掉
// // readStream.on('data', chunk => { //监听一点点读取的data,之前fs操作文件是一下子完成，现在是通过流一点点读取文件，文较小看不出代码变化，文件大的可以看出
// //     console.log(chunk.toString())
// // })

// // readStream.on('end', () => {
// //     console.log('copy done')
// // })







const http = require('http')
const fs = require('fs')
const path = require('path')
const fileName1 = path.resolve(__dirname, 'data.txt')
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        const readStream = fs.createReadStream(fileName1)
        readStream.pipe(res) //结合了文件io和网络io
    }
})
server.listen(8081) //node test1.js和http://localhost:8081/
console.log('ok')