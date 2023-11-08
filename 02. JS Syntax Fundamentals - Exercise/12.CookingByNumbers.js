function cookWithNumbers(...input) {
    let number = parseInt(input[0]);
    const commands = input.slice(1);

    commands.forEach((cmd) => {
        if (cmd === "chop") {
            number = number / 2;
        } else if (cmd === "dice") {
            number = Math.sqrt(number);
        } else if (cmd === "spice") {
            number++;
        } else if (cmd === "bake") {
            number *= 3;
        } else if (cmd === "fillet") {
            number *= 0.8;
        }

        console.log(number);
    });
}

cookWithNumbers("32", "chop", "chop", "chop", "chop", "chop");
cookWithNumbers("9", "dice", "spice", "chop", "bake", "fillet");
