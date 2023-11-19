function washCar(commands) {
    let cleanedPercentage = 0;

    commands.forEach((cmd) => {
        if (cmd === "soap") {
            cleanedPercentage += 10;
        } else if (cmd === "water") {
            cleanedPercentage *= 1.2;
        } else if (cmd === "vacuum cleaner") {
            cleanedPercentage *= 1.25;
        } else if (cmd === "mud") {
            cleanedPercentage *= 0.9;
        }
    });

    console.log(`The car is ${cleanedPercentage.toFixed(2)}% clean.`);
}

washCar(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
washCar(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
