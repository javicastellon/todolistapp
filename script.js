function addTask() {
    let taskInput = document.getElementById("new-task");
    let tasksList = document.getElementById("tasks");

    if (taskInput.value === '') {
        alert("Please enter a task!");
        return;
    }

    let newTask = document.createElement("li");
    newTask.textContent = taskInput.value;

    let deleteButton = document.createElement("button");
    deleteButton.className = 'delete-button';
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        tasksList.removeChild(newTask);
    };

    newTask.appendChild(deleteButton);
    tasksList.appendChild(newTask);

    taskInput.value = "";
}