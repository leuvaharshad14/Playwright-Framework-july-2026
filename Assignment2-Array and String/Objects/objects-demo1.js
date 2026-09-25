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

console.log(employee);

console.log(employee.Name);
console.log(employee.address);
console.log(employee.address.pin);
console.log(employee["city"]);
console.log(employee.address.pin);


console.log("______________________________________________________");

///update value
employee.Name = "Harry Leuva"
console.log("updated name is " + employee.Name);

//add new key//
employee.experience = 17;
console.log(employee);

console.log("______________________________________________________");
//delete
delete employee.city;
console.log(employee);




