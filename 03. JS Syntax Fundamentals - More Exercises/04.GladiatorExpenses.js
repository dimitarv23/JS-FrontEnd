function calculateTotalExpenses(...input) {
    const lostFightsCount = input[0];
    const helmetPrice = input[1];
    const swordPrice = input[2];
    const shieldPrice = input[3];
    const armorPrice = input[4];

    let totalExpenses = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 == 0) {
            totalExpenses += helmetPrice;
        }

        if (i % 3 == 0) {
            totalExpenses += swordPrice;
        }

        if (i % 6 == 0) {
            totalExpenses += shieldPrice;
        }

        if (i % 12 == 0) {
            totalExpenses += armorPrice;
        }
    }

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

calculateTotalExpenses(7, 2, 3, 4, 5);
calculateTotalExpenses(23, 12.5, 21.5, 40, 200);
