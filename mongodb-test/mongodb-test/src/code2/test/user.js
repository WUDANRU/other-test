const User = require('../models/User')

// 自执行的异步函数
!(async() => {

    // 创建用户
    const lisi = await User.create({
        username: 'lisi',
        password: '123',
        realname: '李四'
    })
    console.log(lisi) //D:\mongodb-test>node src/code2/test/user.js

    // // 查询
    const list = await User.find()
    console.log(list)

    // // 模拟登录
    // const zhangsan = await User.find({
    //     username: 'zhangsan',
    //     password: '123'
    // })
    // console.log(zhangsan)
})()