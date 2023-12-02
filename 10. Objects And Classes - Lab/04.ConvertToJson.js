function printObjectJson(firstName, lastName, hairColor) {
    const person = {
        name: firstName,
        lastName,
        hairColor,
    };

    const json = JSON.stringify(person);
    console.log(json);
}

printObjectJson("George", "Jones", "Brown");
printObjectJson("Peter", "Smith", "Blond");
