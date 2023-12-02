function printAddressBook(addressesArr) {
    const addressBook = [];

    addressesArr.forEach((addressInfo) => {
        const [name, address] = addressInfo.split(":");

        if (isExisting(addressBook, name) === false) {
            addressBook.push({
                name: name,
                address: address,
            });
        } else {
            const repeating = addressBook.find((x) => x.name === name);
            repeating.address = address;
        }
    });

    addressBook.sort(compareNames).forEach((address) => {
        console.log(`${address.name} -> ${address.address}`);
    });

    function isExisting(arr, element) {
        let isExisting = false;

        arr.forEach((el) => {
            if (el.name === element) {
                isExisting = true;
            }
        });

        return isExisting;
    }

    function compareNames(a, b) {
        return a.name.localeCompare(b.name);
    }
}

printAddressBook([
    "Tim:Doe Crossing",
    "Bill:Nelson Place",
    "Peter:Carlyle Ave",
    "Bill:Ornery Rd",
]);
