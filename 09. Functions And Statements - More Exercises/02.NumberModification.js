function modifyNumber(number) {
    let modifiedNumber = number.toString();
    let digitsAvg = getAverageOfDigits(Number(modifiedNumber));

    while (digitsAvg <= 5) {
        modifiedNumber += "9";
        digitsAvg = getAverageOfDigits(Number(modifiedNumber));
    }

    console.log(modifiedNumber);

    function getAverageOfDigits(number) {
        let sumOfDigits = 0;
        let countOfDigits = 0;

        while (number != 0) {
            const currDigit = number % 10;
            sumOfDigits += currDigit;
            countOfDigits++;
            number = Math.floor(number / 10);
        }

        return sumOfDigits / countOfDigits;
    }
}

modifyNumber(101);
modifyNumber(5835);
