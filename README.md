# 这是一个简单的用中文来编写 js 的包

## 安装

```shell
    npm i cncode

    yarn add cncode
```

## 导入

```javascript
const { 打印, 固定循环, 条件循环, 数组工具 } = require("cncode");
```

## 打印模块

```javascript
const { 打印 } = require("cncode");

打印.日志("666"); //输出:666
打印.报错("啥"); //输出:啥
```

## 流程控制

### 若

```javascript
const { 若 } = require("cncode");
const 小明 = { 职业: "AV女星", 姓名: "小明" };
const 小刚 = { 职业: "无业游民", 姓名: "小刚" };
const 小红 = { 职业: "主持人", 姓名: "小红" };
const 检测职业 = (人 = 小明) => {
  const 检测结果 =  若(人.职业 === "保安", () => {
    打印.日志(`检测${人.姓名}职业为保安 可以进入安保厅`);
    return true
  })
    .或若(人.职业 === "AV女星", () => {
      打印.日志(`检测${人.姓名}职业是AV女星 可以进入后台`);
      return true
    })
    .或若(人.职业 === "主持人", () => {
      打印.日志(`检测${人.姓名}职业是主持人 可以进入表演厅`);
      return true
    })
    .反之(() => {
      打印.日志(`检测${人.姓名}无许可 禁止入内`);
      return false
    })
    .其值
    打印.日志(检测结果)
};
检测职业(小明);
// 检测小明职业是AV女星 可以进入后台 
// true
检测职业(小刚);
// 检测小刚无许可 禁止入内 
// false
检测职业(小红);
// 检测小红职业是主持人 可以进入表演厅
//true
```

### 对号入座

```javascript
// 对号入座 ( switch)
const { 对号入座 } = require("cncode");
//参数 对号入座(检测数据: any, 默认值?: null)
const 权限检查1 = (权限值) => {
  对号入座(权限值)
    .为(1).则(() => 打印.日志("通过"))
    .为(0).则(() => 打印.日志("禁止"));
};
权限检查1(2); //输出 null
权限检查1(1); //输出 通过
权限检查1(0); //输出 禁止

const 带返回值默认值权限检查 = (权限值) => {
  const res = 对号入座(权限值, "这是个什么玩意没见过") //
    .为(1).则(() => "通过")
    .为(0).则(() => "拒绝")
    .匹配值;
  打印.日志(res);
  return res;
};
带返回值默认值权限检查(10); //输出 这是个什么玩意没见过
带返回值默认值权限检查(1); // 输出 通过
带返回值默认值权限检查(0); //输出 禁止
```

## 循环模块

```javascript
const { 固定循环 } = require("cncode");

固定循环({ 次数: 3, 动作: (n) => 打印.日志(`第${n}次`) });
/*
输出:
第1次
第2次
第3次
 */

```

```javascript
const { 条件循环 } = require("cncode");
let n1 = "嘎";
条件循环({
  条件函数: () => n1 != "嘎嘎嘎嘎嘎", //条件函数返回布尔值 当返回值为false时 停止动作
  动作函数: () => {
    n1 += "嘎";
    打印.日志(n1);
  },
  前置运行: true, //可选 默认不前置运行一次
  结束动作: (n) => {
    //可选 会默认传入运行次数
    打印.日志(`结束了一共运行了${n}遍`);
  },
});

/*
输出:
嘎嘎
嘎嘎嘎
嘎嘎嘎嘎
嘎嘎嘎嘎嘎
结束了一共运行了4遍
*/
```

## 数组操作

```javascript
const { 数组工具, arrTool } = require("cncode");
const arr1 = [
  1,
  2,
  3,
  4,
  5,
  6,
  "非常溜",
  7,
  8,
  90,
  0,
  2,
  3,
  4,
  5,
  "无敌",
  "很强",
];
const arr2 = 数组工具.切片(arr1, -5, -1); 
const arr3 = 数组工具.切片(arr1, 0, -1); 

打印.日志(arr2);
//输出: [ 3, 4, 5, '无敌', '很强' ]

打印.日志(arr3);
//输出:[1,2,3,4,5,6,"非常溜",7,8,90,0,2,3,4,5,"无敌","很强"]

const arr4 = 数组工具.去重(arr1); // 
打印.日志(arr4);
//输出:[1,2,3,4,5,6,"非常溜",7,8,90,0,"无敌","很强"]

数组工具.删除元素("非常溜", arr4); // 
打印.日志(arr4);
//输出:[1,2,3,4,5,6,7,8,90,0,"无敌","很强"]
```

## 计时器模块

```javascript
const { 时间 } = require("cncode");
时间.同步等待(2000, true);
// 同步等待: (秒数?: number 毫秒, 开启日志?: boolean) => void
/*
开始等待
等待计时: 2.000s
 */

时间.异步等待(() => { //自动清除计时器标识
  // 异步等待: (回调函数?: () => void, 秒数?: number 毫秒) => void
  打印.日志(666);
}, 1000);

const 清理函数 = 时间.循环定时器((n) => {
  //返回清理当前循环计时器标识的函数
  打印.日志(n);
}, 1000);
/**
循环定时器: (回调函数?: (n?: 次数) => void, 秒数?: number 毫秒) => {
    清理函数: () => void;
}
输出
1
2
3
4
5
6
7
.....
 */
```
## 错误捕获
``` javascript
const {错误处理} = require('./cnCode')

const 这玩意肯定报错 = () => {

    const arr = 1
    arr.push(2) //  这玩意没push方法
}


这玩意肯定报错() 
// TypeError: arr.push is not a function
// 终止运行


const 返回值 = 错误处理
.运行(这玩意肯定报错)
.捕获((错误)=>{
    打印.日志("错误内容",错误);
    打印.日志('完成捕获不影响运行');
    return 0
})
.始终运行(()=>{
  打印.日志('错误处理运行结束');
})
.其值

//错误内容 TypeError: arr.push is not a function
//完成捕获不影响运行
//错误处理运行结束

打印.日志(其值)
//0
```