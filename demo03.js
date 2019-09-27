"use strict";
var age = 18;
var stature = 165.4;
var taiji = 'http://tech.taiji.com.cn';
console.log(age);
console.log(stature);
console.log(taiji);
// boolean true false
var b = true;
var c = false;
// enum 枚举类型
console.log('#####################');
var REN;
(function (REN) {
    REN["nan"] = "\u7537";
    REN["nv"] = "\u5973";
})(REN || (REN = {}));
console.log(REN.nv);
// any 类型
var t = 10;
t = 'taiji';
t = true;
console.log('$$$$$$$$$$$$$$$$$$$$$$$');
console.log(t);
// null 类型
