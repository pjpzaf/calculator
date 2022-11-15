let selectedNumbers = [];

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
    let content = document.createTextNode("0");
    topDisplay.appendChild(content);
})

let clickOne = document.getElementById("one");
clickOne.addEventListener("click", function(e) {
    let content = document.createTextNode("1");
    topDisplay.appendChild(content);
})

let clickTwo = document.getElementById("two");
clickTwo.addEventListener("click", function(e) {
    let content = document.createTextNode("2");
    topDisplay.appendChild(content);
})

let clickThree= document.getElementById("three");
clickThree.addEventListener("click", function(e) {
    let content = document.createTextNode("3");
    topDisplay.appendChild(content);
})

let clickFour= document.getElementById("four");
clickFour.addEventListener("click", function(e) {
    let content = document.createTextNode("4");
    topDisplay.appendChild(content);
})

let clickFive= document.getElementById("five");
clickFive.addEventListener("click", function(e) {
    let content = document.createTextNode("5");
    topDisplay.appendChild(content);
})

let clickSix = document.getElementById("six");
clickSix.addEventListener("click", function(e) {
    let content = document.createTextNode("6");
    topDisplay.appendChild(content);
})

let clickSeven = document.getElementById("seven");
clickSeven.addEventListener("click", function(e) {
    let content = document.createTextNode("7");
    topDisplay.appendChild(content);
})

let clickEight = document.getElementById("eight");
clickEight.addEventListener("click", function(e) {
    let content = document.createTextNode("8");
    topDisplay.appendChild(content);
})

let clickNine = document.getElementById("nine");
clickNine.addEventListener("click", function(e) {
    let content = document.createTextNode("9");
    content.className = "text";
    topDisplay.appendChild(content);
})

let clickDot = document.getElementById("dot");
clickDot.addEventListener("click", function(e) {
    if (document.getElementById("top-display").textContent==="") {
        let content = document.createTextNode("0.");
        topDisplay.appendChild(content);       
    }
    else if (document.getElementById("top-display").textContent!==""){
        let content = document.createTextNode(".");
        topDisplay.appendChild(content);         
    }
    document.getElementById("dot").disabled = true;
})

let clickAllClear = document.getElementById("all-clear");
clickAllClear.addEventListener("click", function(e) {
    document.getElementById("top-display").textContent="";
    document.getElementById("bottom-display").textContent="";
    document.getElementById("dot").disabled = false;    
})

// let clickClear = document.getElementById("clear");
// clickClear.addEventListener("click", function(e) {
//      let content = document.getElementsByClassName("text");
//      topDisplay.removeChild(content);
// })