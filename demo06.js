"use strict";
// 变量的作用域  以函数进行划分
// var yangzi:string = '刘德华'
// function zhengxing():void{
//     // console.log('某某整形成了'+yangzi +'的样子') //undefined 变量提升
//     // var yangzi:string = '刘德华'
//     var yangzi:string = '爱德华'
//     console.log('某某整形成了'+yangzi +'的样子')
// }
// zhengxing()
// console.log(yangzi)
// 全局变量 局部变量 
// let
function zhengxing() {
    var yangzia = '刘德华';
    {
        // let yangzib:string = '爱德华'
        // console.log('某某整形成了'+yangzib+'的样子')
    }
    console.log('某某整形成了' + yangzia + '的样子');
    // console.log('某某整形成了'+yangzib+'的样子')
}
zhengxing();
