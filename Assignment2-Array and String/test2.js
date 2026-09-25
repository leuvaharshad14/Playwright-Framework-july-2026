let evenArray = [];
let oddArray = [];

for (let i = 1; i <= 100; i++) {


    if (i % 2 === 0) {

        evenArray.push(i)


    }
    else {
        oddArray.push(i)
    }
}

console.log("even numbers are :", evenArray);
console.log("odd numbers are :", oddArray);
