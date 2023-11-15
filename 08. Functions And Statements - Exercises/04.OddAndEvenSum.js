function sumEvenAndOddDigits(number) {
    let evenSum = 0;
    let oddSum = 0;

    while (number != 0) {
        currDigit = number % 10;
        number = Math.floor(number / 10);

        if (currDigit % 2 == 0) {
            evenSum += currDigit;
        } else {
            oddSum += currDigit;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

sumEvenAndOddDigits(1000435);
sumEvenAndOddDigits(3495892137259234);
