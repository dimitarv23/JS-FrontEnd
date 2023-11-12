function mineBitcoin(arr) {
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;

    let moneyEarned = 0;
    let boughtBitcoins = 0;
    let day = 0;
    let dayOfFirstBitcoin = 0;

    arr.forEach((goldAmount) => {
        day++;

        if (day % 3 == 0) {
            moneyEarned += 0.7 * goldAmount * goldPrice;
        } else {
            moneyEarned += goldAmount * goldPrice;
        }

        while (moneyEarned >= bitcoinPrice) {
            boughtBitcoins++;
            moneyEarned -= bitcoinPrice;

            if (boughtBitcoins === 1) {
                dayOfFirstBitcoin = day;
            }
        }
    });

    console.log(`Bought bitcoins: ${boughtBitcoins}`);

    if (dayOfFirstBitcoin) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }

    console.log(`Left money: ${moneyEarned.toFixed(2)} lv.`);
}

mineBitcoin([100, 200, 300]);
mineBitcoin([50, 100]);
mineBitcoin([3124.15, 504.212, 2511.124]);
