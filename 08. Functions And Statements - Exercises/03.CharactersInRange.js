function getCharsInRange(startChar, endChar) {
    let result = [];

    let start = startChar.charCodeAt(0);
    let end = endChar.charCodeAt(0);

    if (start > end) {
        const startCopy = start;
        start = end;
        end = startCopy;
    }

    for (let i = start + 1; i < end; i++) {
        result.push(String.fromCharCode(i));
    }

    console.log(result.join(" "));
}

getCharsInRange("a", "d");
getCharsInRange("#", ":");
getCharsInRange("C", "#");
