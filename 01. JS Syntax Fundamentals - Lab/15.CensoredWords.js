function censoreText(input, textToCensure) {
    let censuringChar = "*";

    let censored = input.replace(
        textToCensure,
        censuringChar.repeat(textToCensure.length)
    );

    console.log(censored);
}

censoreText("A small sentence with some words", "small");
censoreText("Find the hidden word", "hidden");
