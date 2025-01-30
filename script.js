document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(taskText => addTaskToDOM(taskText));
    }

    // Save tasks to Local Storage
    function saveTasks() {
        const tasks = Array.from(taskList.children).map(taskItem => taskItem.firstChild.textContent);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Function to add a new task to the DOM
    function addTaskToDOM(taskText) {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Assign an onclick event to remove the task
        removeButton.addEventListener("click", function () {
            taskList.removeChild(taskItem);
            saveTasks(); // Update Local Storage
        });

        // Append remove button to task item
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);
    }

    // Function to handle adding a task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTaskToDOM(taskText);
            saveTasks(); // Save to Local Storage
            taskInput.value = "";
        } else {
            alert("Please enter a task");
        }
    }

    // Event listeners
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Load tasks when the page is loaded
    loadTasks();
});
