function getSubstring(text, startIndex, endIndex) {
    const substring = text.substring(startIndex, startIndex + endIndex);

    console.log(substring);
}

getSubstring("ASentence", 1, 8);
getSubstring("SkipWord", 4, 7);
