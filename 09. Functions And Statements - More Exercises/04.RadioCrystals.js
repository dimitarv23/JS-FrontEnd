function processCrystal(numbers) {
    const [desiredThickness, ...crystalOres] = numbers;

    crystalOres.forEach((crystalOre) => {
        let crystalToProcess = crystalOre;
        console.log(`Processing chunk ${crystalToProcess} microns`);

        crystalToProcess = cutCrystal(crystalToProcess);
        crystalToProcess = lapCrystal(crystalToProcess);
        crystalToProcess = grindCrystal(crystalToProcess);
        crystalToProcess = etchCrystal(crystalToProcess);
        crystalToProcess = xRayCrystal(crystalToProcess);

        console.log(`Finished crystal ${crystalToProcess} microns`);
    });

    function cutCrystal(crystalOre) {
        let cutsCount = 0;

        while (crystalOre / 4 >= desiredThickness) {
            crystalOre = crystalOre / 4;
            cutsCount++;
        }

        if (cutsCount > 0) {
            console.log(`Cut x${cutsCount}`);

            crystalOre = Math.floor(crystalOre);
            console.log("Transporting and washing");
        }

        return crystalOre;
    }

    function lapCrystal(crystalOre) {
        let lapsCount = 0;

        while (crystalOre * 0.8 >= desiredThickness) {
            crystalOre = crystalOre * 0.8;
            lapsCount++;
        }

        if (lapsCount > 0) {
            console.log(`Lap x${lapsCount}`);

            crystalOre = Math.floor(crystalOre);
            console.log("Transporting and washing");
        }

        return crystalOre;
    }

    function grindCrystal(crystalOre) {
        let grindsCount = 0;

        while (crystalOre - 20 >= desiredThickness) {
            crystalOre -= 20;
            grindsCount++;
        }

        if (grindsCount > 0) {
            console.log(`Grind x${grindsCount}`);

            crystalOre = Math.floor(crystalOre);
            console.log("Transporting and washing");
        }

        return crystalOre;
    }

    function etchCrystal(crystalOre) {
        let etchesCount = 0;

        while (crystalOre > desiredThickness) {
            crystalOre -= 2;
            etchesCount++;
        }

        if (etchesCount > 0) {
            console.log(`Etch x${etchesCount}`);

            crystalOre = Math.floor(crystalOre);
            console.log("Transporting and washing");
        }

        return crystalOre;
    }

    function xRayCrystal(crystalOre) {
        if (desiredThickness - crystalOre === 1) {
            crystalOre++;
            console.log(`X-ray x1`);
        }

        return crystalOre;
    }
}

processCrystal([1375, 50000]);
processCrystal([1000, 4000, 8100]);
