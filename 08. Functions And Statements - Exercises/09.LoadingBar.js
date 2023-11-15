function displayLoadingBar(percentage) {
    const loadingBar =
        "[" +
        "%".repeat(Math.floor(percentage / 10)) +
        ".".repeat(Math.ceil((100 - percentage) / 10)) +
        "]";

    if (percentage === 100) {
        console.log("100% Complete!");
        console.log(loadingBar);
    } else {
        console.log(`${percentage}% ${loadingBar}`);
        console.log("Still loading...");
    }
}

displayLoadingBar(30);
displayLoadingBar(50);
displayLoadingBar(100);
