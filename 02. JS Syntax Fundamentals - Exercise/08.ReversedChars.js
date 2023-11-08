function reverseAndPrintChars(...chars) {
    let reversed = chars.reverse();
    let result = reversed.join(" ");

    console.log(result);
}

reverseAndPrintChars("A", "B", "C");
reverseAndPrintChars("1", "L", "&");
