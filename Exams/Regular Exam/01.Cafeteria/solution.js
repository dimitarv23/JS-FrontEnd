function solve(input) {
    const n = Number(input[0]);
    baristas = [];

    for (let i = 1; i <= n; i++) {
        const baristaInfo = input[i].split(" ");

        baristas.push({
            name: baristaInfo[0],
            shift: baristaInfo[1],
            coffeeTypes: baristaInfo[2].split(","),
        });
    }

    for (let i = n + 1; i < input.length; i++) {
        if (input[i] === "Closed") {
            break;
        }

        const cmdArgs = input[i].split(" / ");

        switch (cmdArgs[0]) {
            case "Prepare":
                prepare(cmdArgs[1], cmdArgs[2], cmdArgs[3]);
                break;
            case "Change Shift":
                changeShift(cmdArgs[1], cmdArgs[2]);
                break;
            case "Learn":
                learn(cmdArgs[1], cmdArgs[2]);
                break;
            default:
                break;
        }
    }

    baristas.forEach((barista) => {
        console.log(
            `Barista: ${barista.name}, Shift: ${
                barista.shift
            }, Drinks: ${barista.coffeeTypes.join(", ")}`
        );
    });

    function prepare(baristaName, shift, coffeeType) {
        const barista = baristas.find((b) => b.name === baristaName);

        if (
            !barista ||
            barista.shift !== shift ||
            !barista.coffeeTypes.includes(coffeeType)
        ) {
            console.log(
                `${baristaName} is not available to prepare a ${coffeeType}.`
            );

            return;
        }

        console.log(`${baristaName} has prepared a ${coffeeType} for you!`);
    }

    function changeShift(baristaName, newShift) {
        const barista = baristas.find((b) => b.name === baristaName);

        if (!barista) {
            return;
        }

        barista.shift = newShift;
        console.log(`${baristaName} has updated his shift to: ${newShift}`);
    }

    function learn(baristaName, newCoffee) {
        const barista = baristas.find((b) => b.name === baristaName);

        if (!barista) {
            return;
        }

        if (barista.coffeeTypes.includes(newCoffee)) {
            console.log(`${baristaName} knows how to make ${newCoffee}.`);
            return;
        }

        barista.coffeeTypes.push(newCoffee);
        console.log(
            `${baristaName} has learned a new coffee type: ${newCoffee}.`
        );
    }
}

// solve([
//     "3",
//     "Alice day Espresso,Cappuccino",
//     "Bob night Latte,Mocha",
//     "Carol day Americano,Mocha",
//     "Prepare / Alice / day / Espresso",
//     "Change Shift / Bob / night",
//     "Learn / Carol / Latte",
//     "Learn / Bob / Latte",
//     "Prepare / Bob / night / Latte",
//     "Closed",
// ]);

solve([
    "4",
    "Alice day Espresso,Cappuccino",
    "Bob night Latte,Mocha",
    "Carol day Americano,Mocha",
    "David night Espresso",
    "Prepare / Alice / day / Espresso",
    "Change Shift / Bob / day",
    "Learn / Carol / Latte",
    "Prepare / Bob / night / Latte",
    "Learn / David / Cappuccino",
    "Prepare / Carol / day / Cappuccino",
    "Change Shift / Alice / night",
    "Learn / Bob / Mocha",
    "Prepare / David / night / Espresso",
    "Closed",
]);
