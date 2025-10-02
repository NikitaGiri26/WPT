class Student {
    

    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    display(){
        let result=this.name+" "+this.age;
        console.log(result);

    }

};
let obj=new Student ("niyati",43);
let obj1=new Student ("nikita",42)
obj.display();
obj1.display();