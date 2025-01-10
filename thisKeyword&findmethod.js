// const personObj = {
//     name: "Hari",
//     greet(){
//         console.log("Hello:",this.name);
//     }
// };
// console.log(personObj);
// personObj.greet();

//using arrow function
// const pobj2 = {
//     name: "Ram",
//     greet:() => console.log(`Hello ${this.name}`),
// };
// pobj2.greet();


const p3 = {
    age:100,
    showAge: function showAge(name){
         console.log(`Age of ${name} is ${this.age}`);
    },
};
const showAgeofAnish = p3.showAge;
showAgeofAnish("Anish");
