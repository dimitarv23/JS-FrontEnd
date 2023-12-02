function savePhoneNumbers(peopleArr) {
    const phoneBook = new Object();

    peopleArr.forEach((personInfo) => {
        const [name, phone] = personInfo.split(" ");

        phoneBook[name] = phone;
    });

    for (const person in phoneBook) {
        console.log(`${person} -> ${phoneBook[person]}`);
    }
}

savePhoneNumbers([
    "Tim 0834212554",
    "Peter 0877547887",
    "Bill 0896543112",
    "Tim 0834212544",
]);
