"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ljuan = /** @class */ (function () {
    function Ljuan(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    Ljuan.prototype.interest = function () {
        console.log('太极开发者社区');
    };
    return Ljuan;
}());
var ljObj = new Ljuan('梁娟', 18, 'coding');
ljObj.interest();
var Ljuan2 = /** @class */ (function (_super) {
    __extends(Ljuan2, _super);
    function Ljuan2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.figure = '漂亮';
        return _this;
    }
    Ljuan2.prototype.interest = function () {
        _super.prototype.interest.call(this);
        console.log('建立电商平台');
    };
    Ljuan2.prototype.target = function () {
        console.log('先定一个小目标，赚一个亿');
    };
    return Ljuan2;
}(Ljuan));
var beautiy = new Ljuan2('精英', 5, '演讲');
beautiy.interest();
beautiy.target();
