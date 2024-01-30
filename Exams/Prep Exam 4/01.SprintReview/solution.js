function solve(input) {
    const n = Number(input[0]);
    const sprintBoard = [];

    for (let i = 1; i <= n; i++) {
        const args = input[i].split(":");

        sprintBoard.push({
            assignee: args[0],
            taskId: args[1],
            title: args[2],
            status: args[3],
            estimatedPoints: Number(args[4]),
        });
    }

    for (let i = n + 1; i < input.length; i++) {
        const cmdArgs = input[i].split(":");

        switch (cmdArgs[0]) {
            case "Add New":
                addNewTask(
                    cmdArgs[1],
                    cmdArgs[2],
                    cmdArgs[3],
                    cmdArgs[4],
                    Number(cmdArgs[5])
                );

                break;
            case "Change Status":
                changeStatus(cmdArgs[1], cmdArgs[2], cmdArgs[3]);
                break;
            case "Remove Task":
                removeTask(cmdArgs[1], Number(cmdArgs[2]));
                break;
            default:
                break;
        }
    }

    // sprintBoard.forEach((x) => {
    //     console.log(x);
    // });

    printResults();

    function addNewTask(assignee, taskId, title, status, estimatedPoints) {
        if (!sprintBoard.some((x) => x.assignee === assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
            return;
        }

        sprintBoard.push({
            assignee: assignee,
            taskId: taskId,
            title: title,
            status: status,
            estimatedPoints: Number(estimatedPoints),
        });
    }

    function changeStatus(assignee, taskId, newStatus) {
        if (!sprintBoard.some((x) => x.assignee === assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
            return;
        }

        const task = sprintBoard.find((x) => x.taskId === taskId);

        if (!task || task.assignee !== assignee) {
            console.log(
                `Task with ID ${taskId} does not exist for ${assignee}!`
            );
            return;
        }

        task.status = newStatus;
    }

    function removeTask(assignee, index) {
        if (!sprintBoard.some((x) => x.assignee === assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
            return;
        }

        const assigneeTasks = sprintBoard.filter(
            (x) => x.assignee === assignee
        );

        if (index < 0 || index >= assigneeTasks.length) {
            console.log("Index is out of range!");
            return;
        }

        const taskId = assigneeTasks[index].taskId;
        const indexToRemove = sprintBoard.findIndex((x) => x.taskId === taskId);

        sprintBoard.splice(indexToRemove, 1);
    }

    function printResults() {
        const todoPoints = sprintBoard
            .filter((x) => x.status === "ToDo")
            .reduce((accumulator, curr) => {
                return accumulator + curr.estimatedPoints;
            }, 0);

        const inProgressPoints = sprintBoard
            .filter((x) => x.status === "In Progress")
            .reduce((accumulator, curr) => {
                return accumulator + curr.estimatedPoints;
            }, 0);

        const codeReviewPoints = sprintBoard
            .filter((x) => x.status === "Code Review")
            .reduce((accumulator, curr) => {
                return accumulator + curr.estimatedPoints;
            }, 0);

        const donePoints = sprintBoard
            .filter((x) => x.status === "Done")
            .reduce((accumulator, curr) => {
                return accumulator + curr.estimatedPoints;
            }, 0);

        console.log(`ToDo: ${todoPoints}pts`);
        console.log(`In Progress: ${inProgressPoints}pts`);
        console.log(`Code Review: ${codeReviewPoints}pts`);
        console.log(`Done Points: ${donePoints}pts`);

        if (donePoints >= todoPoints + inProgressPoints + codeReviewPoints) {
            console.log("Sprint was successful!");
        } else {
            console.log("Sprint was unsuccessful...");
        }
    }
}

// solve([
//     "5",
//     "Kiril:BOP-1209:Fix Minor Bug:ToDo:3",
//     "Mariya:BOP-1210:Fix Major Bug:In Progress:3",
//     "Peter:BOP-1211:POC:Code Review:5",
//     "Georgi:BOP-1212:Investigation Task:Done:2",
//     "Mariya:BOP-1213:New Account Page:In Progress:13",
//     "Add New:Kiril:BOP-1217:Add Info Page:In Progress:5",
//     "Change Status:Peter:BOP-1290:ToDo",
//     "Remove Task:Mariya:1",
//     "Remove Task:Joro:1",
// ]);

solve([
    "4",
    "Kiril:BOP-1213:Fix Typo:Done:1",
    "Peter:BOP-1214:New Products Page:In Progress:2",
    "Mariya:BOP-1215:Setup Routing:ToDo:8",
    "Georgi:BOP-1216:Add Business Card:Code Review:3",
    "Add New:Sam:BOP-1237:Testing Home Page:Done:3",
    "Change Status:Georgi:BOP-1216:Done",
    "Change Status:Will:BOP-1212:In Progress",
    "Remove Task:Georgi:3",
    "Change Status:Mariya:BOP-1215:Done",
]);
