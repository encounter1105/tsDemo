"use strict";
// public 
// protected
// private
var People1 = /** @class */ (function () {
    function People1(sex, name, age) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    People1.prototype.sayHello = function () {
        console.log('你好');
    };
    People1.prototype.sayLove = function () {
        console.log('我宣你');
    };
    return People1;
}());
var gril = new People1('女', '迪丽热巴', 22);
console.log(gril.sex);
// console.log(gril.age)
// console.log(gril.name)
gril.sayHello();
// gril.sayLove()
// readonly 只读修饰符
var Man = /** @class */ (function () {
    function Man() {
        this.sex = '男';
    }
    return Man;
}());
var man = new Man();
// man.sex = '女'
