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

    // delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button")


    deleteButton.addEventListener("click", function () {
        taskList.removeChild(taskItem);
    });



    const markAsComplte = document.createElement("button")    // Add task to the list
    markAsComplte.classList.add("mark-as-complete")
    markAsComplte.textContent = "Mark As Complete"
    markAsComplte.addEventListener("click", function () {
        taskItem.style.textDecoration = "line-through"
    })
    taskItem.appendChild(deleteButton);
    taskItem.appendChild(markAsComplte)


    taskList.appendChild(taskItem);



    // Clear the input field
    taskInput.value = "";
}

addTaskButton.addEventListener("click", addTask);
