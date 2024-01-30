function solve(input) {
    const ridersCount = parseInt(input[0]);
    let riders = [];

    for (let i = 1; i <= ridersCount; i++) {
        const riderInfo = input[i].split("|");
        const fuelCapacity = parseFloat(riderInfo[1]);

        riders.push({
            name: riderInfo[0],
            fuelCapacity: fuelCapacity <= 100 ? fuelCapacity : 100,
            position: parseInt(riderInfo[2]),
        });
    }

    for (let i = ridersCount + 1; i < input.length; i++) {
        if (input[i] === "Finish") {
            break;
        }

        const cmdArgs = input[i].split(" - ");

        switch (cmdArgs[0]) {
            case "StopForFuel":
                stopForFuel(
                    cmdArgs[1],
                    parseFloat(cmdArgs[2]),
                    parseInt(cmdArgs[3])
                );
                break;
            case "Overtaking":
                overtake(cmdArgs[1], cmdArgs[2]);
                break;
            case "EngineFail":
                engineFail(cmdArgs[1], parseInt(cmdArgs[2]));
                break;
        }
    }

    riders.forEach((rider) => {
        console.log(`${rider.name}`);
        console.log(`  Final position: ${rider.position}`);
    });

    function stopForFuel(riderName, minimumFuel, newPosition) {
        const rider = riders.find((x) => x.name === riderName);

        if (rider.fuelCapacity < minimumFuel) {
            rider.position = newPosition;
            console.log(
                `${riderName} stopped to refuel but lost his position, now he is ${newPosition}.`
            );

            return;
        }

        console.log(`${riderName} does not need to stop for fuel!`);
    }

    function overtake(rider1Name, rider2Name) {
        const rider1 = riders.find((x) => x.name === rider1Name);
        const rider2 = riders.find((x) => x.name === rider2Name);

        if (rider1.position < rider2.position) {
            const rider1Pos = rider1.position;
            rider1.position = rider2.position;
            rider2.position = rider1Pos;

            console.log(`${rider1Name} overtook ${rider2Name}!`);
        }
    }

    function engineFail(riderName, lapsLeft) {
        const index = riders.findIndex((x) => x.name === riderName);

        if (index != -1) {
            riders.splice(index, 1);
            console.log(
                `${riderName} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`
            );
        }
    }
}

// solve([
//     "3",
//     "Valentino Rossi|100|1",
//     "Marc Marquez|90|2",
//     "Jorge Lorenzo|80|3",
//     "StopForFuel - Valentino Rossi - 50 - 1",
//     "Overtaking - Marc Marquez - Jorge Lorenzo",
//     "EngineFail - Marc Marquez - 10",
//     "Finish",
// ]);

solve([
    "4",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|3",
    "Jorge Lorenzo|80|4",
    "Johann Zarco|80|2",
    "StopForFuel - Johann Zarco - 90 - 5",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish",
]);
