function countOccurrences(input, searchedText) {
    let counter = 0;

    let words = input.split(" ");

    words.forEach((element) => {
        if (element === searchedText) {
            counter++;
        }
    });

    console.log(counter);
}

countOccurrences("This is a word and it also is a sentence", "is");
countOccurrences(
    "softuni is great place for learning new programming languages",
    "softuni"
);
