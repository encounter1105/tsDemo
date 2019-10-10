// 类是对象具体事务的一个抽象，对象是类的具体表现
class People{
    name:string
    age:number
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }
    say(){
        console.log('太极开发者社区')
    }
}
let staff:People = new People('liangjuan',18)
console.log(staff)
staff.say()