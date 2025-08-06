const API_URL = 'http://localhost:4000/api/tasks';

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

async function fetchTasks() {
    const res = await fetch(API_URL);
    const tasks = await res.json();
    taskList.innerHTML = '';
    tasks.forEach(renderTask);
}

function renderTask(task) {
    const li = document.createElement('li');
    li.className = 'task-item' + (task.completed ? ' completed' : '');

    const label = document.createElement('span');
    label.className = 'title';
    label.textContent = task.title;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => updateTask(task._id, { completed: checkbox.checked }));

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', () => deleteTask(task._id));

    const actions = document.createElement('div');
    actions.className = 'task-actions';
    actions.appendChild(delBtn);

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(actions);
    taskList.appendChild(li);
}

taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = taskInput.value.trim();
    if (!title) return;
    const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
    });
    const newTask = await res.json();
    renderTask(newTask);
    taskInput.value = '';
});

async function updateTask(id, updates) {
    await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates)
    });
    fetchTasks();
}

async function deleteTask(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchTasks();
}

fetchTasks();