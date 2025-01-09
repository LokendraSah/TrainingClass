function avgUsingRest(...allvalues){
const res = allvalues.reduce((a,b)=>a+b,0);
const avg = res/allvalues.length;
return avg;
}
const resultRest = avgUsingRest(3,5,6,5,1);
console.log(resultRest);