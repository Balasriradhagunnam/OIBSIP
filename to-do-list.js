function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="complete" onclick="completeTask(this)">✔</button> <button class="delete" onclick="deleteTask(this)">✖</button>`;
    
    document.getElementById("pendingTasks").appendChild(li);
    taskInput.value = "";
}

function completeTask(button) {
    let li = button.parentElement;
    button.remove();
    document.getElementById("completedTasks").appendChild(li);
}

function deleteTask(button) {
    let li = button.parentElement;
    li.remove();
}
