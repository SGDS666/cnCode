const 固定循环 = (循环对象 = { 次数: 1, 动作: (n=1) => { } }) => {
    for (let i = 1; i <= 循环对象.次数; i++) {
        循环对象.动作(i)
    }
}
const cnFor = (loopObj = { count: 1, action: (n=1) => { } }) => {
    for (let i = 1; i <= loopObj.count; i++) {
        loopObj.action(i)
    }
}
const 条件循环 = (循环对象 = { 条件函数: () => false, 动作函数: () => { }, 结束动作: () => { }, 前置运行: false }) => {
    let n = 0
    if (循环对象.前置运行) {
        循环对象.动作函数()
        n++
    }
    while (循环对象.条件函数()) {
        循环对象.动作函数()
        n++
    }
    if (循环对象.结束动作) {
        循环对象.结束动作(n)
    }
}
const cnWhile = (loopObj = { condition: () => false, action: () => { }, endcallback: () => { }, preRun: false }) => {
    let n = 0
    if (loopObj.preRun) {
        loopObj.action()
        n++
    }
    while (loopObj.condition()) {
        loopObj.action()
        n++
    }
    if (loopObj.endcallback) {
        loopObj.endcallback(n)
    }
}
module.exports = {
    固定循环,
    条件循环,
    cnFor,
    cnWhile
}