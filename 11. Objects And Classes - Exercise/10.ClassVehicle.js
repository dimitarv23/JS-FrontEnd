class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.fuel = fuel;

        this.parts = {
            engine: parts.engine,
            power: parts.power,
            quality: parts.engine * parts.power,
        };
    }

    drive = function (fuelLoss) {
        this.fuel -= fuelLoss;
    };
}

let parts = { engine: 6, power: 235 };
let vehicle = new Vehicle("BMW", "530D E60", parts, 70);
vehicle.drive(10);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);
