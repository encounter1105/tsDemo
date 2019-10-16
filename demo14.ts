// 定义接口的属性
// interface xiaogege{
//     sex:string
//     interest:string
//     maibaobao?:Boolean
// }

// let shuai:xiaogege = {
//     sex:'男',
//     interest:'看书、做家务',
//     maibaobao:true
// }
// console.log(shuai)
interface SearchMan{
    (source:string,subString:string):boolean
}
let mySearch:SearchMan

mySearch = function(source:string,subString:string):boolean{
     let flag = source.search(subString)
     return (flag!=-1)
}
console.log(mySearch('高、副、帅、德','胖'))