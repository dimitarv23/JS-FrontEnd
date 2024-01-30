document.getElementById("load-meals").addEventListener("click", loadMeals);
document.getElementById("add-meal").addEventListener("click", addMeal);
document.getElementById("edit-meal").addEventListener("click", editMeal);

async function loadMeals() {
    const response = await fetch("http://localhost:3030/jsonstore/tasks/", {
        method: "GET",
    });

    const meals = await response.json();
    let innerHtml = "";

    for (const meal in meals) {
        innerHtml += `
            <div class="meal">
                <h2>${meals[meal].food}</h2>
                <h3>${meals[meal].time}</h3>
                <h3>${meals[meal].calories}</h3>
                <div id="meal-buttons">
                    <button class="change-meal">Change</button>
                    <button class="delete-meal">Delete</button>
                </div>
            </div>
        `;
    }

    document.getElementById("list").innerHTML = innerHtml;
    document.getElementById("edit-meal").disabled = true;

    addBtnEventListeners();
}

async function addMeal() {
    const food = document.getElementById("food");
    const time = document.getElementById("time");
    const calories = document.getElementById("calories");

    if (food.value && time.value && calories.value) {
        const data = {
            food: food.value,
            time: time.value,
            calories: calories.value,
        };

        await fetch("http://localhost:3030/jsonstore/tasks/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        food.value = "";
        time.value = "";
        calories.value = "";

        await loadMeals();
    }
}

function addBtnEventListeners() {
    const changeBtns = Array.from(
        document.querySelectorAll("#meal-buttons .change-meal")
    );
    changeBtns.forEach((button) => {
        button.addEventListener("click", function () {
            const container = button.closest("div.meal");

            document.getElementById("food").value =
                container.querySelector("h2").textContent;
            document.getElementById("time").value =
                container.querySelector("h3:nth-child(2)").textContent;
            document.getElementById("calories").value =
                container.querySelector("h3:nth-child(3)").textContent;

            container.remove();

            document.getElementById("edit-meal").disabled = false;
            document.getElementById("add-meal").disabled = true;
        });
    });

    const deleteBtns = Array.from(
        document.querySelectorAll("#meal-buttons .delete-meal")
    );
    deleteBtns.forEach((button) => {
        button.addEventListener("click", async function () {
            const container = button.closest("div.meal");

            const mealId = await getMealId({
                food: container.querySelector("h2").textContent,
                time: container.querySelector("h3:nth-child(2)").textContent,
                calories:
                    container.querySelector("h3:nth-child(3)").textContent,
            });

            if (mealId) {
                await fetch(`http://localhost:3030/jsonstore/tasks/${mealId}`, {
                    method: "DELETE",
                });

                await loadMeals();
            }
        });
    });
}

async function editMeal() {
    const food = document.getElementById("food");
    const time = document.getElementById("time");
    const calories = document.getElementById("calories");

    if (food.value && time.value && calories.value) {
        const data = {
            food: food.value,
            time: time.value,
            calories: calories.value,
        };

        const mealId = await getMealId(data);

        if (mealId) {
            data._id = mealId;

            await fetch(`http://localhost:3030/jsonstore/tasks/${mealId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            await loadMeals();

            food.value = "";
            time.value = "";
            calories.value = "";
            document.getElementById("edit-meal").disabled = true;
            document.getElementById("add-meal").disabled = false;
        }
    }
}

async function getMealId(data) {
    const response = await fetch("http://localhost:3030/jsonstore/tasks/", {
        method: "GET",
    });

    const meals = await response.json();

    let searchedMeal = Object.values(meals).find(
        (x) => x.food === data.food && x.calories === data.calories
    );

    if (!searchedMeal) {
        searchedMeal = Object.values(meals).find((x) => x.food === data.food);
    }

    if (!searchedMeal) {
        searchedMeal = Object.values(meals).find((x) => x.time === data.time);
    }

    if (!searchedMeal) {
        searchedMeal = Object.values(meals).find(
            (x) => x.calories === data.calories
        );
    }

    return searchedMeal._id;
}
