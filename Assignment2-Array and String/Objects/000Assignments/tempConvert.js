function convertTemp(value, type) {

    if (type === 'C') {
        value = (value - 32) * 5 / 9
        return value
    } else if (type === 'F') {
        value = (value * 9 / 5) + 32
        return value
    } else {
        console.log("entered type is not correct");

    }

}
let result = convertTemp(100, 'F')
console.log(result);

let result1 = convertTemp(100, 'C')
console.log(result1);

let result2 = convertTemp(100, 'c')
console.log(result2);