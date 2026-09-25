
async function callApi(url) {

    let response = await fetch(url)
    console.log(response);

}

console.log("----Start-----");
await callApi("https://restful-booker.herokuapp.com/booking")
console.log("----End-----");

