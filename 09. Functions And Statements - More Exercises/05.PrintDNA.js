function printDNA(length) {
    let symbols = ["A", "T", "C", "G", "T", "T", "A", "G", "G", "G"];

    for (let i = 1; i <= length; i++) {
        const first = symbols.shift();
        const second = symbols.shift();

        if (i % 4 === 1) {
            console.log(`**${first}${second}**`);
        } else if (i % 4 === 2) {
            console.log(`*${first}--${second}*`);
        } else if (i % 4 === 3) {
            console.log(`${first}----${second}`);
        } else if (i % 4 === 0) {
            console.log(`*${first}--${second}*`);
        }

        symbols.push(first);
        symbols.push(second);
    }
}

printDNA(4);
printDNA(10);
