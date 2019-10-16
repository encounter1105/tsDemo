// public 
// protected
// private
class People1{
    public sex:string
    protected name:string
    private age:number
    public constructor(sex:string,name:string,age:number){
        this.sex = sex
        this.name = name
        this.age = age
    }
    public sayHello(){
        console.log('你好')
    }
    protected sayLove(){
        console.log('我宣你')
    }
}
var gril:People1 = new People1('女','迪丽热巴',22)
console.log(gril.sex)
// console.log(gril.age)
// console.log(gril.name)
gril.sayHello()
// gril.sayLove()

// readonly 只读修饰符
class Man{
    public readonly sex:string = '男'
}

var man:Man = new Man()
// man.sex = '女'