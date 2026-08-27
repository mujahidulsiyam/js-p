let product = [
    {titile:"Mouse",price: 500,inStolck:true},
    {titile:"Monitor",price: 1200,inStolck:false},
    {titile:"Keyboard",price: 8000,inStolck:true},
    {titile:"Headphone",price: 1500,inStolck:true},
];

let totalPrice = product.reduce((acc,current)=>{
    return (acc +=current.price);
},0)
// console.log(totalPrice);    

// sort 
// let sorted =[10,30,600,35,900,20,50]
// sorted1 = sorted.sort((a,b)=>b-a) 
// console.log(sorted1);

let sorted = product.sort((a,b)=>a.price-b.price);
// console.log(sorted);

let estimatedPrice = product.filter((p)=>p.inStolck == true).reduce((acc,current)=>{
    return (acc+=current.price);
},0)

console.log(estimatedPrice);