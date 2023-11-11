function findSpecialWords(text) {
    const words = text.split(" ");

    words.forEach((word) => {
        const regex = /^[a-zA-Z]+$/;

        if (word[0] === "#" && regex.test(word.slice(1))) {
            console.log(word.slice(1));
        }
    });
}

findSpecialWords(
    "Nowadays everyone uses # to tag a #special word in #socialMedia"
);
findSpecialWords(
    "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
