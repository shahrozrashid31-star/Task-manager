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
  const searchBox = document.getElementById("taskSearch");
  const query = searchBox ? searchBox.value.trim().toLowerCase() : "";
  list.innerHTML = "";

  const visibleTasks = tasks.filter(function (task) {
    return task.title.toLowerCase().includes(query);
  });

  visibleTasks.forEach(function (task) {
    const card = document.createElement("div");
    card.className = "task-card" + (task.completed ? " completed" : "");

    const h3 = document.createElement("h3");
    h3.textContent = task.title;
    const p = document.createElement("p");
    p.textContent = task.description;
    const d = document.createElement("small");
    d.textContent = task.date ? "Due: " + task.date : "";

    const doneBtn = document.createElement("button");
    doneBtn.textContent = task.completed ? "Undo" : "Complete";
    doneBtn.onclick = function () {
      toggleTask(task.id);
    };

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = function () {
      deleteTask(task.id);
    };

    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(d);
    card.appendChild(doneBtn);
    card.appendChild(delBtn);
    list.appendChild(card);
  });
}

function toggleTask(id) {
  tasks = tasks.map(function (t) {
    if (t.id === id) t.completed = !t.completed;
    return t;
  });
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(function (t) {
    return t.id !== id;
  });
  renderTasks();
}
