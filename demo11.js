"use strict";
// 类是对象具体事务的一个抽象，对象是类的具体表现
var People = /** @class */ (function () {
    function People(name, age) {
        this.name = name;
        this.age = age;
    }
    People.prototype.say = function () {
        console.log('太极开发者社区');
    };
    return People;
}());
var staff = new People('liangjuan', 18);
console.log(staff);
staff.say();
