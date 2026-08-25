let user = {
    name : "Mujahidul",
    age :25,
    address: {
        city:"Khulna",
        area:"Fulbarigate",
        zipcode:2100,
    },
}
// console.log(user.address.zipcode);
// console.log(user["address"]["zipcode"]);
let entry = Object.entries(user);
console.log(entry[2][1]["zipcode"]);