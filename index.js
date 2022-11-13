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