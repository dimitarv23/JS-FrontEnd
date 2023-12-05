function countOccurences(inputArr) {
    const [keywordsString, ...words] = inputArr;

    const keywords = [];

    keywordsString.split(" ").forEach((keyword) => {
        keywords.push({
            word: keyword,
            occurrences: 0,
        });
    });

    words.forEach((word) => {
        if (keywords.some((x) => x.word === word)) {
            keywords.find((x) => x.word === word).occurrences++;
        }
    });

    keywords
        .sort((a, b) => b.occurrences - a.occurrences)
        .forEach((kw) => {
            console.log(`${kw.word} - ${kw.occurrences}`);
        });
}

countOccurences([
    "this sentence",
    "In",
    "this",
    "sentence",
    "you",
    "have",
    "to",
    "count",
    "the",
    "occurrences",
    "of",
    "the",
    "words",
    "this",
    "and",
    "sentence",
    "because",
    "this",
    "is",
    "your",
    "task",
]);

countOccurences([
    "is the",
    "first",
    "sentence",
    "Here",
    "is",
    "another",
    "the",
    "And",
    "finally",
    "the",
    "the",
    "sentence",
]);
