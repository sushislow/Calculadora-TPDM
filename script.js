let expression = '';

const clearDisplay = () => {
    expression = '';
    updateDisplay();
}

const removeLast = () => {
    expression = expression.slice(0, -1);
    updateDisplay();
}

const appendNumber = (num) => {
    if (expression === '' && num === '0') return;
    expression += num;
    updateDisplay();
}

const appendOperator = (operator) => {
    if (expression === '') return;
    expression += operator;
    updateDisplay();
}

const appendDecimal = () => {
    if (!expression.includes('.')) {
        expression += '.';
        updateDisplay();
    }
}

const setRootMode = (index) =>{
    if (expression === '') return;
    if (index === undefined) {
        index = document.getElementById('root-select').value;
    }
    expression = 'Math.pow(' + expression + ', 1/' + index + ')';
    updateDisplay();
}

const calculate = () => {
    try {
        let result = eval(expression);
        if (isNaN(result)) {
            throw new Error();
        }
        document.getElementById('display').value = result;
        expression = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

const updateDisplay = () => {
    document.getElementById('display').value = expression;
}
