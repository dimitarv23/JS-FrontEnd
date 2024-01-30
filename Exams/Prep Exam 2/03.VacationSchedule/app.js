document
    .querySelector("#load-vacations")
    .addEventListener("click", loadVacations);

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
});

document.querySelector("#add-vacation").addEventListener("click", addVacation);

document
    .querySelector("#edit-vacation")
    .addEventListener("click", editVacation);

async function loadVacations() {
    const response = await fetch("http://localhost:3030/jsonstore/tasks");
    const vacations = await response.json();
    let vacationsList = "";

    for (const vacationId in vacations) {
        vacationsList += `
            <div class="container">
                <h2>${vacations[vacationId].name}</h2>
                <h3>${vacations[vacationId].date}</h3>
                <h3>${vacations[vacationId].days}</h3>
                <button class="change-btn">Change</button>
                <button class="done-btn">Done</button>
            </div>
        `;
    }

    document.querySelector("#list").innerHTML = vacationsList;
    document.querySelector("#edit-vacation").disabled = true;

    addButtonEventListeners();
}

async function addVacation() {
    const nameField = document.querySelector("#name");
    const daysField = document.querySelector("#num-days");
    const dateFromField = document.querySelector("#from-date");

    const data = {
        name: nameField.value,
        days: daysField.value,
        date: dateFromField.value,
    };

    await fetch("http://localhost:3030/jsonstore/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    loadVacations();

    nameField.value = "";
    daysField.value = "";
    dateFromField.value = "";
}

function addButtonEventListeners() {
    const changeBtns = Array.from(document.querySelectorAll(".change-btn"));
    changeBtns.forEach((button) => {
        button.addEventListener("click", function () {
            const container = button.closest(".container");

            document.querySelector("#name").value =
                container.querySelector("h2").textContent;
            document.querySelector("#from-date").value =
                container.querySelector("h3:nth-child(2)").textContent;
            document.querySelector("#num-days").value = Number(
                container.querySelector("h3:nth-child(3)").textContent
            );

            document.querySelector("#add-vacation").disabled = true;
            document.querySelector("#edit-vacation").disabled = false;

            container.remove();
        });
    });

    const doneBtns = Array.from(document.querySelectorAll(".done-btn"));
    doneBtns.forEach((button) => {
        button.addEventListener("click", async function () {
            const container = button.closest(".container");

            const vacationId = await getVacationId({
                name: container.querySelector("h2").textContent,
                days: container.querySelector("h3:nth-child(3)").textContent,
                date: container.querySelector("h3:nth-child(2)").textContent,
            });

            if (vacationId) {
                await fetch(
                    `http://localhost:3030/jsonstore/tasks/${vacationId}`,
                    {
                        method: "DELETE",
                    }
                );

                await loadVacations();
            }
        });
    });
}

async function editVacation() {
    const nameField = document.querySelector("#name");
    const daysField = document.querySelector("#num-days");
    const dateFromField = document.querySelector("#from-date");

    const data = {
        name: nameField.value,
        days: daysField.value,
        date: dateFromField.value,
    };

    const vacationId = await getVacationId(data);

    if (vacationId) {
        data._id = vacationId;

        await fetch(`http://localhost:3030/jsonstore/tasks/${vacationId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        await loadVacations();

        nameField.value = "";
        daysField.value = "";
        dateFromField.value = "";
        document.querySelector("#edit-vacation").disabled = true;
        document.querySelector("#add-vacation").disabled = false;
    }
}

async function getVacationId(data) {
    const response = await fetch("http://localhost:3030/jsonstore/tasks/");
    const vacations = await response.json();
    let searchedVacation = Object.values(vacations).find(
        (x) => x.name === data.name
    );

    if (!searchedVacation) {
        searchedVacation = Object.values(vacations).find(
            (x) => x.date == data.date
        );
    }

    if (!searchedVacation) {
        searchedVacation = Object.values(vacations).find(
            (x) => x.days == data.days
        );
    }

    return searchedVacation._id;
}
