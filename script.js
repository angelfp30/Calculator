let firstNumber = 0;
let secondNumber = 0;
let operator;

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');
const plus = document.querySelector('#plusButton');
const minus = document.querySelector('#minusButton');
const multiply = document.querySelector('#multiplyButton');
const divide = document.querySelector('#divideButton');
const equals = document.querySelector('#equals');
const dot = document.querySelector('#dot');
const zero = document.querySelector('#zero');
const operationsDisplay = document.querySelector('.operations')
const results = document.querySelector('.results')

function operate(firstNumber, operator, secondNumber){
    if (operator == "+") {

        operationsDisplay.textContent = `${firstNumber}${operator}${secondNumber}`
        return results.textContent =  Math.round((Number(firstNumber) + Number(secondNumber))*100)/100;

    } else if (operator == "-") {

        operationsDisplay.textContent = `${firstNumber}${operator}${secondNumber}`
        return results.textContent =  Math.round((Number(firstNumber) - Number(secondNumber))*100)/100;

    } else if (operator == "x") {

        operationsDisplay.textContent = `${firstNumber}${operator}${secondNumber}`
        return results.textContent =  Math.round((Number(firstNumber) * Number(secondNumber))*100)/100;

    } else if (operator == "÷") {

        operationsDisplay.textContent = `${firstNumber}${operator}${secondNumber}`
        return results.textContent =  Math.round((Number(firstNumber) / Number(secondNumber))*100)/100;

    } else if (operator == "÷" && secondNumber === 0) {
        results.textContent = "xd?"
    }
    operator = "";
}
function setNumbers(){
    firstNumber = results.textContent;
    results.textContent = "";
    operationsDisplay.textContent = firstNumber
}
function severalOperators(){
    if (operator != "") {
        secondNumber = results.textContent;
        results.textContent = "";
        operate(firstNumber, operator, secondNumber);
    }
}
//Set the operators
plus.addEventListener("click", () => {
    severalOperators();
    setNumbers();
    operator = "+";
    dot.disabled = false;
})
minus.addEventListener("click", () => {
    severalOperators();
    setNumbers();
    operator = "-";
    dot.disabled = false;
})
multiply.addEventListener("click", () => {
    severalOperators();
    setNumbers();
    operator = "x";
    dot.disabled = false;
})
divide.addEventListener("click", () => {
    severalOperators();
    setNumbers();
    operator = "÷";
    dot.disabled = false;
})
equals.addEventListener("click", () => {
    secondNumber = results.textContent;
    results.textContent = "";
    operate(firstNumber, operator, secondNumber);
    operator = "";
    dot.disabled = false;
})

//Clear button should remove all the current data
clear.addEventListener("click", () =>{
    results.textContent = "";
    operationsDisplay.textContent = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    dot.disabled = false;
})
//Backspace reduces the string in the display bar by 1
backspace.addEventListener("click", () => {
    results.textContent = results.textContent.substring(0, results.textContent.length - 1);
})
//Set the numbers to appear into the display box
one.addEventListener("click", () =>{
    results.textContent += '1';
});
two.addEventListener("click", () =>{
    results.textContent += '2';
});
three.addEventListener("click", () =>{
    results.textContent += '3';
});
four.addEventListener("click", () =>{
    results.textContent += '4';
});
five.addEventListener("click", () =>{
    results.textContent += '5';
});
six.addEventListener("click", () =>{
    results.textContent += '6';
});
seven.addEventListener("click", () =>{
    results.textContent += '7';
});
eight.addEventListener("click", () =>{
    results.textContent += '8';
});
nine.addEventListener("click", () =>{
    results.textContent += '9';
});
zero.addEventListener("click", () =>{
    results.textContent += '0';
});
dot.addEventListener("click", () =>{
    results.textContent += '.';
    dot.disabled = true;
});
