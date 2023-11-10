function censoreText(text, wordsToCensure) {
    const censore = "*".repeat(wordsToCensure.length);
    let censoredText = text.replace(wordsToCensure, censore);

    while (censoredText.includes(wordsToCensure)) {
        censoredText = censoredText.replace(wordsToCensure, censore);
    }

    console.log(censoredText);
}

censoreText("A small sentence with some words", "small");
censoreText("Find the hidden word", "hidden");
