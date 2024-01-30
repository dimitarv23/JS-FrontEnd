document.querySelector("#load-course").addEventListener("click", loadCourses);
// document
//     .querySelector("#main-container #form form")
//     .addEventListener("submit", (e) => e.preventDefault());
document.querySelector("#add-course").addEventListener("click", addCourse);
document.querySelector("#edit-course").addEventListener("click", editCourse);

async function loadCourses() {
    const response = await fetch("http://localhost:3030/jsonstore/tasks/");
    const courses = await response.json();
    let innerHtml = "";

    for (const course in courses) {
        innerHtml += `
            <div class="container">
                <h2>${courses[course].title}</h2>
                <h3>${courses[course].teacher}</h3>
                <h3>${courses[course].type}</h3>
                <h4>${courses[course].description}</h4>
                <button class="edit-btn">Edit Course</button>
                <button class="finish-btn">Finish Course</button>
            </div>
        `;
    }

    document.querySelector("#list").innerHTML = innerHtml;
    document.querySelector("#edit-course").disabled = true;

    addBtnEventListeners();
}

async function addCourse() {
    const title = document.querySelector("#course-name");
    const type = document.querySelector("#course-type");
    const description = document.querySelector("#description");
    const teacher = document.querySelector("#teacher-name");

    const data = {
        title: title.value,
        type: type.value,
        description: description.value,
        teacher: teacher.value,
    };

    if (!data.title || !data.type || !data.description || !data.teacher) {
        return;
    }

    await fetch("http://localhost:3030/jsonstore/tasks/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    await loadCourses();

    title.value = "";
    type.value = "";
    description.value = "";
    teacher.value = "";
}

function addBtnEventListeners() {
    const editBtns = Array.from(
        document.querySelectorAll("#list .container .edit-btn")
    );
    editBtns.forEach((button) => {
        button.addEventListener("click", function () {
            const container = button.closest(".container");

            document.querySelector("#course-name").value =
                container.querySelector("h2").textContent;
            document.querySelector("#teacher-name").value =
                container.querySelector("h3:nth-child(2)").textContent;
            document.querySelector("#course-type").value =
                container.querySelector("h3:nth-child(3)").textContent;
            document.querySelector("#description").value =
                container.querySelector("h4").textContent;

            document.querySelector("#add-course").disabled = true;
            document.querySelector("#edit-course").disabled = false;

            container.remove();
        });
    });

    const finishBtns = Array.from(
        document.querySelectorAll("#list .container .finish-btn")
    );
    finishBtns.forEach((button) => {
        button.addEventListener("click", async function () {
            const container = button.closest(".container");

            const data = {
                title: container.querySelector("h2").textContent,
                type: container.querySelector("h3:nth-child(3)").textContent,
                description: container.querySelector("h4").textContent,
                teacher: container.querySelector("h3:nth-child(2)").textContent,
            };

            const courseId = await getCourseId(data);

            if (courseId) {
                await fetch(
                    `http://localhost:3030/jsonstore/tasks/${courseId}`,
                    {
                        method: "DELETE",
                    }
                );

                await loadCourses();
            }
        });
    });
}

async function editCourse() {
    const title = document.querySelector("#course-name");
    const type = document.querySelector("#course-type");
    const description = document.querySelector("#description");
    const teacher = document.querySelector("#teacher-name");

    const data = {
        title: title.value,
        type: type.value,
        description: description.value,
        teacher: teacher.value,
    };

    if (!data.title || !data.type || !data.description || !data.teacher) {
        return;
    }

    const courseId = await getCourseId(data);
    data._id = courseId;

    if (courseId) {
        await fetch(`http://localhost:3030/jsonstore/tasks/${courseId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        await loadCourses();

        title.value = "";
        type.value = "";
        description.value = "";
        teacher.value = "";

        document.querySelector("#add-course").disabled = false;
        document.querySelector("#edit-course").disabled = true;
    }
}

async function getCourseId(data) {
    const response = await fetch("http://localhost:3030/jsonstore/tasks/");
    const courses = await response.json();

    let searchedCourse = Object.values(courses).find(
        (x) =>
            x.title === data.title &&
            x.description === data.description &&
            x.type === data.type &&
            x.teacher === data.teacher
    );

    if (!searchedCourse) {
        searchedCourse = Object.values(courses).find(
            (x) => x.title === data.title && x.description === data.description
        );
    }

    if (!searchedCourse) {
        searchedCourse = Object.values(courses).find(
            (x) => x.title === data.title && x.type === data.type
        );
    }

    if (!searchedCourse) {
        searchedCourse = Object.values(courses).find(
            (x) => x.title === data.title && x.teacher === data.teacher
        );
    }

    if (!searchedCourse) {
        searchedCourse = Object.values(courses).find(
            (x) => x.title === data.title
        );
    }

    if (!searchedCourse) {
        searchedCourse = Object.values(courses).find(
            (x) => x.description === data.description
        );
    }

    if (!searchedCourse) {
        searchedCourse = Object.values(courses).find(
            (x) => x.teacher === data.teacher
        );
    }

    if (!searchedCourse) {
        searchedCourse = Object.values(courses).find(
            (x) => x.type === data.type
        );
    }

    return searchedCourse._id;
}
