document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task');
    const newTaskInput = document.getElementById('new-task');
    const tasksList = document.getElementById('tasks');

    addTaskButton.addEventListener('click', addTask);
    newTaskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `${taskText} <span class="timestamp">${getCurrentTimestamp()}</span> <button onclick="removeTask(this)">&#x2716;</button>`;
            tasksList.appendChild(li);
            newTaskInput.value = '';
        }
    }

    window.removeTask = function(button) {
        const li = button.parentNode;
        tasksList.removeChild(li);
    }

    function getCurrentTimestamp() {
        const now = new Date();
        return now.toLocaleString();
    }
});