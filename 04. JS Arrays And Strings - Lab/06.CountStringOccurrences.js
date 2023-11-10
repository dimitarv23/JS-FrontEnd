function countOccurrences(text, searched) {
    const words = text.split(" ");
    let occurrences = 0;

    words.forEach((word) => {
        if (word == searched) {
            occurrences++;
        }
    });

    console.log(occurrences);
}

countOccurrences("This is a word and it also is a sentence", "is");
countOccurrences(
    "softuni is great place for learning new programming languages",
    "softuni"
);
