const taskInput = document.querySelector('#task__input');
const taskForm = document.querySelectorAll('.task-input-container')[0];
const taskSection = document.querySelector('#tasks-section');
const taskDisplay = document.querySelectorAll('.task-display')[0];
const tasks = [];
const localStorage = window.localStorage;


const DEFAULT_TASKS_SECTION = `<h1 class="tasks__project-name">Home</h1>
<form
  class="task-input-container"
  onsubmit="return false"
  autocomplete="off"
>
  <i class="plus"></i>
  <input id="task__input" type="text" placeholder="New Task" />
</form>`


class Task {
    constructor(name) {
        this.name = name;
    }

    setName(new_name) {
        this.name = new_name;
    }
}

window.onload = (e) => {
    if (localStorage.length != 0) {

        updateTasksFromLocalStorage();
    }
}

taskForm.addEventListener('submit', e => {
    let taskName = getTaskNameFromForm(e);
    // create new Task object
    let new_task = new Task(taskName);
    // add task to tasks array
    addToTasks(new_task);
    // update local storage
    updateLocalStorage();
    // render all of the tasks
    clearTasks();
    renderAllTasks();
    });



function getTaskNameFromForm(e) {
    let taskName = document.querySelector('#task__input').value;
    e.target.reset();
    return taskName;
}

function addToTasks(task) {
    tasks.push(task);
}

function updateLocalStorage() {
    localStorage.clear();
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(localStorage);
}

function clearTasks() {
    taskDisplay.innerHTML = ''; 
}

function renderAllTasks() {
    for (let i = 0; i < tasks.length; i++) {
        renderTask(tasks[i]);
    }
}

function updateTasksFromLocalStorage() {
    const localTasks = JSON.parse(localStorage.tasks);
    for (let i=0; i < localTasks.length; i++) {
        addToTasks(localTasks[i]);
    }
    renderAllTasks();
}

function removeTask(e) {

    // removeFromLocalStorage(task)
    // renderAllTasks()

}

function renderTask(task) {
    const new_task_container = document.createElement('div');
    new_task_container.setAttribute('class', 'task-container');
    
    const colorBox = document.createElement('div');
    colorBox.setAttribute('class','color-box');
    new_task_container.appendChild(colorBox);
    
    colorBox.addEventListener('click', (e) => {e.target.classList.toggle('completed-task')});
    
    const taskValue = document.createElement('input');
    taskValue.setAttribute('type', 'text');
    taskValue.setAttribute('class', 'task');
    taskValue.setAttribute('value', task.name);

    new_task_container.appendChild(taskValue);

    taskDisplay.appendChild(new_task_container);
}

