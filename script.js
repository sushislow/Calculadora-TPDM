let expression = '';

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function removeLast() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

function appendNumber(num) {
    if (expression === '' && num === '0') return;
    expression += num;
    updateDisplay();
}

function appendOperator(operator) {
    if (expression === '') return;
    expression += operator;
    updateDisplay();
}

function appendDecimal() {
    if (!expression.includes('.')) {
        expression += '.';
        updateDisplay();
    }
}

function setRootMode(index) {
    if (expression === '') return;
    if (index === undefined) {
        index = document.getElementById('root-select').value;
    }
    expression = 'Math.pow(' + expression + ', 1/' + index + ')';
    updateDisplay();
}

function calculate() {
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

function updateDisplay() {
    document.getElementById('display').value = expression;
}