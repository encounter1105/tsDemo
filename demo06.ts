// 变量的作用域  以函数进行划分
var yangzi:string = '刘德华'
function zhengxing():void{
    var yangzi:string = '刘德华'
    console.log(yangzi)
}
zhengxing()
console.log(yangzi)

// 全局变量 局部变量 
