let numbers = [15, 25, 35, 78, 45]

let sum = 0;
for (let value of numbers) {
    sum = sum + value;
}
console.log("sum of the all numbers are :" + sum);
let totalElements = numbers.length;
console.log("total numbers of the elements are : " + totalElements);


let average = sum / totalElements;
console.log("Average of all the numbers are :" + average);
