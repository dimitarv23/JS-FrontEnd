function calculateTotalPrice(product, quantity) {
    let productPrice;

    switch (product) {
        case "coffee":
            productPrice = 1.5;
            break;
        case "water":
            productPrice = 1.0;
            break;
        case "coke":
            productPrice = 1.4;
            break;
        case "snacks":
            productPrice = 2.0;
            break;
        default:
            break;
    }

    const totalPrice = productPrice * quantity;
    console.log(totalPrice.toFixed(2));
}

calculateTotalPrice("water", 5);
calculateTotalPrice("coffee", 2);
