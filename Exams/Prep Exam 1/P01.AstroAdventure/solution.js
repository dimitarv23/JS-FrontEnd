function solve(inputArr) {
    const numberOfAstronauts = Number(inputArr[0]);
    let astronauts = [];

    for (let i = 1; i <= numberOfAstronauts; i++) {
        const [name, oxygenLevel, reserves] = inputArr[i].split(" ");

        astronauts.push({
            name: name,
            oxygenLevel: Number(oxygenLevel),
            energyReserves: Number(reserves),
        });
    }

    for (let i = numberOfAstronauts + 1; i < inputArr.length; i++) {
        if (inputArr[i] === "End") {
            break;
        }

        const commands = {
            explore: explore,
            refuel: refuel,
            breathe: breathe,
        };

        const cmdArgs = inputArr[i].split(" - ");
        commands[cmdArgs[0].toLowerCase()](cmdArgs[1], Number(cmdArgs[2]));
    }

    astronauts.forEach((astronaut) => {
        console.log(
            `Astronaut: ${astronaut.name}, Oxygen: ${astronaut.oxygenLevel}, Energy: ${astronaut.energyReserves}`
        );
    });

    function explore(astronautName, energyNeeded) {
        const astronaut = astronauts.find((x) => x.name === astronautName);

        if (!astronaut) {
            return;
        }

        if (astronaut.energyReserves < energyNeeded) {
            console.log(
                `${astronautName} does not have enough energy to explore!`
            );

            return;
        }

        astronaut.energyReserves -= energyNeeded;
        console.log(
            `${astronautName} has successfully explored a new area and now has ${astronaut.energyReserves} energy!`
        );
    }

    function refuel(astronautName, amount) {
        const astronaut = astronauts.find((x) => x.name === astronautName);

        if (!astronaut) {
            return;
        }

        const initialReserves = astronaut.energyReserves;
        astronaut.energyReserves += amount;

        if (astronaut.energyReserves > 200) {
            astronaut.energyReserves = 200;
        }

        const totalRefueled = astronaut.energyReserves - initialReserves;
        console.log(
            `${astronautName} refueled their energy by ${totalRefueled}!`
        );
    }

    function breathe(astronautName, amount) {
        const astronaut = astronauts.find((x) => x.name === astronautName);

        if (!astronaut) {
            return;
        }

        const initialBreath = astronaut.oxygenLevel;
        astronaut.oxygenLevel += amount;

        if (astronaut.oxygenLevel > 100) {
            astronaut.oxygenLevel = 100;
        }

        const totalBreathed = astronaut.oxygenLevel - initialBreath;
        console.log(
            `${astronautName} took a breath and recovered ${totalBreathed} oxygen!`
        );
    }
}

solve([
    "3",
    "John 50 120",
    "Kate 80 180",
    "Rob 70 150",
    "Explore - John - 50",
    "Refuel - Kate - 30",
    "Breathe - Rob - 20",
    "End",
]);
