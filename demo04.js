"use strict";
// function searchPeople(age:number):string{
//     return '找到了'+age+'岁的小姐姐'
// }
// var age:number = 28
// var result:string = searchPeople(age)
// console.log(result)
//有可选参数的函数
// function searchPeople(age:number,stature?:string):string{
//     let yy:string = ''
//     yy = '找到了'+age +'岁'
//     if(stature!=undefined){
//         yy = yy + stature
//     }
//     return yy + '的小姐姐'
// }
// var result:string = searchPeople(22,'个子高')
// console.log(result)
// 有默认参数的函数
// function searchPeople(age:number = 18,stature:string = '不错'):string{
//     let yy:string = ''
//     yy = '找到了'+age +'岁'
//     if(stature!=undefined){
//         yy = yy + stature
//     }
//     return yy + '的小姐姐'
// }
// var result:string = searchPeople(22,'大长腿')
// console.log(result)
// 有剩余参数的函数
function searchPeople() {
    var xuqiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqiu[_i] = arguments[_i];
    }
    var yy = '找到了';
    for (var i = 0; i < xuqiu.length; i++) {
        yy = yy + xuqiu[i];
        if (i < xuqiu.length - 1) {
            yy = yy + '、';
        }
    }
    yy = yy + '的小姐姐';
    return yy;
}
var result = searchPeople('22岁', '大长腿', '瓜子脸', '好看');
console.log(result);
