function combineChars(...chars) {
    let result = "";

    chars.forEach((element) => {
        result += element;
    });

    console.log(result);
}

combineChars("a", "b", "c");
combineChars("%", "2", "o");
combineChars("1", "5", "p");
