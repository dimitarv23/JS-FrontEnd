function printTownObjects(townsArr) {
    class Town {
        constructor(townName, latitude, longitude) {
            this.townName = townName;
            this.latitude = latitude;
            this.longitude = longitude;
        }

        getFullInfo = function () {
            return `{ town: '${
                this.townName
            }', latitude: '${this.latitude.toFixed(
                2
            )}', longitude: '${this.longitude.toFixed(2)}' }`;
        };
    }

    townsArr.forEach((townInfo) => {
        const [townName, latitude, longitude] = townInfo.split(" | ");

        const town = new Town(
            townName,
            new Number(latitude),
            new Number(longitude)
        );

        console.log(town.getFullInfo());
    });
}

printTownObjects([
    "Sofia | 42.696552 | 23.32601",
    "Beijing | 39.913818 | 116.363625",
]);
