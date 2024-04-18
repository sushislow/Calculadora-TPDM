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
    expression += num;
    updateDisplay();
}

function appendOperator(operator) {
    expression += operator;
    updateDisplay();
}

function appendDecimal() {
    if (!expression.includes('.')) {
        expression += '.';
        updateDisplay();
    }
}

function calculate() {
    try {
        const result = eval(expression);
        document.getElementById('display').value = result;
        expression = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateSqrt() {
    try {
        const result = Math.sqrt(eval(expression));
        document.getElementById('display').value = result;
        expression = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function updateDisplay() {
    document.getElementById('display').value = expression;
}
