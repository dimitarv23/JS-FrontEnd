function printMatrix(num) {
    for (let row = 1; row <= num; row++) {
        let currRow = [];

        for (let col = 1; col <= num; col++) {
            currRow.push(num);
        }

        console.log(currRow.join(" "));
    }
}

printMatrix(3);
printMatrix(7);
printMatrix(2);
