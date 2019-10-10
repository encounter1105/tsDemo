let lj = {
    name:'lj',
    website:'tech.taiji.com.cn',
    age:18,
    saySomething:function(){
        console.log('为了前端技术而不断奋斗')
    }
}
console.log(lj.name)
lj.saySomething()

// 数组 ---array String Date RegExp 
// let arr1:number[]    // 申明数字类型数组
// let arr2:Array<string>   //申明字符串类型数组

//字面量赋值法
// let arr1:number[] = []
// let arr2:number[] = [1,2,3,4,5]

// let arr3:Array<string> = ['lj','taiji','开发者社区']
// let arr4:Array<boolean> = [true,false,false]
// 构造函数赋值法
// let arr1:number[] = new Array()
// let arr2:number[] = new Array(1,2,3,4,5)

// let arr3:Array<string> = new Array('lj','taiji','开发者社区')
// let arr4:Array<boolean> = new Array(true,false,false)

// let arr5:number[] = [1,2,true] //有错误

// 元组
let x:[string,number]

x=['hello',10]
// x=[10,'hello'] //错误的写法，元组根据申明的，是有顺序的