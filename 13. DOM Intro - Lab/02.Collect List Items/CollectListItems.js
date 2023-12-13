function extractText() {
    const list = document.getElementById("items").children;

    document.getElementById("result").value = Array.from(list)
        .map((x) => x.textContent)
        .join("\n");
}
