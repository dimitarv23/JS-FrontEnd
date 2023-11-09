function printValiditiesBetweenPoints(x1, y1, x2, y2) {
    for (let i = 1; i <= 3; i++) {
        let distance;
        let output;

        if (i === 1) {
            distance = Math.sqrt(Math.pow(x1 - 0, 2) + Math.pow(y1 - 0, 2));
            output = `{${x1}, ${y1}} to {0, 0} is `;
        } else if (i === 2) {
            distance = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2));
            output = `{${x2}, ${y2}} to {0, 0} is `;
        } else {
            distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
            output = `{${x1}, ${y1}} to {${x2}, ${y2}} is `;
        }

        let validity = "valid";

        if (distance % 1 != 0) {
            validity = "invalid";
        }

        console.log(output + validity);
    }
}

printValiditiesBetweenPoints(3, 0, 0, 4);
printValiditiesBetweenPoints(2, 1, 1, 1);
