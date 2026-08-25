// we will build a order processing system to understand dry and how important a function is.

function isValidPrice(price){
    return typeof price ==="number" && price > 0;
}
function isValidEmail(email){
    return email.includes("@") && email.includes(".");
}

function calculateDiscount(price,discountPercent){
    if(!isValidPrice(price)){
        return 0;
    }
    let discountAmmount = (price*discountPercent)/100;
    return price - discountAmmount;
}

function calculateFinalBill(price,vatPercentage=15){
    let vat = (price *vatPercentage)/100;
    return price+vat;
}

function formatBDT(amount){
    return `${amount.toFixed(2)}BDT`;
}

function capitalized(str){
    if(!str) return "";
    return str.charAt(0).toUpperCase()+str.slice(1);
}

function processOrder(user,iteamPrice,discountCode){
    console.log("-------processing order for",capitalized(user.name),"-------");
    if(!isValidEmail(user.email)){
        console.log("Error:Invalid User Email");
        return;
    }
    let currentPrice = iteamPrice;

    if(discountCode == "NLB"){
        currentPrice= calculateDiscount(iteamPrice,20);
        console.log("20% Discound is now applied");
    }

    let  totalBill = calculateFinalBill(currentPrice);
    console.log("Final ammount pay : ",formatBDT(totalBill));
    console.log("Order Completed Succssfully");
}

let user1 = {
    name : "Mujahidul",
    email: "mujahidul.siyam@gmail.com",
};

processOrder(user1,2000,"NLB");

