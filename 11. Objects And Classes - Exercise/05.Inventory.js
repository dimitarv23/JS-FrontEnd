function printHeroes(heroesArr) {
    const heroes = [];

    heroesArr.forEach((heroData) => {
        const [heroName, heroLevel, heroItems] = heroData.split(" / ");

        heroes.push({
            name: heroName,
            level: Number(heroLevel),
            items: heroItems,
        });
    });

    heroes
        .sort((a, b) => a.level - b.level)
        .forEach((hero) => {
            console.log(`Hero: ${hero.name}`);
            console.log(`level => ${hero.level}`);
            console.log(`items => ${hero.items}`);
        });
}

printHeroes([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
]);
