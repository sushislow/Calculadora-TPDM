let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('num'));
let operators = Array.from(document.getElementsByClassName('operator'));
let clear = document.getElementById('clear');
let equals = document.getElementById('equals');
let currentNum = '';
let prevNum = '';
let result = '';
let currentOperator = '';

buttons.map( button => {
    button.addEventListener('click', (e) => {
        handleNumber(e.target.value);
        display.value = currentNum;
    })
});

operators.map( operator => {
    operator.addEventListener('click', (e) => {
        handleOperator(e.target.value);
    })
});

clear.addEventListener('click', () => {
    clearAll();
    display.value = currentNum;
});

equals.addEventListener('click', () => {
    calculate();
    display.value = result;
    currentNum = result;
    result = '';
});

const handleNumber = (number) => {
    currentNum += number;
}

const handleOperator = (operator) => {
    if (currentOperator) {
        calculate();
    }
    currentOperator = operator;
    prevNum = currentNum;
    currentNum = '';
}

const calculate = () => {
    switch(currentOperator) {
        case '+':
            result = parseFloat(prevNum) + parseFloat(currentNum);
            break;
        case '-':
            result = parseFloat(prevNum) - parseFloat(currentNum);
            break;
        case '*':
            result = parseFloat(prevNum) * parseFloat(currentNum);
            break;
        case '/':
            result = parseFloat(prevNum) / parseFloat(currentNum);
            break;
    }
    result = roundNumber(result);
}

const clearAll = () => {
    currentNum = '';
}