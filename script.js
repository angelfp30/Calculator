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
        return results.textContent =  Number(firstNumber) + Number(secondNumber);

    } else if (operator == "-") {

        operationsDisplay.textContent = `${firstNumber}${operator}${secondNumber}`
        return results.textContent =  Number(firstNumber) - Number(secondNumber);

    } else if (operator == "x") {

        operationsDisplay.textContent = `${firstNumber}${operator}${secondNumber}`
        return results.textContent =  Number(firstNumber) * Number(secondNumber);

    } else if (operator == "÷") {

        operationsDisplay.textContent = `${firstNumber}${operator}${secondNumber}`
        return results.textContent =  Number(firstNumber) / Number(secondNumber);

    } 
    //return results.textContent = `${firstNumber}${operator}${secondNumber}`
}
function setNumbers(){
    firstNumber = results.textContent;
    results.textContent = "";
    operationsDisplay.textContent = firstNumber
}

//Set the operators
plus.addEventListener("click", () => {
    
    setNumbers();
    operator = "+";
})
minus.addEventListener("click", () => {
    setNumbers();
    operator = "-"
})
multiply.addEventListener("click", () => {
    setNumbers();
    operator = "x"
})
divide.addEventListener("click", () => {
    setNumbers();
    operator = "÷"
})
equals.addEventListener("click", () => {
    secondNumber = results.textContent;
    results.textContent = "";
    operate(firstNumber, operator, secondNumber);
})

//Set the clear button
clear.addEventListener("click", () =>{
    results.textContent = "";
    operationsDisplay.textContent = "";
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