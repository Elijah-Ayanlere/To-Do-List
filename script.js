function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const taskItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-checkbox');
        checkbox.onchange = () => {
            if (checkbox.checked) {
                taskItem.classList.add('completed');
                alert('Task completed successfully!');
            } else {
                taskItem.classList.remove('completed');
            }
        };

        const taskText = document.createElement('span');
        taskText.textContent = taskInput.value;

        const timestamp = document.createElement('span');
        const now = new Date();
        timestamp.textContent = ` [Added: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}]`;
        timestamp.classList.add('timestamp');

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        taskItem.appendChild(timestamp);

        taskList.appendChild(taskItem);

        taskInput.value = '';

        // Alert for adding a new task
        alert('Successfully added a new task!');
    } else {
        alert('Please enter a task.');
    }
}

function clearAll() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
}
