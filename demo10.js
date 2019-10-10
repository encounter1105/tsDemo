"use strict";
// RegExp  string 
// 构造函数声明法
// let reg1:RegExp = new RegExp('liangjuan')
// console.log(reg1)
// let reg2:RegExp = new RegExp('liangjuan','gi')
// console.log(reg2)
// // 字面量声明
// let reg3:RegExp = /liangjuan/
// let reg4:RegExp = /liangjuan/gi
//test(string) exec(string)
var reg1 = /taiji/i;
var website = 'tech.taiji.com.cn';
// let result1:boolean = reg1.test(website)
// console.log(result1)
console.log(reg1.exec(website));
