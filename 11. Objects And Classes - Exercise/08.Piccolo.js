function manageParkingLot(commands) {
    let parkedCars = [];

    commands.forEach((cmdArgs) => {
        const [cmd, regPlate] = cmdArgs.split(", ");

        if (cmd.toLowerCase() === "in") {
            if (!parkedCars.includes(regPlate)) {
                parkedCars.push(regPlate);
            }
        } else if (cmd.toLowerCase() === "out") {
            if (parkedCars.includes(regPlate)) {
                const index = parkedCars.indexOf(regPlate);
                parkedCars.splice(index, 1);
            }
        }
    });

    if (!parkedCars || parkedCars.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        parkedCars
            .sort((a, b) => a.localeCompare(b))
            .forEach((regPlate) => {
                console.log(regPlate);
            });
    }
}

manageParkingLot([
    "IN, CA2844AA",
    "IN, CA1234TA",
    "OUT, CA2844AA",
    "IN, CA9999TT",
    "IN, CA2866HI",
    "OUT, CA1234TA",
    "IN, CA2844AA",
    "OUT, CA2866HI",
    "IN, CA9876HH",
    "IN, CA2822UU",
    "IN, CB8585PM",
]);
