let responseCode = 401;

if (responseCode === 200) {
    console.log("Test Passed");

}

else if (responseCode === 404) {
    console.log("Page not Found");

}
else if (responseCode === 500) {
    console.log("Server Error");

} else {
    console.log("Unknown Status");

}