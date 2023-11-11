function revealWords(words, text) {
    const wordsArray = words.split(", ");

    wordsArray.forEach((word) => {
        const censure = "*".repeat(word.length);

        text = text.replace(censure, word);
    });

    console.log(text);
}

revealWords(
    "great",
    "softuni is ***** place for learning new programming languages"
);
revealWords(
    "great, learning",
    "softuni is ***** place for ******** new programming languages"
);
