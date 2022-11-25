let firstOperandDigits = [];
let firstOperandLength=0;
let secondOperandDigits = [];
let clearCounter = 0;
let operatorCounter = 0;
let dotCounter = 0;

let firstOperand = 0;
let secondOperand = 0;
let operationResult = 0;

let addCounter = 0;
let minusCounter = 0;
let divideCounter = 0;
let multiplyCounter = 0;
let exponentCounter = 0;


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
let bottomDisplay = document.getElementById("bottom-display");

let clickZero = document.getElementById("zero");
clickZero.addEventListener("click", function(e) {
    let inputVal = '0'; selectStorage(inputVal);
    let divContent = document.createElement("div");
    let content = document.createTextNode(`${inputVal}`);
    displayAdd(divContent,content);
})

let clickOne = document.getElementById("one");
clickOne.addEventListener("click", function(e) {
    let inputVal = '1'; selectStorage(inputVal);
    let divContent = document.createElement("div");
    let content = document.createTextNode(`${inputVal}`);
    displayAdd(divContent,content);
})

let clickTwo = document.getElementById("two");
clickTwo.addEventListener("click", function(e) {
    let inputVal = '2'; selectStorage(inputVal);
    let divContent = document.createElement("div");
    let content = document.createTextNode(`${inputVal}`);
    displayAdd(divContent,content);
})

let clickThree= document.getElementById("three");
clickThree.addEventListener("click", function(e) {
    let inputVal = '3'; selectStorage(inputVal);
    let divContent = document.createElement("div");
    let content = document.createTextNode(`${inputVal}`);
    displayAdd(divContent,content);
})

let clickFour= document.getElementById("four");
clickFour.addEventListener("click", function(e) {
    let inputVal = '4'; selectStorage(inputVal);
    let divContent = document.createElement("div");
    let content = document.createTextNode(`${inputVal}`);
    displayAdd(divContent,content);
})

let clickFive= document.getElementById("five");
clickFive.addEventListener("click", function(e) {
    let inputVal = '5'; selectStorage(inputVal);
    let divContent = document.createElement("div");
    let content = document.createTextNode(`${inputVal}`);
    displayAdd(divContent,content);
})

let clickSix = document.getElementById("six");
clickSix.addEventListener("click", function(e) {
    let inputVal = '6'; selectStorage(inputVal);
    let divContent = document.createElement("div");
    let content = document.createTextNode(`${inputVal}`);
    displayAdd(divContent,content);
})

let clickSeven = document.getElementById("seven");
clickSeven.addEventListener("click", function(e) {
    let inputVal = '7'; selectStorage(inputVal);
    let divContent = document.createElement("div");
    let content = document.createTextNode(`${inputVal}`);
    displayAdd(divContent,content);
})

let clickEight = document.getElementById("eight");
clickEight.addEventListener("click", function(e) {
    let inputVal = '8'; selectStorage(inputVal);
    let divContent = document.createElement("div");
    let content = document.createTextNode(`${inputVal}`);
    displayAdd(divContent,content);
})

let clickNine = document.getElementById("nine");
clickNine.addEventListener("click", function(e) {
    let inputVal = '9'; selectStorage(inputVal);
    let divContent = document.createElement("div");
    let content = document.createTextNode(`${inputVal}`);
    displayAdd(divContent,content);
})

let clickDot = document.getElementById("dot");
clickDot.addEventListener("click", function(e) {
    if (dotCounter===0) {
        let inputVal = "0."; selectStorage(inputVal);
        let divContent = document.createElement("div");
        let content = document.createTextNode(`${inputVal}`);
        displayAdd(divContent,content); 
        document.getElementById("dot").disabled = true;
    }
    else if (dotCounter===1){
        let inputVal = "."; selectStorage(inputVal);
        let divContent = document.createElement("div");
        let content = document.createTextNode(`${inputVal}`);
        displayAdd(divContent,content);  
        document.getElementById("dot").disabled = true; 
    }
})

//all clear function
let clickAllClear = document.getElementById("all-clear");
clickAllClear.addEventListener("click", function(e) {
    document.getElementById("top-display").textContent="";
    document.getElementById("bottom-display").textContent="";
    document.getElementById("add").disabled = false;
    document.getElementById("minus").disabled = false;
    document.getElementById("dot").disabled = false;
    firstOperandDigits = [];  secondOperandDigits = [];
    firstOperandLength = 0;
    clearCounter=0; dotCounter=0; operatorCounter=0;
    firstOperand = 0; secondOperand = 0; operationResult = 0;
    addCounter = 0; minusCounter = 0; divideCounter = 0; 
    multiplyCounter = 0; exponentCounter = 0;
})

//clear or backspace function
let clickClear = document.getElementById("clear");
clickClear.addEventListener("click", function(e) {
     divContent = document.getElementById(`Number${clearCounter}`);
     topDisplay.removeChild(divContent);
     clearCounter -= 1;

     //to delete digits in operand storages
     if (operatorCounter===0){
        firstOperandDigits.pop();
     }
     else if (operatorCounter===1){
        secondOperandDigits.pop();
     }
     if (clearCounter===0) {
        dotCounter=0;firstOperandLength=0;
        document.getElementById("dot").disabled = false;        
        document.getElementById("add").disabled = false;
        document.getElementById("minus").disabled = false;
    }
    else if (clearCounter===firstOperandLength) {
        operatorCounter=0; addCounter=0; minusCounter=0; multiplyCounter=0; divideCounter=0; exponentCounter=0;
        document.getElementById("add").disabled = false;
        document.getElementById("minus").disabled = false;
        document.getElementById("equals").disabled = true;
    }
    else if (clearCounter===(firstOperandLength+1)) {
        document.getElementById("equals").disabled = true;
    }
})


//operations
//add button click function
let clickAdd = document.getElementById("add");
clickAdd.addEventListener("click", function(e) {
    if (clearCounter===0) {
        let inputVal = "0"; selectStorage(inputVal);
        let divContent = document.createElement("div");
        let content = document.createTextNode(`${inputVal} + \u00A0`);
        displayAdd(divContent,content);
        mergeDigits(firstOperandDigits);
        operatorCounter = 1;
        addCounter = 1;
        disableOperatorAll();
    }
    else if (clearCounter!==0){
        let divContent = document.createElement("div");
        let content = document.createTextNode(`\u00A0 + \u00A0`);
        displayAdd(divContent,content); 
        mergeDigits(firstOperandDigits);
        operatorCounter = 1;
        addCounter = 1;
        disableOperator();
    }
    document.getElementById("dot").disabled = false; dotCounter=0; //for second operand to be fractional
})

//minus button click function
let clickMinus = document.getElementById("minus");
clickMinus.addEventListener("click", function(e) {
    if (clearCounter===0) {
        let inputVal = "0"; selectStorage(inputVal);
        let divContent = document.createElement("div");
        let content = document.createTextNode(`${inputVal} - \u00A0`);
        displayAdd(divContent,content);
        mergeDigits(firstOperandDigits);
        operatorCounter = 1;
        minusCounter = 1;
        disableOperatorAll();
    }
    else if (clearCounter!==0){
        let divContent = document.createElement("div");
        let content = document.createTextNode(`\u00A0 - \u00A0`);
        displayAdd(divContent,content); 
        mergeDigits(firstOperandDigits);
        operatorCounter = 1;
        minusCounter = 1;
        disableOperator();
    }
    document.getElementById("dot").disabled = false; dotCounter=0; //for second operand to accept fractional inputs
})


let clickEquals = document.getElementById("equals");
clickEquals.addEventListener("click", function(e) {
    if (addCounter===1) {
        document.getElementById("bottom-display").textContent="";
        mergeDigits(secondOperandDigits);
        operationResult = addNumbers(firstOperand,secondOperand);
        lowerDisplayAdd(operationResult); addCounter=0; 
        processEval(operationResult);
    }
    else if (minusCounter===1) {
        document.getElementById("bottom-display").textContent="";
        mergeDigits(secondOperandDigits);
        operationResult = subtractNumbers(firstOperand,secondOperand);
        lowerDisplayAdd(operationResult); minusCounter=0;         
        processEval(operationResult);
    }
})

//appends content in lower display
function lowerDisplayAdd (operationResult) {
    document.getElementById("bottom-display").textContent="";
    let divContent = document.createElement("div");
    let content = document.createTextNode(`= ${operationResult}`);
    divContent.appendChild(content);
    bottomDisplay.appendChild(divContent);
}

//appends content in top display
function displayAdd (divContent,content) {
    dotCounter=1;
    clearCounter += 1;
    divContent.id = `Number${clearCounter}`;
    divContent.appendChild(content);
    topDisplay.appendChild(divContent);
}

//selects where to store numbers
function selectStorage (inputVal) {
    if (operatorCounter===0) {
        document.getElementById("equals").disabled = true;
        firstOperandLength += 1;
        return firstOperandDigits[clearCounter]=inputVal;
    }
    else if (operatorCounter===1) {
        document.getElementById("equals").disabled = false;
        return secondOperandDigits[(clearCounter-1)-firstOperandLength]=inputVal;
    }
}

//combines the digits in the array and converts it into number data type
function mergeDigits() {
    let numberToProcess = Array.from(arguments)
    if (operatorCounter===0) {
        firstOperand = +(numberToProcess.join().replaceAll(",",""))
        return firstOperand 
    }
    else if (operatorCounter===1) {
        secondOperand = +(numberToProcess.join().replaceAll(",",""))
        return secondOperand
    }
}

//disables click on all operation when at least one is clicked
function disableOperatorAll () {
    if (clearCounter===0) {
    document.getElementById("add").disabled = true;
    document.getElementById("minus").disabled = true;
    // document.getElementById("multiply").disabled = true;
    // document.getElementById("divide").disabled = true;
    // document.getElementById("exponent").disabled = true;
    document.getElementById("equals").disabled = true;
    }
}

//disables click on all operation when at least one is clicked except for the equals button
function disableOperator () {
    if (clearCounter!==0) {
    document.getElementById("add").disabled = true;
    document.getElementById("minus").disabled = true;
    // document.getElementById("multiply").disabled = true;
    // document.getElementById("divide").disabled = true;
    // document.getElementById("exponent").disabled = true;
    }
}

//process evaluation and display changes

function processEval (operationResult) {
    operatorCounter = 0; firstOperandLength = 0;
    secondOperandDigits=[];firstOperandDigits = [];
    document.getElementById("add").disabled = false;
    document.getElementById("minus").disabled = false;
    // document.getElementById("multiply").disabled = false;
    // document.getElementById("divide").disabled = false;
    // document.getElementById("exponent").disabled = false;
    document.getElementById("top-display").textContent="";
    let inputVal = operationResult; selectStorage(inputVal);
    let divContent = document.createElement("div");
    let content = document.createTextNode(`${inputVal}`);
    dotCounter=1;
    clearCounter = 1;
    divContent.id = `Number${clearCounter}`;
    divContent.appendChild(content);
    topDisplay.appendChild(divContent);


    return operationResult;
}

