// const student= {
//     name :"Mujahidul",
//     age:20,
//     address:"Dhaka",
// }
// // old
// const oldName = student.name

// // new 
// const {age,name,address} = student

// // console.log(name);

// const student1= {
//     name:"Mujahidul",
//     age:20,
//     address:{
//         city:"Dhaka",
//         zip:1221,
//     },
// }

// const {name:stdName,address:{city,zip}}=student1;
// console.log(stdName,age,city);b


// array 

// const arr = ["red","green","blue"]

// const [,,Third]=arr;

// console.log(Third);


// Nested array 

const student2= {
    name:"Mujahidul",
    age:20,
    address:{
        city:"Dhaka",
        zip:1221,
    },
    hobbies :["Gardening","Painting"],
}

const {name,address:{city,zip},hobbies:[first],} =student2


console.log(first);