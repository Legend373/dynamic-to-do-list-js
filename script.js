document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskLIst = document.getElementById("task-list");
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText == "") {
            alert("please enter a task")
        }
        else {
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;
            const removeButton = document.createElement("button");
            removeButton.textContent = "remove";
            removeButton.className = "remove-btn";
            removeButton.onClick = function () {
                taskLIst.removeChild(taskItem);
                taskItem.append(removeButton);
                taskLIst.append(taskItem);
                taskInput.value = "";
            }
        }

    }
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
    addTask();


})