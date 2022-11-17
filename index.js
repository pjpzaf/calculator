let firstOperand = [];
let secondOperand = [];
let clearCounter = 0;
let operatorCounter = 0;

//addition
function addNumbers() {
    inputNumbers = Array.from(arguments);
    let sumOfNumbers = inputNumbers[0] + inputNumbers[1];
    return sumOfNumbers;
}

//subtraction
function subtractNumbers() {
    inputNumbers = Array.from(arguments);
    let diffOfNumbers = inputNumbers[0] - inputNumbers[1];
    return diffOfNumbers;
}

//multiplication
function multiplyNumbers() {
    inputNumbers = Array.from(arguments);
    let prodOfNumbers = inputNumbers[0] * inputNumbers[1];
    return prodOfNumbers;
}

//division
function divideNumbers() {
    inputNumbers = Array.from(arguments);
    if (inputNumbers[1]===0){
        console.log("Undefined!")
    }
    else if (inputNumbers[1]!=0) {
        let quotOfNumbers = inputNumbers[0] / inputNumbers[1];
        return quotOfNumbers;
    }
}

//function that takes an operator and 2 numbers
function operate() {
    inputParam = Array.from(arguments);
    console.log(inputParam)
    //checks if first key-value pair of input object is a valid operator 
    if (inputParam[0]!="+" && inputParam[0]!="-" && inputParam[0]!="*" && inputParam[0]!="/") {
        console.log("Not a valid operator!")
    }
    else if (inputParam[0]==="+") {
        let operationOutput = addNumbers(inputParam[1],inputParam[2]);
        return operationOutput;
    }
    else if (inputParam[0]==="-") {
        let operationOutput = subtractNumbers(inputParam[1],inputParam[2]);
        return operationOutput;
    }
    else if (inputParam[0]==="*") {
        let operationOutput = multiplyNumbers(inputParam[1],inputParam[2]);
        return operationOutput;
    }
    else if (inputParam[0]==="/") {
        let operationOutput = divideNumbers(inputParam[1],inputParam[2]);
        return operationOutput;
    }
}

//on-click function for buttons
let topDisplay = document.getElementById("top-display");

let clickZero = document.getElementById("zero");
clickZero.addEventListener("click", function(e) {
    let inputVal = 0; selectStorage(inputVal);
    let divContent = document.createElement("div");
    let content = document.createTextNode(`${inputVal}`);
    displayAdd(divContent,content);
})

let clickOne = document.getElementById("one");
clickOne.addEventListener("click", function(e) {
    let inputVal = 1; selectStorage(inputVal);
    let divContent = document.createElement("div");
    let content = document.createTextNode(`${inputVal}`);
    displayAdd(divContent,content);
})

let clickTwo = document.getElementById("two");
clickTwo.addEventListener("click", function(e) {
    let inputVal = 2; selectStorage(inputVal);
    let divContent = document.createElement("div");
    let content = document.createTextNode(`${inputVal}`);
    displayAdd(divContent,content);
})

let clickThree= document.getElementById("three");
clickThree.addEventListener("click", function(e) {
    let inputVal = 3; selectStorage(inputVal);
    let divContent = document.createElement("div");
    let content = document.createTextNode(`${inputVal}`);
    displayAdd(divContent,content);
})

let clickFour= document.getElementById("four");
clickFour.addEventListener("click", function(e) {
    let inputVal = 4; selectStorage(inputVal);
    let divContent = document.createElement("div");
    let content = document.createTextNode(`${inputVal}`);
    displayAdd(divContent,content);
})

let clickFive= document.getElementById("five");
clickFive.addEventListener("click", function(e) {
    let inputVal = 5; selectStorage(inputVal);
    let divContent = document.createElement("div");
    let content = document.createTextNode(`${inputVal}`);
    displayAdd(divContent,content);
})

let clickSix = document.getElementById("six");
clickSix.addEventListener("click", function(e) {
    let inputVal = 6; selectStorage(inputVal);
    let divContent = document.createElement("div");
    let content = document.createTextNode(`${inputVal}`);
    displayAdd(divContent,content);
})

let clickSeven = document.getElementById("seven");
clickSeven.addEventListener("click", function(e) {
    let inputVal = 7; selectStorage(inputVal);
    let divContent = document.createElement("div");
    let content = document.createTextNode(`${inputVal}`);
    displayAdd(divContent,content);
})

let clickEight = document.getElementById("eight");
clickEight.addEventListener("click", function(e) {
    let inputVal = 8; selectStorage(inputVal);
    let divContent = document.createElement("div");
    let content = document.createTextNode(`${inputVal}`);
    displayAdd(divContent,content);
})

let clickNine = document.getElementById("nine");
clickNine.addEventListener("click", function(e) {
    let inputVal = 9; selectStorage(inputVal);
    let divContent = document.createElement("div");
    let content = document.createTextNode(`${inputVal}`);
    displayAdd(divContent,content);
})

let clickDot = document.getElementById("dot");
clickDot.addEventListener("click", function(e) {
    if (clearCounter===0) {
        let inputVal = "0."; selectStorage(inputVal);
        let divContent = document.createElement("div");
        let content = document.createTextNode(`${inputVal}`);
        displayAdd(divContent,content);     
    }
    else if (clearCounter!==0){
        let inputVal = "."; selectStorage(inputVal);
        let divContent = document.createElement("div");
        let content = document.createTextNode(`${inputVal}`);
        displayAdd(divContent,content);   
    }
    document.getElementById("dot").disabled = true;
})

let clickAllClear = document.getElementById("all-clear");
clickAllClear.addEventListener("click", function(e) {
    document.getElementById("top-display").textContent="";
    document.getElementById("bottom-display").textContent="";
    document.getElementById("dot").disabled = false;  
    clearCounter=0;  
})

let clickClear = document.getElementById("clear");
clickClear.addEventListener("click", function(e) {
     divContent = document.getElementById(`Number${clearCounter}`);
     topDisplay.removeChild(divContent);
     clearCounter -= 1;
     if (clearCounter===0) {document.getElementById("dot").disabled = false;};
})

//appends content in top display
function displayAdd (divContent,content) {
    clearCounter += 1;
    divContent.id = `Number${clearCounter}`;
    divContent.appendChild(content);
    topDisplay.appendChild(divContent);
}

//selects where to store numbers
function selectStorage (inputVal) {
    if (operatorCounter===0) {
        firstOperand[clearCounter]=inputVal
    }
    else if (operatorCounter===1) {
        secondOperand[clearCounter]=inputVal;
    }
}