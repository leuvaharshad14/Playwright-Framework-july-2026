let enteredUsername = "Harshad";
let enteredPassword = "admin@123";

const correctUsername = "admin@email.com";
const correctPassword = "admin@123"

if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
    console.log("Correct username and password");

} else if (enteredUsername === correctUsername && enteredPassword != correctPassword) {
    console.log("Correct username, Wrong password");

}
else if (enteredUsername != correctUsername && enteredPassword === correctPassword) {
    console.log("Wrong username,correct password");

} else if (enteredUsername != correctUsername && enteredPassword != correctPassword) {
    console.log("Both incorrect");

}