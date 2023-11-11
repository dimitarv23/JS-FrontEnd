function checkForAWord(searched, text) {
    const words = text.split(/[.,?!;:-\s]+/);
    let isContained = false;

    words.forEach((word) => {
        if (word.toLowerCase() === searched.toLowerCase()) {
            console.log(searched);
            isContained = true;
        }
    });

    if (!isContained) {
        console.log(`${searched} not found!`);
    }
}

checkForAWord("javascript", "JavaScript is the best programming language");
checkForAWord("python", "JavaScript is the best programming language");
checkForAWord("script", "JavaScript is the best programming language");
