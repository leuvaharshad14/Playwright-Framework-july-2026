/*let x = true;

if (x) {
    console.log("you can proceed");

}

console.log("----------If else statement--------------------");

let age = 17;
if (age >= 18) {
    console.log("one can vote in india");

}
else {
    console.log("one cannot vote in india");
}*/

console.log("----------Nested if statement--------------------");

let age1 = 19;
let nationality = "Indian";

if (age1 >= 18) {
    if (nationality === "Indian") {
        console.log("you are eligible for vote ");

    }
    else {
        console.log("Your Nationality must be Indian inorder to vote for the coutty");
    }
}

else {
    console.log("you are under age");

}
