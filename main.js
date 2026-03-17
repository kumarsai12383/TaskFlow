let toggleBtn = document.querySelector(".toggle-btn");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
let task = document.getElementById("task");
let totalTasks = document.getElementById("total-tasks");
task.classList.add("task-input-placeholder");
let addBtn = document.getElementById("addTask");
let taskList = document.getElementById("tasklist");
taskList.classList.add("task-list-style");
let popup = document.getElementById("popup");
let closePopupBtn = document.getElementById("closePopup");
let completedTasks = document.getElementById("completedlist");
let heading = document.getElementById("heading");
heading.style.textAlign = "center";
heading.style.color = "green";
addBtn.addEventListener("click", () => {
  if (task.value.trim() === "") {
    popup.style.display = "block";
    if (popup.style.display === "block") {
      closePopupBtn.addEventListener("click", () => {
        popup.style.display = "none";
      });
    }
  } else {
    document.getElementById("incompleted-items-heading").style.display =
      "block";
    let li = document.createElement("li");
    li.classList.add("listed-item");
    let taskText = document.createElement("span");
    taskText.textContent = task.value;

    let deleteBtn = document.createElement("button");
    let completeBtn = document.createElement("button");

    completeBtn.classList.add("completed-btn");
    deleteBtn.classList.add("delete-btn");
    completeBtn.textContent = "Complete";
    completeBtn.style.margin = "10px";
    deleteBtn.textContent = "Delete";
    deleteBtn.style.margin = "10px";
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(li);
    });
    completeBtn.addEventListener("click", () => {
      let completedList = document.createElement("li");
      let completedlistcontainer = document.getElementById(
        "completed-items-container",
      );
      completedlistcontainer.style.display = "block";
      let completedItemsList = document.getElementById("completed-items-list");
      completedItemsList.style.display = "block";
      completedList.classList.add("completed-list");
      completedList.textContent = taskText.textContent;
      completedList.classList.add("completed-task-item");
      completedTasks.appendChild(completedList);
      taskList.removeChild(li);
    });
    li.textContent = taskText.textContent;

    li.appendChild(deleteBtn);
    li.appendChild(completeBtn);

    taskList.insertBefore(li, taskList.firstChild);
    li.classList.add("task-item");
    task.value = "";
  }
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && task.value.trim() === "") {
    popup.style.display = "block";
    if (popup.style.display === "block") {
      closePopupBtn.addEventListener("click", () => {
        popup.style.display = "none";
      });
    }
  } else if (e.key === "Enter") {
    document.getElementById("incompleted-items-heading").style.display =
      "block";
    let li = document.createElement("li");
    li.classList.add("listed-item");
    let taskText = document.createElement("span");
    taskText.textContent = task.value;

    let deleteBtn = document.createElement("button");
    let completeBtn = document.createElement("button");

    completeBtn.classList.add("completed-btn");
    deleteBtn.classList.add("delete-btn");
    completeBtn.textContent = "Complete";
    completeBtn.style.margin = "10px";
    deleteBtn.textContent = "Delete";
    deleteBtn.style.margin = "10px";
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(li);
    });
    completeBtn.addEventListener("click", () => {
      let completedList = document.createElement("li");
      let completedlistcontainer = document.getElementById(
        "completed-items-container",
      );
      completedlistcontainer.style.display = "block";
      let completedItemsList = document.getElementById("completed-items-list");
      completedItemsList.style.display = "block";
      completedList.classList.add("completed-list");
      completedList.textContent = taskText.textContent;
      completedList.classList.add("completed-task-item");
      completedTasks.appendChild(completedList);
      taskList.removeChild(li);
    });
    li.textContent = taskText.textContent;

    li.appendChild(deleteBtn);
    li.appendChild(completeBtn);

    taskList.insertBefore(li, taskList.firstChild);
    li.classList.add("task-item");
    task.value = "";
  }
});

setInterval(() => {
  totalTasks.textContent = `Total Tasks: ${taskList.children.length}/${completedTasks.children.length}`;
}, 100);
