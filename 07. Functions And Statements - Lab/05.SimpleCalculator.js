function calculate(num1, num2, operator) {
    const multiply = (x, y) => x * y;
    const divide = (x, y) => x / y;
    const add = (x, y) => x + y;
    const subtract = (x, y) => x - y;

    switch (operator) {
        case "multiply":
            console.log(multiply(num1, num2));
            break;
        case "divide":
            console.log(divide(num1, num2));
            break;
        case "add":
            console.log(add(num1, num2));
            break;
        case "subtract":
            console.log(subtract(num1, num2));
            break;
        default:
            break;
    }
}

calculate(5, 5, "multiply");
calculate(40, 8, "divide");
calculate(12, 19, "add");
calculate(50, 13, "subtract");
