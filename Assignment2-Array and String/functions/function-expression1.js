let addResult = function (num1, num2) {
    let result = num1 + num2
    return result
}

console.log(addResult(20, 30));

console.log("-------------------------------------------------------------");

let addResult1 = (num1, num2) => {
    let result = num1 + num2
    return result
}
console.log(addResult1(20, 40));

console.log("-------------------------------------------------------------");
let finalchek = (addResult1())=> {

    let final = total = 20 + addResult1;
    return final;
}
console.log(finalchek(23, 3));
