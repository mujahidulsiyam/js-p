let fruit = ["Banana","orange","apple"];

// let newfruit = fruit.forEach((f,b,c)=>{
//     console.log(`${b} ->${f} ->${c}`);
// });

// console.log(newfruit);

// map
let newfruit = fruit.map((f)=>f.toLowerCase())
// console.log(newfruit);

// filter
let customFruits= fruit.filter((f)=>f.length>5);
console.log(customFruits);