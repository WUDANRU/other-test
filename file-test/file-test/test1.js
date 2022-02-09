// linux|mac|windows目录拼接的方式不一样
const fs = require('fs') //fs，文件操作的一个基本的库
const path = require('path') //path，路径操作的一个基本的库
const fileName = path.resolve(__dirname, 'data.txt') //__dirname是js自带的，表示当前js的目录，path.resolve拼接目录

// //读取文件内容 
// fs.readFile(fileName, (err, data) => { //node test1.js

//         if (err) {
//             console.error(err)
//             return
//         }
//         // data是二进制类型， 需要转换为字符串
//         console.log(data.toString())
//     })
//     // 读取文件是异步 || (err, data) => 也是异步

// // 写入文件
// const content = '\n这是新写入的内容' //cmd多执行几次node test1.js，写入文件会多写几次
// const opt = { //写入的方式，
//     flag: 'a' //a是追加写入，w是覆盖
// }
// fs.writeFile(fileName, content, opt, (err) => {
//     if (err) {
//         console.error(err)
//     }
// })

//服务端读取文件如果是1个g或者更大的内容，代码这样写不合适，需要node.js stream
//写入文件如果比较大，也需要用到node.js stream

//判断文件是否存在
// fs.exists(fileName, (exist) => {
//     console.log('exist', exist) //true表示存在
// })

fs.exists(fileName + '1', (exist) => { //fileName + '1'是data.txt1
    console.log('exist', exist) //false表示不存在
})