class Person{
    constructor(name,age){
        this.fullName = name;
        this.age = age;
    }
    getFullName(){
        return this.fullName;
    }
    getAge(){
        return this.age;
    }
}
const Person1 = new Person("ram",50);
    console.log(Person1.fullName,Person1.age);
    console.log("function called:",Person1.getFullName(),Person1.getAge());