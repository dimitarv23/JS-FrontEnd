function isNumberPerfect(number) {
    let isPerfect = true;

    if (number <= 0) {
        isPerfect = false;
    }

    let sumDivisors = 0;

    for (let i = 1; i <= Math.floor(number / 2); i++) {
        if (number % i == 0) {
            sumDivisors += i;
        }
    }

    if (sumDivisors != number) {
        isPerfect = false;
    }

    if (isPerfect) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

isNumberPerfect(6);
isNumberPerfect(28);
isNumberPerfect(1236498);
