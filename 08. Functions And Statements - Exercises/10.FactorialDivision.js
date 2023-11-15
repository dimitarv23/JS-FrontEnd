function factorialDivision(num1, num2) {
    const firstFactorial = calculateFactorial(num1);
    const secondFactorial = calculateFactorial(num2);
    const result = divide(firstFactorial, secondFactorial);

    console.log(result.toFixed(2));

    function divide(x1, x2) {
        return x1 / x2;
    }

    function calculateFactorial(num) {
        let factorial = 1;

        for (let i = num; i >= 2; i--) {
            factorial *= i;
        }

        return factorial;
    }
}

factorialDivision(5, 2);
factorialDivision(6, 2);
