function checkSign(num1, num2, num3) {
    let negativeNums = 0;

    num1 < 0 && negativeNums++;
    num2 < 0 && negativeNums++;
    num3 < 0 && negativeNums++;

    if (negativeNums % 2 == 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}

checkSign(5, 12, -15);
checkSign(-6, -12, 14);
checkSign(-1, -2, -3);
checkSign(-5, 1, 1);
