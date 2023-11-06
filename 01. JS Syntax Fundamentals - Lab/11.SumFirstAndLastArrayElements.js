function printSumOfFirstAndLastArrayElements(array) {
    const result = array[0] + array[array.length - 1];
    console.log(result);
}

printSumOfFirstAndLastArrayElements([20, 30, 40]);
printSumOfFirstAndLastArrayElements([10, 17, 22, 33]);
printSumOfFirstAndLastArrayElements([11, 58, 69]);