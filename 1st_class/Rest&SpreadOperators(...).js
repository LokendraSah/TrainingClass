function addUsingRest(...allValues){
    return allValues.reduce(
        (a,b)=> a+b,
        0
    );
}
const resultRest = addUsingRest(2,10,15,6,18);
console.log(resultRest);


//Spread
const fruits = ["apple","orange","coconut"]
const animals = ["dog","cat","tiger"]
// const combineArray = [...fruits,...animals]
const combineArray = [fruits,animals]
console.log(combineArray);


//using object
const user ={
    name:"hari",
    address:"kathmandu",
}
const updatedUser ={
    ...user,
    age:30,
    gender:"male",
}
console.log(updatedUser);