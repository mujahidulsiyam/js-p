function analyzeText(str) {
    if(typeof str === "string" && str.length >1){
    let strArray = str.split(" ");
    let longWord= strArray[0];
    let token = 0;
    for(let i= 0 ; i<strArray.length;i++){
        if(strArray[i].length > longWord.length){
            longWord = strArray[i];
        }
    }
    let tokens = strArray.join('').length
    return {
        longwords : longWord,
        token : tokens
    };
    }
    else{
        return "Invalid";
    }
    
};



// console.log(analyzeText("I am a little honest person"));