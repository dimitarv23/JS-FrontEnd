function printDictionary(inputArr) {
    const dictionary = {};

    inputArr.forEach((jsonString) => {
        const obj = JSON.parse(jsonString);
        const objKey = Object.keys(obj)[0];

        dictionary[objKey] = obj[objKey];
    });

    const sortedDictionary = Object.fromEntries(
        Object.entries(dictionary).sort(([keyA], [keyB]) =>
            keyA.localeCompare(keyB)
        )
    );

    for (const element in sortedDictionary) {
        console.log(
            `Term: ${element} => Definition: ${sortedDictionary[element]}`
        );
    }
}

printDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
