// rest operator 

// function 
function add(...numbers) {
    console.log(numbers);
}

// add(1,2,3,4,5,8)

// object
const obj = {
    name : "Tonmoy",
    age:27,
    address:"Dhaka",
    occupation:"Developer",
}

// const{name,...remaing} = obj
// console.log(remaing);


// array 
const arr = [1,2,3,100,200];

let arr2 = [,,,...reamaing] = arr;

console.log(reamaing);

