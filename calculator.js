// Math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}
let history = [];

// ... (Your math functions remain the same) ...

// Main function with Number() conversion fix
function calculate(a, operator, b) {
    // Convert inputs to numbers to prevent string concatenation bugs
    a = Number(a);
    b = Number(b);

    let result;

    if (operator === "+") {
        result = add(a, b);
    } else if (operator === "-") {
        result = subtract(a, b);
    } else if (operator === "*") {
        result = multiply(a, b);
    } else if (operator === "/") {
        result = divide(a, b);
    } else {
        return "Invalid operator";
    }

    history.push({ a, operator, b, result });

    return result;
}

// Show history
function showHistory() {
    if (history.length === 0) {
        console.log("No calculations in history.");
        return;
    }
    history.forEach((item, index) => {
        console.log(`${index + 1}: ${item.a} ${item.operator} ${item.b} = ${item.result}`);
    });
}

// NEW: Clear history function
function clearHistory() {
    history = [];
    console.log("History cleared.");
}

// Test
console.log(calculate(5, "+", 3)); // 8
console.log(calculate("10", "/", "2")); // 5 (Now works correctly even as strings)
showHistory();
clearHistory();
showHistory();