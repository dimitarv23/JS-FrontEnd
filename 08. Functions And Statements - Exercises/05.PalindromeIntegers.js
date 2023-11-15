function checkIfPalindromes(numbers) {
    numbers.forEach((num) => {
        console.log(isNumberPalindrome(num));
    });

    function isNumberPalindrome(number) {
        const digits = convertNumberIntoDigits(number);
        const middleIndex = Math.floor(number / 2);
        const lastIndex = digits.length - 1;

        for (let i = 0; i < middleIndex; i++) {
            const digitLeft = digits[i];
            const digitRight = digits[lastIndex - i];

            if (digitLeft != digitRight) {
                return false;
            }
        }

        return true;
    }

    function convertNumberIntoDigits(number) {
        let digits = [];

        while (number != 0) {
            digits.push(number % 10);
            number = Math.floor(number / 10);
        }

        return digits;
    }
}

checkIfPalindromes([123, 323, 421, 121]);
checkIfPalindromes([32, 2, 232, 1010]);
