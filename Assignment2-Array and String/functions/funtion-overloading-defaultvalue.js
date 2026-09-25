
function add(number1, number2) {
    console.log("sum of 2 numbers are " + (number1 + number2));

}

add(20, 5)

function add(number1, number2, number3) {
    console.log("sum of 3 numbers are " + (number1 + number2 + number3));

}
add(20, 8) // in js there is nothing like method overlaoding, if fuction name are smae then it will run the latest one // here it will show NaN because search fro 3rd value which is not given
add(20, 2, 11);



function add(number1, number2, number3 = 0) {
    console.log("sum of 3 numbers are " + (number1 + number2 + number3));

}
add(20, 8)