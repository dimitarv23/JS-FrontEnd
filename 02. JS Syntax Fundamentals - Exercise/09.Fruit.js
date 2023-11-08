function calculateFruitPrice(fruit, quantity, pricePerKg) {
    const quantityInKg = quantity / 1000;
    const price = quantityInKg * pricePerKg;

    console.log(
        `I need $${price.toFixed(2)} to buy ${quantityInKg.toFixed(
            2
        )} kilograms ${fruit}.`
    );
}

calculateFruitPrice("orange", 2500, 1.8);
calculateFruitPrice("apple", 1563, 2.35);
