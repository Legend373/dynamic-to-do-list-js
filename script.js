document.addEventListener("DOMContentLoaded", function () {
    // Select necessary elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get input value and remove extra spaces

        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task"); // Alert the user to enter a task
            return; // Stop function execution
        }

        // Create a new <li> element for the task
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn"; // Add class for styling

        // Assign onclick event to remove the task when clicked
        removeButton.onclick = function () {
            taskList.removeChild(taskItem);
        };

        // Append remove button to task item
        taskItem.appendChild(removeButton);

        // Append task item to task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = "";
    }

    // Attach event listener to Add Task button
    addButton.addEventListener("click", addTask);

    // Attach event listener to input field to allow adding tasks by pressing Enter
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
