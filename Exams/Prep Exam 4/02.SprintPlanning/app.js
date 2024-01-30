window.addEventListener("load", solve);

function solve() {
    document.querySelector("#delete-task-btn").disabled = true;

    document
        .querySelector("#create-task-btn")
        .addEventListener("click", createTask);

    document
        .querySelector("#delete-task-btn")
        .addEventListener("click", deleteTask);

    function createTask() {
        const title = document.querySelector("#title");
        const description = document.querySelector("#description");
        const label = document.querySelector("#label");
        const points = document.querySelector("#points");
        const assignee = document.querySelector("#assignee");

        if (
            title.value &&
            description.value &&
            label.value &&
            points.value &&
            assignee.value
        ) {
            const taskIdx =
                Array.from(document.querySelectorAll("#tasks-section article"))
                    .length + 1;

            let taskLabelHtml = "";

            if (label.value === "Feature") {
                taskLabelHtml =
                    '<div class="task-card-label feature">Feature &#8865</div>';
            } else if (label.value === "Low Priority Bug") {
                taskLabelHtml =
                    '<div class="task-card-label low-priority">Low Priority Bug &#9737</div>';
            } else if (label.value === "High Priority Bug") {
                taskLabelHtml =
                    '<div class="task-card-label high-priority">High Priority Bug &#9888</div>';
            }

            document.querySelector("#tasks-section").innerHTML += `
                <article id="task-${taskIdx}" class="task-card">
                    ${taskLabelHtml}
                    <h3 class="task-card-title">${title.value}</h3>
                    <p class="task-card-description">${description.value}</p>
                    <div class="task-card-points">Estimated at ${points.value} pts</div>
                    <div class="task-card-assignee">Assigned to: ${assignee.value}</div>
                    <div class="task-card-actions">
                        <button>Delete</button>
                    </div>
                </article>
            `;

            const pointsPara = document.querySelector("#total-sprint-points");
            const currPointsEstimation = Number(
                pointsPara.textContent.match(/\d+/)[0]
            );
            const totalPoints = currPointsEstimation + Number(points.value);
            pointsPara.textContent = `Total Points ${totalPoints}pts`;

            document.querySelector("#task-id").value = "";
            title.value = "";
            description.value = "";
            label.value = "";
            points.value = "";
            assignee.value = "";

            addDeleteBtnEventListeners();
        }
    }

    function addDeleteBtnEventListeners() {
        const deleteBtns = Array.from(
            document.querySelectorAll(
                "#tasks-section article .task-card-actions button"
            )
        );

        deleteBtns.forEach((button) => {
            button.addEventListener("click", function () {
                const container = button.closest("#tasks-section article");

                const title = document.querySelector("#title");
                const description = document.querySelector("#description");
                const label = document.querySelector("#label");
                const points = document.querySelector("#points");
                const assignee = document.querySelector("#assignee");
                const taskId = document.querySelector("#task-id");

                title.value =
                    container.querySelector(".task-card-title").textContent;
                description.value = container.querySelector(
                    ".task-card-description"
                ).textContent;
                label.value = container
                    .querySelector(".task-card-label")
                    .textContent.split(" ")
                    .slice(0, -1)
                    .join(" ");
                points.value = Number(
                    container
                        .querySelector(".task-card-points")
                        .textContent.split(" ")[2]
                );
                assignee.value = container
                    .querySelector(".task-card-assignee")
                    .textContent.split(": ")[1];
                taskId.value = container.id;

                document.querySelector("#delete-task-btn").disabled = false;
                document.querySelector("#create-task-btn").disabled = true;

                title.disabled = true;
                description.disabled = true;
                label.disabled = true;
                points.disabled = true;
                assignee.disabled = true;
                taskId.disabled = true;
            });
        });
    }

    function deleteTask() {
        const title = document.querySelector("#title");
        const description = document.querySelector("#description");
        const label = document.querySelector("#label");
        const points = document.querySelector("#points");
        const assignee = document.querySelector("#assignee");

        const taskId = document.querySelector("#task-id");
        document.querySelector(`#tasks-section #${taskId.value}`).remove();

        const pointsPara = document.querySelector("#total-sprint-points");
        const currPointsEstimation = Number(
            pointsPara.textContent.match(/\d+/)[0]
        );
        const totalPoints = currPointsEstimation - Number(points.value);
        pointsPara.textContent = `Total Points ${totalPoints}pts`;

        taskId.value = "";
        title.value = "";
        description.value = "";
        label.value = "";
        points.value = "";
        assignee.value = "";

        taskId.disabled = false;
        title.disabled = false;
        description.disabled = false;
        label.disabled = false;
        points.disabled = false;
        assignee.disabled = false;

        document.querySelector("#create-task-btn").disabled = false;
        document.querySelector("#delete-task-btn").disabled = true;
    }
}
