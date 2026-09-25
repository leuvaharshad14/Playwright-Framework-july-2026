let apiResponse = {
    "status": 200,
    "message": "Success",
    data:
    {
        "users": [{ id: 1, name: "Ramesh", isQA: true },
        { id: 2, name: "Suresh", isQA: false },
        { id: 3, name: "Dinesh", isQA: true }


        ]
    }

}

console.log("-----------------------Q1. Print name of the users who are QA--------");

let users = apiResponse.data.users;
for (let user of users) {
    if (user.isQA) {
        console.log(user.name);


    }
}

console.log("-----------------------q2. how many user have isQA true--------");


let qaCount = 0;
for (user of users) {
    if (user.isQA) {
        qaCount++;
    }
}
console.log("total QA users are :" + qaCount);

console.log("-----------------------q3. add new user to the users added--------");
users.push({ id: 4, name: "Haresh", isQA: false })
console.log(users);

console.log("-----------------------q4. Total numbers of users--------");
console.log("total number of users are " + users.length);



