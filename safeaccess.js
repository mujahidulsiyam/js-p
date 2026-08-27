let user1 = {
    name : "Rahim",
    address :{
        city: "Dhaka",
    },
};

let user2 = {
    name : "Karim",
    // no address 
};
// optional chaining
// console.log(user1?.address?.city);
// console.log(user2?.address?.city);



// nulish collescing
console.log(user2?.address?.city ?? "Khulna");