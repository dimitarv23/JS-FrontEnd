function printJsonObject(jsonText) {
    const obj = JSON.parse(jsonText);

    for (const item in obj) {
        console.log(`${item}: ${obj[item]}`);
    }
}

printJsonObject('{"name": "George", "age": 40, "town": "Sofia"}');
printJsonObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
