/* PSEUDOCODE:
- when a number is pressed, display store first number
- when operator is pressed, select operator and make button highlighted
- when second number is pressed, display store second number
- when '=' is pressed, make number-operator-number and show result in display
- if user enters 0/0, display "that ain't it, sis"
- when 'clear' is pressed, show 0 on screen*/


// Make calcs long shadow

let calcBody = document.querySelector('.calcshadow');
let calcShadow = '';

for (let i = 0; i < 500; i++) {
    calcShadow += (calcShadow? ',':'')+ i*1 +'px ' + i*1 + 'px 0 #7b9b67';    
}

calcBody.style.boxShadow = calcShadow;

// Basic math functions
let inputOne = '';
let inputTwo = '';
let operatorMode = '';
let result = 0;
let onDisplay = '';

btn-number

function operate() {
    if (operatorMode === "add") {
        result = (inputOne + inputTwo);
    } else if (operatorMode === "substract") {
        result = (inputOne - inputTwo); 
    } else if (operatorMode === "multiply") {
        result = (inputOne * inputTwo); 
    } else {
        result = (inputOne / inputTwo);
    };

    return result;
}

document.querySelector('#bntPlus').onclick = e => {
    operatorMode = 'add';
    console.log(operatorMode);
}

document.querySelector('#bntMinus').onclick = e => {
    operatorMode = 'substract';
    console.log(operatorMode);
}

document.querySelector('#bntMultiply').onclick = e => {
    operatorMode = 'multiply';
    console.log(operatorMode);
}

document.querySelector('#bntDivide').onclick = e => {
    operatorMode = 'divide';
    console.log(operatorMode);
}

document.querySelector('#bntEqual').onclick = e => {
    operate();
    console.log(result);
    onDisplay = document.querySelector('#display').innerHTML = result;
}








function add(x, y) {
    result = (x+y)

    return result;
}

function substract(x, y) {
    result = (x-y)

    return result;
}

function multiply(x, y) {
    result = (x*y)

    return result;
}

function divide(x, y) {
    result = (x/y)

    return result;
}