function colorize() {
    const rows = Array.from(document.querySelectorAll("tr"));
    let counter = 1;

    rows.forEach((row) => {
        if (counter % 2 == 0) {
            row.style.backgroundColor = "Teal";
        }

        counter++;
    });
}
