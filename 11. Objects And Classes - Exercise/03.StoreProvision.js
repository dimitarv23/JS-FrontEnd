function printStoreProvision(currentStock, orderedStock) {
    const storeProvision = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        const productName = currentStock[i];
        const productQuantity = currentStock[i + 1];

        storeProvision[productName] = Number(productQuantity);
    }

    for (let i = 0; i < orderedStock.length; i += 2) {
        const productName = orderedStock[i];
        const productQuantity = orderedStock[i + 1];

        if (!storeProvision[productName]) {
            storeProvision[productName] = 0;
        }

        storeProvision[productName] += Number(productQuantity);
    }

    for (const product in storeProvision) {
        console.log(`${product} -> ${storeProvision[product]}`);
    }
}

printStoreProvision(
    ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
    [
        "Flour",
        "44",
        "Oil",
        "12",
        "Pasta",
        "7",
        "Tomatoes",
        "70",
        "Bananas",
        "30",
    ]
);
