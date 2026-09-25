let student = {};// blank object
console.log(student);

let employee = {
    "age": 35,
    "Name": "Harshad",
    "isPermanent": true,
    "city": "Ahmedabad",
    "locationWorked": ["Ahmedabad", "London"],
    "address": {
        "appartment": "Chandkheda",
        "pin": 345678
    }
}

//console.log(Object.values(employee));

console.log(Object.entries(employee));//Object.entries() returns an array of [key, value] pairs, combining what keys() and values() do separately.




