class Ljuan{
    public name:string
    public age:number
    public skill:string
    constructor(name:string,age:number,skill:string){
        this.name = name
        this.age = age
        this.skill = skill
    }

    public interest(){
        console.log('太极开发者社区')
    }
}
let ljObj:Ljuan = new Ljuan('梁娟',18,'coding')

ljObj.interest()

class Ljuan2 extends Ljuan{
    public figure:string = '漂亮' 
    public interest(){
        super.interest()
        console.log('建立电商平台')
    }
    public target(){
        console.log('先定一个小目标，赚一个亿')
    }
}
let beautiy = new Ljuan2('精英',5,'演讲')
beautiy.interest()
beautiy.target()