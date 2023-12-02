function printObject(obj) {
    for (const item in obj) {
        console.log(`${item} -> ${obj[item]}`);
    }
}

printObject({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000",
});
