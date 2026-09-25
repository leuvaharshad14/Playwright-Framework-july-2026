console.log("----Start-----");

let response = fetch("https://restful-booker.herokuapp.com/booking");// it shows pedniung as we not waited
console.log(response);

let response1 = await fetch("https://restful-booker.herokuapp.com/booking");// it shows result as we waited for it.
console.log(response1);

console.log("-----End----")
