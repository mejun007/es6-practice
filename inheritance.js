class Parent{
    constructor(){
        this.fatherName="chowdhury" 
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
    }
    
    getFullName(){
        return this.name +" "+ this.fatherName;
    }
}

const baby1= new Child("hrithik");
const baby2= new Child("akshay");
console.log(baby1.getFullName());
console.log(baby2);