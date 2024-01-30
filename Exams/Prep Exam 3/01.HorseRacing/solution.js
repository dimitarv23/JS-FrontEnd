function solve(input) {
    const horses = input[0].split("|");

    for (let i = 1; i < input.length; i++) {
        if (input[i] === "Finish") {
            break;
        }

        const cmdArgs = input[i].split(" ");

        switch (cmdArgs[0]) {
            case "Retake":
                retake(cmdArgs[1], cmdArgs[2]);
                break;
            case "Trouble":
                trouble(cmdArgs[1]);
                break;
            case "Rage":
                rage(cmdArgs[1]);
                break;
            case "Miracle":
                miracle();
                break;
        }
    }

    console.log(horses.join("->"));
    console.log(`The winner is: ${horses[horses.length - 1]}`);

    function retake(overtakingHorse, overtakenHorse) {
        overtakingHorseIndex = horses.findIndex((x) => x === overtakingHorse);
        overtakenHorseIndex = horses.findIndex((x) => x === overtakenHorse);

        if (overtakingHorseIndex >= overtakenHorseIndex) {
            return;
        }

        const temp = horses[overtakingHorseIndex];
        horses[overtakingHorseIndex] = horses[overtakenHorseIndex];
        horses[overtakenHorseIndex] = temp;

        console.log(`${overtakingHorse} retakes ${overtakenHorse}.`);
    }

    function trouble(horseName) {
        const horseIndex = horses.findIndex((x) => x === horseName);

        if (horseIndex <= 0) {
            return;
        }

        const temp = horses[horseIndex];
        horses[horseIndex] = horses[horseIndex - 1];
        horses[horseIndex - 1] = temp;

        console.log(`Trouble for ${horseName} - drops one position.`);
    }

    function rage(horseName) {
        const horseIndex = horses.findIndex((x) => x === horseName);
        const position = horses.length - horseIndex;

        if (position === 2) {
            const temp = horses[horseIndex];
            horses[horseIndex] = horses[horseIndex + 1];
            horses[horseIndex + 1] = temp;
        } else if (position >= 3) {
            const deletedHorse = horses.splice(horseIndex, 1)[0];
            horses.splice(horseIndex + 2, 0, deletedHorse);
        }

        console.log(`${horseName} rages 2 positions ahead.`);
    }

    function miracle() {
        if (horses.length === 1) {
            return;
        }

        const lastHorse = horses.splice(0, 1)[0];
        horses.push(lastHorse);

        console.log(`What a miracle - ${lastHorse} becomes first.`);
    }
}

solve([
    "Bella|Alexia|Sugar",
    "Retake Alexia Sugar",
    "Rage Bella",
    "Trouble Bella",
    "Finish",
]);

// solve([
//     "Onyx|Domino|Sugar|Fiona",
//     "Trouble Onyx",
//     "Retake Onyx Sugar",
//     "Rage Domino",
//     "Miracle",
//     "Finish",
// ]);

// solve([
//     "Fancy|Lilly",
//     "Retake Lilly Fancy",
//     "Trouble Lilly",
//     "Trouble Lilly",
//     "Finish",
//     "Rage Lilly",
// ]);
