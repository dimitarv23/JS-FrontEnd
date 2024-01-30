window.addEventListener("load", solve);

function solve() {
    document.querySelector("#add-btn").addEventListener("click", addExpense);
    document
        .querySelector("#expenses .btn.delete")
        .addEventListener("click", deleteExpenses);

    function addExpense() {
        const expense = document.getElementById("expense");
        const amount = document.getElementById("amount");
        const date = document.getElementById("date");

        if (
            !expense.value ||
            !amount.value ||
            !date.value ||
            expense.value.trim() === "" ||
            amount.value.trim() === "" ||
            date.value.trim() === "" ||
            Number(amount.value) <= 0
        ) {
            return;
        }

        const expenseItem = document.createElement("li");
        expenseItem.className = "expense-item";
        const article = document.createElement("article");
        const buttonsDiv = document.createElement("div");
        buttonsDiv.className = "buttons";

        const expensePara = document.createElement("p");
        expensePara.textContent = `Type: ${expense.value}`;
        const amountPara = document.createElement("p");
        amountPara.textContent = `Amount: ${amount.value}$`;
        const datePara = document.createElement("p");
        datePara.textContent = `Date: ${date.value}`;
        article.appendChild(expensePara);
        article.appendChild(amountPara);
        article.appendChild(datePara);

        const editBtn = document.createElement("button");
        editBtn.className = "btn edit";
        editBtn.textContent = "edit";
        const okBtn = document.createElement("button");
        okBtn.className = "btn ok";
        okBtn.textContent = "ok";
        buttonsDiv.appendChild(editBtn);
        buttonsDiv.appendChild(okBtn);

        expenseItem.appendChild(article);
        expenseItem.appendChild(buttonsDiv);

        document.getElementById("preview-list").appendChild(expenseItem);
        document.getElementById("add-btn").disabled = true;

        expense.value = "";
        amount.value = "";
        date.value = "";

        expenseItem
            .querySelector(".buttons .edit")
            .addEventListener("click", editExpense);
        expenseItem
            .querySelector(".buttons .ok")
            .addEventListener("click", confirmExpense);
    }

    function editExpense() {
        const container = document.querySelector("#preview-list .expense-item");

        document.getElementById("expense").value = Array.from(
            container.querySelector("p:nth-child(1)").textContent.split(": ")
        )[1];
        document.getElementById("amount").value = Number(
            Array.from(
                container
                    .querySelector("p:nth-child(2)")
                    .textContent.split(": ")
            )[1].slice(0, -1)
        );
        document.getElementById("date").value = Array.from(
            container.querySelector("p:nth-child(3)").textContent.split(": ")
        )[1];

        document.getElementById("preview-list").removeChild(container);
        document.getElementById("add-btn").disabled = false;
    }

    function confirmExpense() {
        const container = document.querySelector("#preview-list .expense-item");
        document.getElementById("preview-list").removeChild(container);

        document.getElementById("expenses-list").appendChild(container);
        container.removeChild(container.querySelector(".buttons"));

        document.getElementById("add-btn").disabled = false;
    }

    function deleteExpenses() {
        if (document.querySelector("#expenses-list .expense-item")) {
            location.reload();
        }
    }
}
