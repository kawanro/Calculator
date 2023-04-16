let firstNumber = "";
let operator = "";
let secondNumber = "";
let display = document.getElementById("display");



//define add function 
function add(...args){ 
    return args.reduce((total, current) => {
        return total=Number(current)+Number(total);
    })
}

//define subtrat function 
function subtract(...args){
    return args.reduce((total, current) => {
        return total=total-current;

    })
}

//define multiply function 
function multiply(...args){
    return args.reduce((total, current) => {
        return total=total*current;

    })
}

//define divide function 
function divide(...args){
    if(args.includes("0")){
        return "Cant divide through 0"
    }
    return args.reduce((total, current) => {
        return total=total/current;

    })
}


//define operate function which calls math function depening on operator
function operate(num1, op, num2){
    switch(op){
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1,num2);
    }
}

//define function when clicked on equals

function equals(str){
    
    console.log(operate(firstNumber,operator,secondNumber));
    firstNumber=operate(firstNumber,operator,secondNumber);
    secondNumber="";
    operator=str;
    display.innerText = firstNumber;
}

//define display function to save current input

function writeDisplay(input){
    if(operator==""){
        firstNumber=firstNumber+input;
        display.innerText = firstNumber;
    }
    else {
        secondNumber = secondNumber+input;
        display.innerText = secondNumber;
    }
}

function fillOperator(str){

    if(secondNumber==""){

        operator=str;
        
    }
    else{
        console.log(operate(firstNumber,operator,secondNumber));
        firstNumber=operate(firstNumber,operator,secondNumber);
        secondNumber="";
        operator=str;
        display.innerText = firstNumber;
    }

    
}
//function to change 

function plusMinus(){
    if(display.innerText.charAt(0)!= "-"){  //check if current input is positive or negative
        if(display.innerText == firstNumber){// check if current input is number one or two
            firstNumber = "-"+firstNumber;
            display.innerText = firstNumber;
            }
        else{
            secondNumber = "-"+secondNumber;
            display.innerText = secondNumber;
            }
        }
    else{
        if(display.innerText == firstNumber){// check if current input is number one or two
            firstNumber = firstNumber.substring(1);
            display.innerText = firstNumber;
            }
        else{
            secondNumber = secondNumber.substring(1);
            display.innerText = secondNumber;
            }
        } 
        
}

function addDecimal(){
    if(display.innerText.includes(".")==true){
        alert("You can only input one decimal point");
        return
    }
    if(display.innerText == firstNumber){// check if current input is number one or two
        firstNumber = firstNumber + ".";
        display.innerText = firstNumber;
        }
    else{
        secondNumber = secondNumber + ".";
        display.innerText = secondNumber;
        }
    
        
}

function backspace(){
    if(display.innerText == firstNumber){// check if current input is number one or two
        firstNumber = firstNumber.slice(0,-1);
        display.innerText = firstNumber;
        }
    else{
        secondNumber = secondNumber.slice(0,-1);
        display.innerText = secondNumber;
        } 
}

function clear(){
    firstNumber = "";
    secondNumber = "";
    operator = "";
    display.innerText = "";
}

// add eventListener to every Button
const digits = document.querySelectorAll(".digit");
const operatorButton = document.querySelectorAll(".operator");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");
const plusMinusButton = document.getElementById("plusminus");
const decimalButton = document.getElementById("decimal");
const backspaceButton = document.getElementById("backspace");

digits.forEach(digit => {
    digit.addEventListener("click", e => {

        writeDisplay(e.srcElement.innerText);
    })
});

operatorButton.forEach(operator => {
    operator.addEventListener("click", e => {

            fillOperator(e.srcElement.innerText);
    })
});

equalsButton.addEventListener("click",e => {
    equals();
})

plusMinusButton.addEventListener("click", e => {
    plusMinus();
})

decimalButton.addEventListener("click", e => {
    addDecimal();
})

backspaceButton.addEventListener("click", e => {
    backspace();
})

clearButton.addEventListener("click",e => {
    clear();
})

