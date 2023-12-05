function extractOddElementsFromSentence(sentence) {
    const words = sentence.split(" ");
    const occurrences = [];

    words.forEach((word) => {
        word = word.toLowerCase();

        if (!occurrences.some((x) => x.word === word)) {
            occurrences.push({
                word: word,
                count: 0,
            });
        }

        occurrences.find((x) => x.word === word).count++;
    });

    const filtered = occurrences
        .filter((x) => x.count % 2 != 0)
        .map((x) => x.word)
        .join(" ");

    console.log(filtered);
}

extractOddElementsFromSentence("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
extractOddElementsFromSentence("Cake IS SWEET is Soft CAKE sweet Food");
