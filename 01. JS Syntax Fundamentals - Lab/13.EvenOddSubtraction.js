function subractOddFromEven(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenSum += arr[i];
        } else {
            oddSum += arr[i];
        }
    }

    console.log(evenSum - oddSum);
}

subractOddFromEven([1, 2, 3, 4, 5, 6]);
subractOddFromEven([3, 5, 7, 9]);
subractOddFromEven([2, 4, 6, 8, 10]);