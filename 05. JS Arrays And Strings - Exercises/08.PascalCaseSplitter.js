function splitByPascalCase(text) {
    const words = text.match(/[A-Z][a-z]*/g);

    console.log(words.join(", "));
}

splitByPascalCase("SplitMeIfYouCanHaHaYouCantOrYouCan");
splitByPascalCase("HoldTheDoor");
splitByPascalCase("ThisIsSoAnnoyingToDo");
