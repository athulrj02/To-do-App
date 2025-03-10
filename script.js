// Ensure the script runs after the page loads
document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); //get input value

        if (taskText === "") {
            alert("Please enter a task!"); // Prevent empty tasks
            return;
        }
        // Create a new list item
        const taskItem = document.createElement("li"); 
        taskItem.textContent = taskText;

        // Add task to the list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = "";
    }

    addTaskButton.addEventListener("click", addTask);
});
