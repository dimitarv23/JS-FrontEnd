document.getElementById("load-history").addEventListener("click", loadHistory);
document.getElementById("add-weather").addEventListener("click", addWeather);
document.getElementById("edit-weather").addEventListener("click", editWeather);

let selectedWeatherId = "";

async function loadHistory() {
    const response = await fetch("http://localhost:3030/jsonstore/tasks/");
    const data = await response.json();

    let historyHtml = "";

    for (const weatherInfo in data) {
        historyHtml += `
            <div class="container">
                <h2>${data[weatherInfo].location}</h2>
                <h3>${data[weatherInfo].date}</h3>
                <h3 id="celsius">${data[weatherInfo].temperature}</h3>
                <div id="buttons-container">
                    <button class="change-btn">Change</button>
                    <button class="delete-btn">Delete</button>
                </div>
            </div>
        `;
    }

    document.querySelector("#history #list").innerHTML = historyHtml;
    addWeatherBtnEventListeners();
}

async function addWeather() {
    const locationField = document.getElementById("location");
    const temperatureField = document.getElementById("temperature");
    const dateField = document.getElementById("date");

    const requestData = {
        location: locationField.value,
        temperature: temperatureField.value,
        date: dateField.value,
    };

    await fetch("http://localhost:3030/jsonstore/tasks/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
    });

    locationField.value = "";
    temperatureField.value = "";
    dateField.value = "";

    loadHistory();
}

async function editWeather() {
    const locationField = document.getElementById("location");
    const temperatureField = document.getElementById("temperature");
    const dateField = document.getElementById("date");
    //const weatherId = document.querySelector("#weatherId");

    const requestData = {
        location: locationField.value,
        temperature: temperatureField.value,
        date: dateField.value,
    };

    await fetch(`http://localhost:3030/jsonstore/tasks/${selectedWeatherId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
    });

    locationField.value = "";
    temperatureField.value = "";
    dateField.value = "";

    document.getElementById("edit-weather").disabled = true;
    document.getElementById("add-weather").disabled = false;
    //document.querySelector("#form form").removeChild(weatherId);

    loadHistory();
}

function addWeatherBtnEventListeners() {
    const changeButtons = document.querySelectorAll(".change-btn");
    if (changeButtons && changeButtons.length > 0) {
        changeButtons.forEach((button) => {
            button.addEventListener("click", async function () {
                const container = button.closest(".container");

                document.getElementById("location").value =
                    container.querySelector("h2").textContent;
                document.getElementById("temperature").value =
                    container.querySelector("#celsius").textContent;
                document.getElementById("date").value =
                    container.querySelector("h3:nth-child(2)").textContent;

                document.getElementById("edit-weather").disabled = false;
                document.getElementById("add-weather").disabled = true;

                selectedWeatherId = await getWeatherIdByLocation(location);
            });
        });
    }

    const deleteButtons = document.querySelectorAll(".delete-btn");
    if (deleteButtons && deleteButtons.length > 0) {
        deleteButtons.forEach((button) => {
            button.addEventListener("click", async function () {
                const container = button.closest(".container");
                const weatherId = await getWeatherIdByLocation(
                    container.querySelector("h2").textContent
                );

                await fetch(
                    `http://localhost:3030/jsonstore/tasks/${weatherId}`,
                    {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                    }
                );

                loadHistory();
            });
        });
    }
}

async function getWeatherIdByLocation(location) {
    const response = await fetch("http://localhost:3030/jsonstore/tasks/");
    const data = await response.json();

    return Object.values(data).find((x) => x.location === location)._id;
}
