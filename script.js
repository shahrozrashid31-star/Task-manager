let tasks = [];

function addTask() {
  const title = document.getElementById("taskInput").value.trim();
  const description = document.getElementById("taskDescription").value.trim();
  const date = document.getElementById("taskDate").value;

  if (title === "") {
    alert("Please enter a task title");
    return;
  }

  tasks.push({
    id: Date.now(),
    title: title,
    description: description,
    date: date,
    completed: false
  });

  document.getElementById("taskInput").value = "";
  document.getElementById("taskDescription").value = "";
  document.getElementById("taskDate").value = "";
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(function (task) {
    const card = document.createElement("div");
    card.className = "task-card";

    const h3 = document.createElement("h3");
    h3.textContent = task.title;
    const p = document.createElement("p");
    p.textContent = task.description;
    const d = document.createElement("small");
    d.textContent = task.date ? "Due: " + task.date : "";

    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(d);
    list.appendChild(card);
  });
}
