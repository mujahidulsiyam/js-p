let fruit = ["Banana","orange","apple"];

// Find
let customFruit= fruit.find((f)=>f.length>5);
// console.log(customFruit);

// some
let students = [
    {name:"Rahim",marks :85},
    {name:"Kahim",marks :45},
    {name:"Fahim",marks :70},
]

let studentCheck = students.some((s)=>s.marks>80);
// console.log(studentCheck);

// every
let studentCheck1 = students.every((s)=>s.marks>40);
console.log(studentCheck1);