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

//console.log(employee);

/*console.log(employee.locationWorked);
console.log(employee.locationWorked[1]);
console.log(employee.address.pin);
*/
for (let key in employee) {
    console.log(key + " ==> " + employee[key]);

}




