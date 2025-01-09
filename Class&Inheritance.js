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
    
    class Student extends Person{
        constructor(name,age,work,rollNo){
            super(name,age);
            this.work = work;
            this.rollNo = rollNo;
        }
        getWork(){
            return this.work;
        }
        greet(){
            console.log("Welcome:",this.fullName);
        }
    }
    const st1 = new Student("Hari Karki",29,"study",15);
    console.log("name,rollNo =",st1.fullName,st1.rollNo);
    console.log(st1.getWork());
    st1.greet();