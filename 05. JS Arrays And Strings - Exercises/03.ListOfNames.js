function sortArray(arr) {
    const sorted = arr
        .slice()
        .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));

    for (let i = 0; i < sorted.length; i++) {
        console.log(`${i + 1}.${sorted[i]}`);
    }
}

sortArray(["John", "Bob", "Christina", "Ema"]);
