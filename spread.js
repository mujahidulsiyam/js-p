// spread operator -three dot
// let newArr = [...oldArr]
// let newObj = {...oldObj}

let cart = ["fruits","rice"];

let cart2 = [...cart,"egg"];

// console.log(cart,cart2);

const personalInfo = {
    name : "Mujahidul",
    age: 25,

}

const contractInfo = {
    ... personalInfo,
    mobile:"019111111",
    email:"mujahidul@gmail.com",
}

console.log(contractInfo);