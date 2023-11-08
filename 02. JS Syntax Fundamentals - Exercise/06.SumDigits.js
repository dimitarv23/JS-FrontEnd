function calculateSumOfDigits(number) {
    let sumOfDigits = 0;

    while (number != 0) {
        sumOfDigits += number % 10;
        number = Math.floor(number / 10);
    }

    console.log(sumOfDigits);
}

calculateSumOfDigits(245678);
calculateSumOfDigits(97561);
calculateSumOfDigits(543);
