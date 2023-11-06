function printCircleArea(radius) {
    if (typeof radius == 'number') {
        let circleArea = Math.PI * radius * radius;
        console.log(circleArea.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`);
    }
}

printCircleArea(5);
printCircleArea('name');