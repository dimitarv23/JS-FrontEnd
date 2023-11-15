function addAndSubtract(num1, num2, num3) {
    const add = (x1, x2) => x1 + x2;
    const subtract = (x1, x2) => x1 - x2;

    console.log(subtract(add(num1, num2), num3));
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);
