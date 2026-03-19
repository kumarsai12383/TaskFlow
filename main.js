let toggleBtn = document.querySelector(".toggle-btn"); // Select the toggle button element
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
let task = document.getElementById("task");// Select the task input element
let totalTasks = document.getElementById("total-tasks");// Select the total tasks element
task.classList.add("task-input-placeholder");// Add a class to the task input element for styling
let addBtn = document.getElementById("addTask");// Select the add task button element
let taskList = document.getElementById("tasklist"); // Select the task list element
taskList.classList.add("task-list-style");  // Add a class to the task list element for styling
let popup = document.getElementById("popup"); // Select the popup element for error messages
let closePopupBtn = document.getElementById("closePopup");    // Select the close button for the popup
let completedTasks = document.getElementById("completedlist");        // Select the completed tasks list element
let heading = document.getElementById("heading"); // Select the heading element
heading.style.textAlign = "center";
heading.style.color = "green";

  // Function to show an error message if the task input is empty
function showError() {
  if (task.value.trim() === "") {
    popup.style.display = "block";
    if (popup.style.display === "block") {
      closePopupBtn.addEventListener("click", () => {
        popup.style.display = "none";
      });
    }
  }
}

  // Function to create a new task item when the add button is clicked
function createTaskItemByAddBtn() {
  document.getElementById("incompleted-items-heading").style.display = "block";
  let li = document.createElement("li");
  li.classList.add("listed-item");
  let addBtntaskText = document.createElement("span");
  addBtntaskText.textContent = task.value;
  
  li.appendChild(addBtntaskText);
  let deleteBtn = document.createElement("button"); // Create a delete button element
  let completeBtn = document.createElement("button"); // Create a complete button element

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
    let completedList = document.createElement("li"); // Create a new list item element for the completed task
    let completedlistcontainer = document.getElementById(
      "completed-items-container",
    );
    completedlistcontainer.style.display = "block";
    let completedItemsList = document.getElementById("completed-items-list");
    completedItemsList.style.display = "block";
    completedList.classList.add("completed-list");
    completedList.textContent = addBtntaskText.textContent;
    completedList.classList.add("completed-task-item");
    completedTasks.appendChild(completedList);
    taskList.removeChild(li);
  });

  
  li.appendChild(deleteBtn);
  li.appendChild(completeBtn);

  taskList.insertBefore(li, taskList.firstChild);
  li.classList.add("task-item");
  task.value = "";
}
// Function to create a new task item when the Enter key is pressed
function createTaskItemByEnterKey() {
   document.getElementById("incompleted-items-heading").style.display =
      "block";
    let li = document.createElement("li");
    li.classList.add("listed-item");
    let taskText = document.createElement("span");
    taskText.textContent = task.value;
    li.appendChild(taskText);

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

    
    li.appendChild(deleteBtn);
    li.appendChild(completeBtn);

    taskList.insertBefore(li, taskList.firstChild);
    li.classList.add("task-item");
    task.value = "";
  }
// Event listener for the add button to create a new task item
addBtn.addEventListener("click", () => {
  if (task.value.trim() === "") {
    showError();
  } else {
    createTaskItemByAddBtn();
  }
});


  // Event listener for the Enter key to create a new task item
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && task.value.trim() === "") {
    showError();
  } else if (e.key === "Enter") {
    createTaskItemByEnterKey();
  }
});
// Function to update the total tasks count every 100 milliseconds
setInterval(() => {
  totalTasks.textContent = `Total Tasks: ${taskList.children.length}/${completedTasks.children.length}`;
}, 100);
