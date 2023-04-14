let firstNumber = "";
let operator = "";
let operator2 ="";
let secondNumber = "";
let arr =[];
let counter=0;
const OPERATORS =["+", "-", "*", "/"];


//define add function 
function add(...args){ 
    return args.reduce((total, current) => {
        return total=current+total;
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
    if(args.includes(0)){
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

//define functions when clicked on equals

function equals(){
    console.log(operate(firstNumber,operator,secondNumber));
}

//define display function to save current input

function display(input){
    if(operator==""){
        firstNumber=firstNumber+input;
        //console.log(firstNumber);
    }
    else {
        secondNumber = secondNumber+input;
        //console.log(secondNumber);
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
    }

    
}

// add eventListener to every Digit and Operator
const digits = document.querySelectorAll(".digit");
const operatorButton = document.querySelectorAll(".operator");
const equalsButton = document.getElementById("equals");

digits.forEach(digit => {
    digit.addEventListener("click", e => {

            display(e.srcElement.innerText);
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

console.log(digits);