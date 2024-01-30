window.addEventListener("load", solve);

function solve() {
    document.querySelector("#publish-btn").addEventListener("click", publish);

    function publish() {
        const title = document.querySelector("#task-title");
        const category = document.querySelector("#task-category");
        const content = document.querySelector("#task-content");

        if (title.value && category.value && content.value) {
            document.querySelector("#review-list").innerHTML = `
                <li class="rpost">
                    <article>
                        <h4>${title.value}</h4>
                        <p>Category: ${category.value}</p>
                        <p>Content: ${content.value}</p>
                    </article>
                    <button class="action-btn edit">Edit</button>
                    <button class="action-btn post">Post</button>
                </li>
            `;

            title.value = "";
            category.value = "";
            content.value = "";

            document
                .querySelector(".rpost .action-btn.edit")
                .addEventListener("click", edit);

            document
                .querySelector(".rpost .action-btn.post")
                .addEventListener("click", post);
        }
    }

    function edit() {
        const container = document.querySelector("#review-list .rpost article");

        document.querySelector("#task-title").value =
            container.querySelector("h4").textContent;
        document.querySelector("#task-category").value = container
            .querySelector("p:nth-child(2)")
            .textContent.split(": ")[1];
        document.querySelector("#task-content").value = container
            .querySelector("p:nth-child(3)")
            .textContent.split(": ")[1];

        document.querySelector("#review-list .rpost").remove();
    }

    function post() {
        const reviewList = document.querySelector("#review-list .rpost");

        reviewList.removeChild(
            document.querySelector("#review-list .rpost button.edit")
        );
        reviewList.removeChild(
            document.querySelector("#review-list .rpost button.post")
        );

        document.querySelector("#published-list").innerHTML =
            document.querySelector("#review-list").innerHTML;

        reviewList.remove();
    }
}
