function isNumberWithSameDigits(number) {
    let areDigitsSame = true;
    let digit = number % 10;
    let digitsSum = 0;

    while (number != 0) {
        let currDigit = number % 10;
        digitsSum += currDigit;

        if (currDigit != digit) {
            areDigitsSame = false;
        }

        number = Math.floor(number / 10);
    }

    console.log(areDigitsSame);
    console.log(digitsSum);
}

isNumberWithSameDigits(2222222);
isNumberWithSameDigits(1234);
