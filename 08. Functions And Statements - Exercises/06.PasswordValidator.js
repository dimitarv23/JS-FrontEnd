function isPasswordValid(password) {
    let isPasswordValid = true;

    if (!isLengthValid(password)) {
        isPasswordValid = false;
        console.log("Password must be between 6 and 10 characters");
    }

    if (!isAlphaNumeric(password)) {
        isPasswordValid = false;
        console.log("Password must consist only of letters and digits");
    }

    if (!hasTwoDigits(password)) {
        isPasswordValid = false;
        console.log("Password must have at least 2 digits");
    }

    if (isPasswordValid) {
        console.log("Password is valid");
    }

    function isLengthValid(text) {
        return text.length >= 6 && text.length <= 10;
    }

    function isAlphaNumeric(text) {
        const alphaNumericRegex = /^[a-zA-Z0-9]+$/;

        return alphaNumericRegex.test(text);
    }

    function hasTwoDigits(text) {
        const pattern = /[0-9]/;
        let digitsCount = 0;

        for (let i = 0; i < text.length; i++) {
            if (pattern.test(text[i])) {
                digitsCount++;

                if (digitsCount === 2) {
                    break;
                }
            }
        }

        return digitsCount >= 2;
    }
}

isPasswordValid("logIn");
isPasswordValid("MyPass123");
isPasswordValid("Pa$s$s");
