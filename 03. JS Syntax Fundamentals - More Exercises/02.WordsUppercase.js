function convertToUppercase(text) {
    const wordsArr = text
        .toUpperCase()
        .split(/\W+/)
        .filter((word) => word !== "");

    console.log(wordsArr.join(", "));
}

convertToUppercase("Hi, how are you?");
convertToUppercase("hello");
