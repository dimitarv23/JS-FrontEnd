window.addEventListener("load", solve);

function solve() {
    // Task 1
    const addBtn = document.getElementById("add-btn");
    if (addBtn) {
        addBtn.addEventListener("click", () => {
            let playerNameField = document.getElementById("player");
            let scoreField = document.getElementById("score");
            let roundField = document.getElementById("round");

            const playerName = playerNameField.value;
            const score = scoreField.value;
            const round = roundField.value;

            if (playerName && score && round) {
                const handleHtmlChanges = () => {
                    const namePara = document.createElement("p");
                    namePara.textContent = playerName;
                    const scorePara = document.createElement("p");
                    scorePara.textContent = `Score: ${score}`;
                    const roundPara = document.createElement("p");
                    roundPara.textContent = `Round: ${round}`;

                    const articleElement = document.createElement("article");
                    articleElement.appendChild(namePara);
                    articleElement.appendChild(scorePara);
                    articleElement.appendChild(roundPara);

                    const editBtn = document.createElement("button");
                    editBtn.className = "btn edit";
                    editBtn.textContent = "edit";

                    const okBtn = document.createElement("button");
                    okBtn.className = "btn ok";
                    okBtn.textContent = "ok";

                    const liElement = document.createElement("li");
                    liElement.appendChild(articleElement);
                    liElement.appendChild(editBtn);
                    liElement.appendChild(okBtn);
                    liElement.className = "dart-item";

                    document.getElementById("sure-list").appendChild(liElement);

                    addBtn.disabled = true;
                    playerNameField.value = "";
                    scoreField.value = "";
                    roundField.value = "";
                };

                handleHtmlChanges(playerName, score, round);
                handleEdit();
                handleOk();
            }
        });
    }

    // Task 4
    const clearBtn = document.querySelector(".btn.clear");
    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            location.reload();
        });
    }

    // Task 2
    function handleEdit() {
        const editBtn = document.querySelector(".btn.edit");
        if (editBtn) {
            editBtn.addEventListener("click", () => {
                const infoParas = Array.from(
                    document.querySelectorAll("#sure-list .dart-item article p")
                );

                document.getElementById("player").value =
                    infoParas[0].textContent;
                document.getElementById("score").value = Number(
                    Array.from(infoParas[1].textContent.split(":"))[1]
                );
                document.getElementById("round").value = Number(
                    Array.from(infoParas[2].textContent.split(":"))[1]
                );

                document.getElementById("sure-list").innerHTML = "";
                addBtn.disabled = false;
            });
        }
    }

    // Task 3
    function handleOk() {
        const okBtn = document.querySelector(".btn.ok");
        if (okBtn) {
            okBtn.addEventListener("click", () => {
                const scoreboard = document.getElementById("scoreboard-list");
                const htmlForScoreboard = document.querySelector(
                    "#sure-list .dart-item"
                );

                htmlForScoreboard.removeChild(
                    document.querySelector(".btn.edit")
                );
                htmlForScoreboard.removeChild(
                    document.querySelector(".btn.ok")
                );

                scoreboard.appendChild(htmlForScoreboard);
                document.getElementById("sure-list").innerHTML = "";

                addBtn.disabled = false;
            });
        }
    }
}
