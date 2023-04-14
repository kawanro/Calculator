function add(...args){
    return args.reduce((total, current) => {
        return total=current+total;
    })
}

function subtract(...args){
    return args.reduce((total, current) => {
        return total=total-current;

    })
}

function multiply(...args){
    return args.reduce((total, current) => {
        return total=total*current;

    })
}

function divide(...args){
    if(args.includes(0)){
        return "Cant divide through 0"
    }
    return args.reduce((total, current) => {
        return total=total/current;

    })
}

let firstNumber = 0;
let operator = "";
let secondNumber = 0;

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

console.log(operate(1,"/",2));