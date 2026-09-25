function test() {
    console.log("This is the test function");

}



console.log("_-----------------------------------------------------");

function add() {
    let a = 10;
    let b = 24;
    console.log("sum of 2 numbers are " + (a + b));

}
console.log("_-----------------------------------------------------");

function addWithParameter(number1, number2) {

    console.log("this is two parameterise function for add : " + (number1 + number2));


}
console.log("_-----------------------------------------------------");

function addWithReturn(number1, number2) {
    let result = number1 + number2;
    return result;
}

test();
add();
addWithParameter(30, 34);
let returnResult = addWithReturn(23, 22);
console.log(returnResult);
