document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get input value & trim spaces

        // Check if taskInput is not empty
        if (taskText !== "") {
            // Create a new <li> element and set its text
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;

            // Create a remove button
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.className = "remove-btn"; // Assign class for styling

            // Assign an onclick event to remove the li element from taskList
            removeButton.addEventListener("click", function () {
                taskList.removeChild(taskItem);
            });

            // Append remove button to task item
            taskItem.appendChild(removeButton);

            // Append task item to task list
            taskList.appendChild(taskItem);

            // Clear the task input field
            taskInput.value = "";
        } else {
            // Alert user if input is empty
            alert("Please enter a task");
        }
    }

    // Add event listener to Add Task button
    addButton.addEventListener("click", addTask);

    // Add event listener for Enter key press
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
