const util = require("./myUtils.js");
const require = require("readline-sync");
let a = reader.questionInt("Please insert a = ");
let b = reader.questionInt("Please insert b = ");

function primeNumbers(a,b){
if(a>0 && b>0){
    let primesArray=[];
    for (let i=a;i<=b;(i++)){

        if(util.isPrime(i)){
    
            primesArray.push(i);
            
        }
    
    }

}else{
    return "a & b must be positive";
}
return primesArray;

}
(primeNumbers(a,b));
if (typeof zangvac !== "string"){
    until.printArray(zangvac);

}
console.log(util.isPrime(2));


console.log(util.isPrime(2));

