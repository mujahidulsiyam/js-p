let user = {
    name : "Mujahidul",
    age:25,
    address:"Dhaka",
};
console.log(user.name);  //using dot notation
console.log(user["name"]);
//using dot notation

delete user.address

console.log(user);

user.address="Khulna";

console.log(user);

user.address = {
    city:"khulna",
    area:"Fulbari",
}
console.log(user);


console.log(Object.entries(user));
console.log(Object.keys(user));
console.log(Object.values(user));