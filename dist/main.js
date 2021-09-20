const taskInput = document.querySelector('#task__input');
const taskForm = document.querySelectorAll('.task-container')[0];
const taskSection = document.querySelector('#tasks-section');

class Task {
    constructor(name) {
        this.name = name;
    }

    setName(new_name) {
        this.name = new_name;
    }
}

taskForm.addEventListener('submit', e => {
    let taskName = handleTaskInput(e);
    let new_task = new Task(taskName);
    console.log(new_task);
    addTaskToPage(new_task);
    });

function handleTaskInput(e) {
    let taskName = document.querySelector('#task__input').value;
    console.log(taskName);
    e.target.reset();
    return taskName;
}

function addTaskToPage(task) {
    const new_task = document.createElement('div');
    new_task.setAttribute('class','task');
    new_task.innerText = task.name;
    taskSection.appendChild(new_task);
}

