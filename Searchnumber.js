let arr = [10, 20, 30, 44, 45, 60, 53, 3]

let target = 44;

let found = false;
for (let value of arr) {
    if (value === target) {
        found = true
    }

}

if (found) {
    console.log("number found");

}
else {
    console.log("number not found");

}