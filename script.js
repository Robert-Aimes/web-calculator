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
const zero = document.getElementById('zer0');
const period = document.getElementById('period');
const equals = document.getElementById('equals');
const addition = document.getElementById('+');
const subtraction = document.getElementById('-');
const multiplication = document.getElementById('x');
const division = document.getElementById('/');


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
        add(num1, num2);
    }else if(operator == "-"){
        subtract(num1, num2);
    }else if(operator == "*"){
        multiply(num1, num2);
    }else if(operator == "/"){
        divide(num1, num2);
    }
}

//Function to handle clicked buttons
function handleClick(event){
    const id = event.target.id;
    if(id === 'one'){

    }else if(id === 'one'){
        
    }else if(id === 'two'){
        
    }else if(id === 'three'){
        
    }else if(id === 'four'){
        
    }else if(id === 'five'){
        
    }else if(id === 'six'){
        
    }else if(id === 'seven'){
        
    }else if(id === 'eight'){
        
    }else if(id === 'nine'){
        
    }else if(id === 'zero'){
        
    }else if(id === 'period'){
        
    }else if(id === 'equals'){
        
    }else if(id === 'addition'){
        
    }else if(id === 'subtraction'){
        
    }else if(id === 'multiplication'){
        
    }else if(id === 'division'){
        
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
