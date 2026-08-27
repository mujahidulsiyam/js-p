// const student= {
//     name :"Mujahidul",
//     age:20,
//     address:"Dhaka",
// }
// // old
// const oldName = student.name

// // new 
// const {age,name,address} = student

// console.log(name);

const student1= {
    name:"Mujahidul",
    age:20,
    address:{
        city:"Dhaka",
        zip:1221,
    },
}

const {name,age,address:{city,zip}}=student1;
console.log(name,age,city);