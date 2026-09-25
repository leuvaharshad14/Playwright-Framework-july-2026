let fruits = ["Apple", "Banana", "Chiku", "Grapes", "Orange"]
console.log(fruits);

fruits[1] = "Kelu";  // updated value for 1st index
console.log(fruits);
console.log("------------------------For of loop----------------");

console.log(fruits.length)

for (let x of fruits) {
    console.log(x);

}

console.log("------------------------Traditional for loop----------------");

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);

}


