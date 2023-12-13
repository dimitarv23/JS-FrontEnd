function sumTable() {
    const table = document.querySelector("table");
    const rows = Array.from(table.getElementsByTagName("td"));

    let counter = 1;
    let sum = 0;

    rows.forEach((row) => {
        if (counter % 2 == 0) {
            sum += Number(row.textContent);
        }

        counter++;
    });

    document.getElementById("sum").textContent = sum;
}
