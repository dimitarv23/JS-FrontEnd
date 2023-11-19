function validatePoints(points) {
    printValidationResult(points[0], points[1], 0, 0);
    printValidationResult(points[2], points[3], 0, 0);
    printValidationResult(points[0], points[1], points[2], points[3]);

    function printValidationResult(x1, y1, x2, y2) {
        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

        console.log(
            `{${x1}, ${y1}} to {${x2}, ${y2}} is ${
                Number.isInteger(distance) ? "valid" : "invalid"
            }`
        );
    }
}

validatePoints([3, 0, 0, 4]);
validatePoints([2, 1, 1, 1]);
