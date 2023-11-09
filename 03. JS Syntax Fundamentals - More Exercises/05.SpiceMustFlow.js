function calculateTotalSpice(startingYield) {
    let currentYield = startingYield;
    let daysMined = 0;
    let spiceGathered = 0;

    while (currentYield >= 100) {
        spiceGathered += currentYield;
        currentYield -= 10;
        daysMined++;

        if (spiceGathered >= 26) {
            spiceGathered -= 26;
        }
    }

    if (spiceGathered >= 26) {
        spiceGathered -= 26;
    }

    console.log(daysMined);
    console.log(spiceGathered);
}

calculateTotalSpice(111);
calculateTotalSpice(450);
