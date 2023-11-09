function calculate(num1, operator, num2) {
    let result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "/") {
        if (num2 == 0) {
            result = 0;
        } else {
            result = num1 / num2;
        }
    } else if (operator === "*") {
        result = num1 * num2;
    }

    console.log(result.toFixed(2));
}

calculate(5, "+", 10);
calculate(25.5, "-", 3);
calculate(0, "/", 0);
