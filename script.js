let num1 
let num2 
let operator 

const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('zero');
const period = document.getElementById('period');
const equals = document.getElementById('equals');
const addition = document.getElementById('+');
const subtraction = document.getElementById('-');
const multiplication = document.getElementById('x');
const division = document.getElementById('/');
const clear = document.getElementById('clear');


function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

//Function to take in number paramaters and selected operator to perform calculation
function operate(num1, num2, operator){
    if(operator == "+"){
        return add(num1, num2);
    }else if(operator == "-"){
        return subtract(num1, num2);
    }else if(operator == "*"){
        return multiply(num1, num2);
    }else if(operator == "/"){
        return divide(num1, num2);
    }
}

//Function to handle clicked buttons
function handleClick(event){
    const id = event.target.id;
    const screen = document.getElementById('number-screen');
    if(id === '1'){
        screen.value += 1;
        
    }else if(id === '2'){
        screen.value +=2;
        
    }else if(id === '3'){
        screen.value += 3;
        
    }else if(id === '4'){
        screen.value += 4;
        
    }else if(id === '5'){
        screen.value += 5;
        
    }else if(id === '6'){
        screen.value += 6;
        
    }else if(id === '7'){
        screen.value += 7;
        
    }else if(id === '8'){
        screen.value += 8;
        
    }else if(id === '9'){
        screen.value += 9;
        
    }else if(id === 'zero'){
        screen.value += 0;
        
    }else if(id === 'period'){
        if (!screen.value.includes('.')) {
            screen.value += '.';
        }
        
    }else if(id === 'equals'){
        num2 = parseFloat(screen.value);
        let result = operate(num1, num2, operator);
        screen.value = result;

        
    }else if(id === '+'){
        num1 = parseFloat(screen.value);
        operator = "+";
        screen.value = '';
        
    }else if(id === '-'){
        num1 = parseFloat(screen.value);
        operator = "-";
        screen.value = '';
        
    }else if(id === 'x'){
        num1 = parseFloat(screen.value);
        operator = "*";
        screen.value = '';
        
    }else if(id === '/'){
        num1 = parseFloat(screen.value);
        operator = "/";
        screen.value = '';
        
    }else if(id === 'clear'){
        screen.value = '';
    }
    
}

one.addEventListener('click', handleClick);
two.addEventListener('click', handleClick);
three.addEventListener('click', handleClick);
four.addEventListener('click', handleClick);
five.addEventListener('click', handleClick);
six.addEventListener('click', handleClick);
seven.addEventListener('click', handleClick);
eight.addEventListener('click', handleClick);
nine.addEventListener('click', handleClick);
zero.addEventListener('click', handleClick);
period.addEventListener('click', handleClick);
equals.addEventListener('click', handleClick);
addition.addEventListener('click', handleClick);
subtraction.addEventListener('click', handleClick);
multiplication.addEventListener('click', handleClick);
division.addEventListener('click', handleClick);
clear.addEventListener('click', handleClick);
