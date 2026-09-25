let arr = ["Selenium", "Playwri1ght", "Cypress", "WebDriveIO"]
// to check playwright is present or not

if (arr.includes("Playwright")) {
    console.log("Playwright is supported");

} else {
    console.log("Playwright not supported");

}

console.log("-----------------------------------------------------");
let s = "regression,smoke,api,sanity";
let sArray = s.split(",");
console.log(sArray);


if (sArray.includes("smoke")) {
    console.log("smoke test will be executed");

}

if (sArray.includes("performance")) {
    console.log("performance test found");


}



console.log("-------------------------------------email validate----------------");

let email = "Harshad@test.com";

if (email.includes("@") && email.endsWith(".com")) {
    console.log("email is valid");

}
else {
    console.log("invalid email format");

}

