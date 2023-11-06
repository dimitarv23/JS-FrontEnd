function calculate (num1, num2, operator) {
    let result;

    if (operator == '+') {
        result = num1 + num2;
    } else if (operator == '-') {
        result = num1 - num2;
    } else if (operator == '*') {
        result = num1 * num2;
    } else if (operator == '/') {
        result = num1 / num2;
    } else if (operator == '%') {
        result = num1 % num2;
    } else if (operator == '**') {
        result = num1 ** num2;
    }

    if (result)
    {
        console.log(result);
    } else {
        console.log('Error!');
    }
}

calculate(5, 6, '+');
calculate(3, 5.5, '*');