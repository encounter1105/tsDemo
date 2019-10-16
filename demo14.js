"use strict";
// 定义接口的属性
// interface xiaogege{
//     sex:string
//     interest:string
//     maibaobao?:Boolean
// }
var mySearch;
mySearch = function (source, subString) {
    var flag = source.search(subString);
    return (flag != -1);
};
console.log(mySearch('高、副、帅、德', '胖'));
