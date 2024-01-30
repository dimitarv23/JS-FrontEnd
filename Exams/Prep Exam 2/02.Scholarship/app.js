window.addEventListener("load", solve);

function solve() {
    document.querySelector("#next-btn").addEventListener("click", next);

    function next() {
        const student = document.querySelector("#student");
        const university = document.querySelector("#university");
        const score = document.querySelector("#score");

        if (student.value && university.value && score.value) {
            const previewList = document.querySelector("#preview-list");

            previewList.innerHTML = `
                <li class="application">
                    <article>
                        <h4>${student.value}</h4>
                        <p>University: ${university.value}</p>
                        <p>Score: ${score.value}</p>
                    </article>
                    <button class="action-btn edit">edit</button>
                    <button class="action-btn apply">apply</button>
                </li>
            `;

            document.querySelector("#next-btn").disabled = true;
            student.value = "";
            university.value = "";
            score.value = "";

            document
                .querySelector(".action-btn.edit")
                .addEventListener("click", edit);
            document
                .querySelector(".action-btn.apply")
                .addEventListener("click", apply);
        }
    }

    function edit() {
        const studentInfoContainer = document.querySelector(
            "#preview-list .application"
        );
        const studentName =
            studentInfoContainer.querySelector("h4").textContent;
        const university =
            studentInfoContainer.querySelector("p:nth-child(2)").textContent;
        const score =
            studentInfoContainer.querySelector("p:nth-child(3)").textContent;

        document.querySelector("#student").value = studentName;
        document.querySelector("#university").value = university.split(": ")[1];
        document.querySelector("#score").value = Number(score.split(": ")[1]);
        document.querySelector("#next-btn").disabled = false;

        document
            .querySelector("#preview-list")
            .removeChild(studentInfoContainer);
    }

    function apply() {
        const previewList = document.querySelector("#preview-list");
        const studentInfoContainer = previewList.querySelector(".application");

        studentInfoContainer.removeChild(
            studentInfoContainer.querySelector(".action-btn.edit")
        );
        studentInfoContainer.removeChild(
            studentInfoContainer.querySelector(".action-btn.apply")
        );

        document.querySelector("#candidates-list").innerHTML +=
            previewList.innerHTML;

        previewList.removeChild(studentInfoContainer);
        document.querySelector("#next-btn").disabled = false;
    }
}
