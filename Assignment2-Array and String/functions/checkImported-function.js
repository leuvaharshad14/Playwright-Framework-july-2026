import { add, sub } from "./calc.js"

console.log("addition of 2 numbers are  " + add(20, 7));
console.log("sub of 2 numbers are  " + sub(20, 7));
//console.log("mul of 2 numbers are  " + mul(20, 7));  // because it is not exported it shows the "ReferenceError: mul is not defined"
