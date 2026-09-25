export function add(number1, number2) {
    let addition = number1 + number2;
    return addition;
}



export function sub(number1, number2) {
    let Substraction = number1 - number2;
    return Substraction;
}


function mul(number1, number2) {
    let Multiplication = number1 * number2;
    return Multiplication;
}


function div(number1, number2) {
    let Divison = number1 / number2;
    return Divison;
}


console.log("addition of 2 numbers are  " + add(20, 4));
console.log("Substraction of 2 numbers are  " + sub(20, 4));
console.log("Multiplication of 2 numbers are  " + mul(20, 4));
console.log("Divison of 2 numbers are  " + div(20, 4));


